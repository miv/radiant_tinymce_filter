var TinyMCEConfig = {
  // General options
  mode : "none",
  theme : "advanced",
  plugins : "radiant_tags,advimage,preview,searchreplace,contextmenu,paste,style,table,noneditable,xhtmlxtras",

  theme_advanced_toolbar_location : "top",
  theme_advanced_toolbar_align : "left",
  theme_advanced_buttons1 : "formatselect,styleselect,separator,bold,italic,del,abbr,acronym,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,bullist,numlist,outdent,indent,separator,sup,sub,hr,charmap,separator,forecolor,backcolor",
  theme_advanced_buttons2 : "undo,redo,separator,cut,copy,paste,pastetext,pasteword,separator,search,replace,selectall,separator,link,unlink,image,separator,visualaid,removeformat,cleanup,code,preview,styleprops",
  theme_advanced_buttons3 : "tablecontrols",
  entity_encoding : "raw",
  add_unload_trigger : false,


  auto_resize : true,
  hide_selects_on_submit : true,
//  cleanup_serializer : 'xml',

  remove_linebreaks : false,
  convert_urls : false,

  height: "370",

  theme_advanced_styles : "",
  table_cell_styles : "",
  table_row_styles : "",

  theme_advanced_statusbar_location : "bottom",
  inline_styles : true,
//  verify_html: true,
  paste_use_dialog : false,
  paste_auto_cleanup_on_paste : true,
  convert_fonts_to_spans: true,
//  apply_source_formatting : true,
  paste_convert_headers_to_strong : false,
  paste_strip_class_attributes : "all",

  extended_valid_elements: "a[name|href|target|title|onclick]"
};


