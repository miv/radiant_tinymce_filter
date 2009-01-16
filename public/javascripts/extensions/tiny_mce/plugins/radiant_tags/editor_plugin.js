/**
 * $Id: editor_plugin_src.js 201 2007-02-12 15:56:56Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright � 2004-2008, Moxiecode Systems AB, All rights reserved.
 */

(function() {
	tinymce.create('tinymce.plugins.RadiantTagsPlugin', {
		init : function(ed, url) {
			var t = this, dialect = ed.getParam('tags_dialect', 'radiant').toLowerCase();

			ed.onBeforeSetContent.add(function(ed, o) {
				o.content = t['_' + dialect + '_tags2html'](o.content);
			});

			ed.onPostProcess.add(function(ed, o) {
				if (o.set)
					o.content = t['_' + dialect + '_tags2html'](o.content);

				if (o.get)
					o.content = t['_' + dialect + '_html2tags'](o.content);
			});
		},

		getInfo : function() {
			return {
				longname : 'Radiant Tags Plugin',
				author : 'Michael Varamashvili',
				authorurl : 'http://tinymce.moxiecode.com',
				infourl : 'http://wiki.moxiecode.com',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods

		_radiant_html2tags : function(s) {
			s = tinymce.trim(s);

			function rep(re, str) {
				s = s.replace(re, str);
			};

			rep(/&lt;(r:.*?)&gt;/ig, "<$1>");

			return s; 
		},

		_radiant_tags2html : function(s) {
			s = tinymce.trim(s);

			function rep(re, str) {
				s = s.replace(re, str);
			};

			rep(/<(r:.*?)>/ig, "&lt;$1&gt;");
			

			return s; 
		}
	});

	// Register plugin
	tinymce.PluginManager.add('radiant_tags', tinymce.plugins.RadiantTagsPlugin);
})();