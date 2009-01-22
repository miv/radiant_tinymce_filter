require_dependency 'application'

class TinymceFilterExtension < Radiant::Extension
  version "1.0"
  description "Provides a TinyMCE filter for the Radiant CMS."
  url "http://github.com/miv/radiant_tinymce_filter/tree/master"
  
  def activate
    # Load the filter
    TinyMceFilter
    
    
    admin.page.edit.add :form, "/admin/shared/js"
    admin.snippet.edit.add :form_top, "/admin/shared/js"
    #admin.page.edit.add :part_controls, "/admin/page/editor_control"
    #admin.snippet.edit.add :form_top, "/admin/page/editor_control"
  end
  
  def deactivate
#    admin.page.edit.remove :part_controls
  end
    
end