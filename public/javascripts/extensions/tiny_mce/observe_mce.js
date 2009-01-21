// most of this code is an ugly hack because tinyMCE did't work for me when i needed multiple instances of it on one page
var current_observer

tinyMCE.init(TinyMCEConfig);
TabControl.prototype.select_callback = function(partIndex) {
  current_observer=function() { toggleEditor(partIndex) };
  Event.observe($(page_part(partIndex)+'_filter_id'),'change', current_observer);
  instantiateMCEEditor(partIndex);
}

TabControl.prototype.before_select_callback = function(previouspage) {
  if (current_observer) Event.stopObserving($(page_part(previouspage)+'_filter_id'),'change', current_observer); // just in case
  

  ed = tinyMCE.get(page_part(previouspage)+'_content');
  if (ed) {
    ed.remove();
    tinyMCE.init(TinyMCEConfig);
  }
  
}

function instantiateMCEEditor(partIndex){
  var usedFilter = $(page_part(partIndex)+'_filter_id');
  if(usedFilter.value == 'TinyMce'){
    tinyMCE.init(TinyMCEConfig);
    putInEditor(partIndex);
  }
}

function toggleEditor(partIndex){

  var usedFilter = $(page_part(partIndex)+'_filter_id');
  text_area_id_name = page_part(partIndex)+ '_content';
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
  text_area_id_name = page_part(partIndex)+'_content';
  if (!tinyMCE.get(text_area_id_name)) {    
    tinyMCE.execCommand('mceAddControl',false,text_area_id_name);
    ed = tinyMCE.get(text_area_id_name);
    ed.focus();
  }
}


function page_part(pagepart) {
  if (pagepart=='snippet')
    return pagepart
  else
    return 'part_'+pagepart;
}