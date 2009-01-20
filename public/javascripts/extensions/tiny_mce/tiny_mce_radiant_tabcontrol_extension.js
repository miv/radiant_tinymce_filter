TabControl.prototype.select = function(tab) {
  if (this.selected) this.before_select_callback(this.selected.label);
  if (Object.isString(tab)) tab = this.tabs.get(tab);
  if (this.selected) this.selected.unselect();
  tab.select();
  this.selected = tab;
  var persist = this.pageId() + ':' + this.selected.id;
  document.cookie = "current_tab=" + persist + "; path=/admin";
  this.select_callback(tab.label);
};

TabControl.prototype.select_callback = function(pagename){};
TabControl.prototype.before_select_callback = function(previouspage){};
