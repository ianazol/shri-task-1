window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,o=(this.document||this.ownerDocument).querySelectorAll(e),n=this;do{for(t=o.length;--t>=0&&o.item(t)!==n;);}while(t<0&&(n=n.parentElement));return n});