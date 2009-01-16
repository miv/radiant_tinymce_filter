require_dependency 'application'

class TinymceFilterExtension < Radiant::Extension
  version "1.0"
  description "Provides a TinyMCE filter for the Radiant CMS."
  url "http://github.com/ginius/radiant_tinymce_filter/tree/master"
  
  def activate
    # Load the filter
    TinyMceFilter
    
    
    # Add the appropriate stylesheets to the javascripts array in the page and snippet controller
    Admin::PagesController.class_eval do
      before_filter :add_tinymce_javascripts, :only => [:edit]
      
      def add_tinymce_javascripts
        @javascripts << 'extensions/tiny_mce/tiny_mce.js' << 'extensions/tiny_mce/tiny_mce_settings.js' << 'extensions/tiny_mce/observe_mce.js'
      end
      
    end
    
    Admin::SnippetsController.class_eval do
      before_filter :add_tinymce_javascripts, :only => [:edit]
      
      def add_tinymce_javascripts
        @javascripts << 'extensions/tiny_mce/tiny_mce.js' << 'extensions/tiny_mce/tiny_mce_settings.js' << 'extensions/tiny_mce/observe_mce.js'
      end
      
    end
   
    admin.page.edit.add :part_controls, "/admin/page/editor_control"
  end
  
  def deactivate
#    admin.page.edit.remove :part_controls
  end
    
end