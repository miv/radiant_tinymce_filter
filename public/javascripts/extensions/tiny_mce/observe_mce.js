tinyMCE.init({
  // General options
  mode : "none",
  theme : "advanced",
  plugins : "radiant_tags",
  auto_resize : true,
  hide_selects_on_submit : true,
  cleanup_serializer : 'xml'
});


function instantiateMCEEditor(partIndex){
  var usedFilter = $('part_' + partIndex +'_filter_id');
  if(usedFilter.value == 'TinyMce'){
    putInEditor(partIndex);
  }
}

function toggleEditor(partIndex){
  var usedFilter = $('part_' + partIndex +'_filter_id');
  text_area_id_name = 'part_' + partIndex + '_content';

  if(
    (usedFilter.value == 'TinyMce')
    &&
    (
      !tinyMCE.get(text_area_id_name) ||
      (tinyMCE.get(text_area_id_name) && tinyMCE.get(text_area_id_name).isHidden()))
    ){
    tinyMCE.get(text_area_id_name).show();
  }
  else
  if (!tinyMCE.get(text_area_id_name).isHidden()){
    tinyMCE.get(text_area_id_name).hide();
  }
}

function removeEditor(partIndex){
  text_area_id_name = 'part_' + partIndex + '_content';  
  if (tinyMCE.get(text_area_id_name)) {
    tinyMCE.execCommand('mceRemoveControl', false, text_area_id_name);
  }
}

function putInEditor(partIndex){
  text_area_id_name = 'part_' + partIndex + '_content';

  if (!tinyMCE.get(text_area_id_name)) {
    tinyMCE.execCommand('mceAddControl', false, text_area_id_name);
  }
}
