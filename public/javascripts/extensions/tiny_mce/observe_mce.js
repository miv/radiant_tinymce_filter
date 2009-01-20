// most of this code is an ugly hack because tinyMCE did't work for me when i needed multiple instances of it on one page

tinyMCE.init(TinyMCEConfig);
TabControl.prototype.select_callback = function(partIndex) {
  instantiateMCEEditor(partIndex);
}

TabControl.prototype.before_select_callback = function(previouspage) {
  Event.stopObserving($('part_'+previouspage+'_filter_id'),'change'); // just in case
  Event.observe($('part_'+previouspage+'_filter_id'),'change',function(){
    toggleEditor(previouspage)
  });

  ed = tinyMCE.get('part_'+previouspage+'_content');
  if (ed) {
    ed.remove();
    tinyMCE.init(TinyMCEConfig);
  }
  
}

function instantiateMCEEditor(partIndex){
  var usedFilter = $('part_' + partIndex +'_filter_id');

  if(usedFilter.value == 'TinyMce'){
    tinyMCE.init(TinyMCEConfig);
    putInEditor(partIndex);
  }
}

function toggleEditor(partIndex){
  var usedFilter = $('part_' + partIndex +'_filter_id');
  text_area_id_name = 'part_' + partIndex + '_content';

  editor = tinyMCE.get(text_area_id_name)
  
  if(usedFilter.value == 'TinyMce') {
    if (!editor) {
      putInEditor(partIndex)
    } else if (editor && editor.isHidden()) {
      editor.show();
    }
  } else if (editor && !editor.isHidden()){
    editor.hide();
  }

}

function putInEditor(partIndex){
  text_area_id_name = 'part_' + partIndex + '_content';

  if (!tinyMCE.get(text_area_id_name)) {    
    tinyMCE.execCommand('mceAddControl',false,text_area_id_name);
    ed = tinyMCE.get(text_area_id_name);
    ed.focus();
  }
}
