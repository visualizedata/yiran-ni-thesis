(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{491:function(t,n,e){"use strict";e.r(n);e(42),e(17),e(88);var r=e(288),o={components:{Landing:e(365).a},data:function(){return{VirusData:r,VirusOptions:[]}},mounted:function(){this.getVirusOptions()},methods:{getVirusOptions:function(){var t=this,n=r;Object.keys(n).forEach((function(e){var o={};o.text=e,o.value=e,o.virusName=e,o.genusCount=0,Object.keys(n[e]).forEach((function(t){Object.size=function(t){var n,e=0;for(n in t)t.hasOwnProperty(n)&&e++;return e};var c=Object.size(r[e]);o.familyCount=c;var f=n[e][t].genus;o.genusCount+=f.length})),t.VirusOptions.push(o)}))}}},c=e(16),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"main"},[n("Landing",{attrs:{VirusOptions:this.VirusOptions}})],1)}),[],!1,null,"b3591ea2",null);n.default=component.exports}}]);