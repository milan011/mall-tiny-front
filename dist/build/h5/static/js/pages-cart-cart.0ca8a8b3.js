(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-cart"],{"2c90":function(t,e,i){"use strict";i.r(e);var n=i("4a2c"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"4a2c":function(t,e,i){"use strict";var n=i("4ea4");i("8e6e"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("96cf");var s=n(i("1da1")),a=n(i("ade3")),r=i("c4c8"),o=n(i("4d0f")),c=i("2f62");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){(0,a.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={components:{rfAttrContent:o.default},data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,theIndex:null,oldIndex:null,isStop:!1,cartList:[],hasLogin:null,footerbottom:0,specClass:"none",productDetail:{base_attribute_format:[],sku:[]},specSelected:[],specChildList:[],specList:[],currentSkuId:"",moneySymbol:this.moneySymbol,loading:!0,singleSkuText:this.singleSkuText}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.getCartItemList("refresh")},onShow:function(){this.footerbottom=document.getElementsByTagName("uni-tabbar")[0].offsetHeight+"px",this.initData()},methods:u(u({},(0,c.mapMutations)(["setCartNum"])),{},{toggleSpec:function(t){var e=this;if(0!==parseInt(t.status,10))if("show"===this.specClass){if(!this.hasLogin)return this.specClass="none",void this.$mHelper.toast("请先登录！");this.handleCartItemUpdateSku(this.currentSkuId,t.skuId),this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)}else"none"===this.specClass&&t&&this.getProductDetail(t)},getProductDetail:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.currentSkuId=e.sku_id,t.next=3,this.$http.get("".concat(r.productDetail),{id:e.product_id}).then(function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.productDetail=n.data,i.productDetail.sku_name=e.sku_name,i.specClass="show";case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),hideSpec:function(){var t=this;this.specClass="hide",setTimeout((function(){t.specClass="none"}),250)},stopPrevent:function(){},deleteCartItem:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(e,i){var n,s,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[],i)n.push(parseInt(e,10));else for(s=0;s<this.cartList.length;s++)this.cartList[s].selected&&n.push(parseInt(this.cartList[s].sku_id,10));return t.next=4,this.$http.post("".concat(r.cartItemDel),{sku_ids:JSON.stringify(n)}).then((function(){a.selectedList.length=0,a.isAllselected=!1,a.sumPrice=0,a.getCartItemList(),a.oldIndex=null,a.theIndex=null}));case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}(),handleCartItemUpdateSku:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(e,i){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("".concat(r.cartItemUpdateSku),{sku_id:e,new_sku_id:i}).then((function(){n.selectedList.length=0,n.isAllselected=!1,n.sumPrice=0,n.getCartItemList()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}(),initData:function(){this.hasLogin=this.$mStore.getters.hasLogin,this.hasLogin?(this.theIndex=null,this.oldIndex=null,this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.getCartItemList()):(this.cartList=[],this.selectedList.length=0,this.loading=!1)},navTo:function(t){this.$mStore.getters.hasLogin||uni.setStorageSync("backToPage",JSON.stringify({route:"/pages/cart/cart"})),this.$mRouter.push({route:t})},getCartItemList:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(r.cartItemList)).then((function(t){i.loading=!1,"refresh"===e&&uni.stopPullDownRefresh(),i.cartList=t.data;var n=0;t.data.forEach((function(t){1===parseInt(t.status,10)&&(n+=1)})),i.setCartNum(n)})).catch((function(){i.cartList=[],i.loading=!1,"refresh"===e&&uni.stopPullDownRefresh()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),clearCart:function(t){var e=this,i=t?"清空失效商品？":"清空购物车？";uni.showModal({content:i,success:function(){var i=(0,s.default)(regeneratorRuntime.mark((function i(n){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.confirm){i.next=3;break}return i.next=3,e.$http.post("".concat(r.cartItemClear),t).then((function(){e.selectedList.length=0,e.isAllselected=!1,e.sumPrice=0,e.getCartItemList()}));case 3:case"end":return i.stop()}}),i)})));function n(t){return i.apply(this,arguments)}return n}()})},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(s)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex===this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout((function(){i.oldIndex=null}),150)))}},touchEnd:function(t,e){this.isStop=!1},selected:function(t,e){if(0!==parseInt(e.status,10)){this.cartList[t].selected=!this.cartList[t].selected;var i=this.selectedList.indexOf(this.cartList[t].id);i>-1?this.selectedList.splice(i,1):this.selectedList.push(this.cartList[t].id),this.isAllselected=this.selectedList.length===this.cartList.length,this.sum()}},allSelect:function(){for(var t=this.cartList.length,e=[],i=0;i<t;i++)0!==parseInt(this.cartList[i].status,10)&&(this.cartList[i].selected=!this.isAllselected,e.push(this.cartList[i].id));this.selectedList=this.isAllselected?[]:e,this.isAllselected=!(this.isAllselected||0===e.length),e.length>0&&this.sum()},sub:function(t,e){this.cartList[e].number<=1||(this.cartList[e].number--,this.numberChange(t))},add:function(t,e){this.cartList[e].number++,this.numberChange(t,void 0,e,"add")},discard:function(){},numberChange:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(e,i,n,s){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i&&(this.cartList[n].number=i.detail.value),t.next=3,this.$http.post("".concat(r.cartItemUpdateNum),{sku_id:e.sku_id,num:e.number}).then((function(t){200===t.code?a.sum():("add"===s&&a.cartList[n].number--,a.$mHelper.toast(t.message))})).catch((function(){"add"===s&&a.cartList[n].number--}));case 3:case"end":return t.stop()}}),t,this)})));function e(e,i,n,s){return t.apply(this,arguments)}return e}(),createOrder:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){var e,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.selectedList.length){t.next=2;break}return t.abrupt("return");case 2:for(e={},i=[],n=this.cartList.length,s=0;s<n;s++)this.cartList[s].selected&&i.push(parseInt(this.cartList[s].id,10));e.type="cart",e.data=i.join(","),this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.navTo("/pages/order/create/order?data=".concat(JSON.stringify(e)));case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sum:function(){this.sumPrice=0;for(var t=this.cartList.length,e=[],i=0;i<t;i++)this.cartList[i].selected&&(e.push(this.cartList[i]),this.sumPrice=this.arrSort(e));this.sumPrice=this.sumPrice.toFixed(2)},floor:function(t){return Math.floor(100*t)/100},arrSort:function(t){for(var e=this,i={},n=[],s=0;s<t.length;s++){var a=t[s];if(i[a.product.id])for(var r=0;r<n.length;r++){var o=n[r];if(o.data[0].product.id===a.product.id){o.data.push(a);break}}else n.push({id:a.product.id,num:0,price:0,data:[a]}),i[a.product.id]=a}var c=[];n.forEach((function(t){t.data.forEach((function(e){t.num+=parseInt(e.number,10),t.price+=parseInt(e.number,10)*e.price}));for(var e=t.data[0].ladderPreferential||0,i=0;i<e.length;i++)if(t.num>=parseInt(e[i].quantity,10)){e[i].num=t.num,e[i].itemPrice=t.data[0].price,e[i].totalPrice=t.price,c.push(e[i]);break}}));var l=0,u=0;return c.forEach((function(t){1===parseInt(t.type,10)?u+=t.price*t.num:u+=t.totalPrice-e.floor(t.itemPrice*t.price/100)*t.num})),n.forEach((function(t){l+=t.price})),l-u}})};e.default=d},"6c39":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cart"},[0===t.cartList.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-text",{staticClass:"iconfont icongouwuche",class:"text-"+t.themeColor.name}),t.hasLogin?i("v-uni-view",{staticClass:"empty-tips"},[t._v("空空如也"),t.hasLogin?i("v-uni-navigator",{staticClass:"navigator",class:"text-"+t.themeColor.name,attrs:{url:"../category/category","open-type":"switchTab"}},[t._v("随便逛逛>")]):t._e()],1):i("v-uni-view",{staticClass:"empty-tips"},[t._v("空空如也"),i("v-uni-view",{staticClass:"navigator",class:"text-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/logintype")}}},[t._v("登录/注册 >")])],1)],1):i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-view",{staticClass:"btn-clear",class:"text-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearCart({lose_status:1})}}},[t._v("清空失效商品")]),t._l(t.cartList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"rf-cart-row"},[i("v-uni-view",{staticClass:"menu",class:"bg-"+t.themeColor.name,on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.deleteCartItem(e.sku_id,"one")}}},[i("v-uni-text",{staticClass:"iconfont icon iconiconfontshanchu1"})],1),i("v-uni-view",{staticClass:"carrier",class:[t.theIndex===n?"open":t.oldIndex===n?"close":""],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(n,e)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(n,e)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(n,e)}}},[i("v-uni-view",{staticClass:"checkbox-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selected(n,e)}}},[i("v-uni-view",{staticClass:"checkbox",class:[0===parseInt(e.status,10)?"checkbox-disabled text-"+t.themeColor.name:"text-"+t.themeColor.name]},[i("v-uni-view",{class:[e.selected?"on bg-"+t.themeColor.name:""]})],1)],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.product_img}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title in2line",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product?id="+e.product.id)}}},[t._v(t._s(e.product_name))]),i("v-uni-view",{staticClass:"state-wrapper"},[i("v-uni-view",{staticClass:"spec",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toggleSpec(e)}}},[t._v(t._s(e.sku_name||t.singleSkuText))]),0===parseInt(e.status,10)?i("v-uni-view",{staticClass:"state"},[t._v("已失效")]):t._e()],1),i("v-uni-view",{staticClass:"price-number"},[1===parseInt(e.status,10)?i("v-uni-view",{staticClass:"price"},[t._v(t._s(t.moneySymbol)+t._s(e.sku&&e.sku.price))]):i("v-uni-view",{staticClass:"remark"},[t._v(t._s(e.remark))]),1===parseInt(e.status,10)?i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"sub",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.sub(e,n)}}},[i("v-uni-text",{staticClass:"iconfont icon icon-jianhao"})],1),i("v-uni-view",{staticClass:"input",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[i("v-uni-input",{class:"text-"+t.themeColor.name,attrs:{type:"number"},on:{input:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.numberChange(e,i,n)}},model:{value:e.number,callback:function(i){t.$set(e,"number",i)},expression:"row.number"}})],1),i("v-uni-view",{staticClass:"add",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.add(e,n)}}},[i("v-uni-text",{staticClass:"iconfont icon iconjia1"})],1)],1):t._e()],1)],1)],1)],1)],1)}))],2),0!==t.cartList.length?i("v-uni-view",{staticClass:"footer",style:{bottom:t.footerbottom}},[i("v-uni-view",{staticClass:"checkbox-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allSelect.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"checkbox",class:"text-"+t.themeColor.name},[i("v-uni-view",{class:[t.isAllselected?"on bg-"+t.themeColor.name:""]})],1),i("v-uni-view",{staticClass:"text"},[t._v("全选")])],1),t.selectedList.length>0?i("v-uni-view",{staticClass:"delBtn",class:"text-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteCartItem.apply(void 0,arguments)}}},[t._v("删除")]):t._e(),t.selectedList.length>0?i("v-uni-view",{staticClass:"delBtn",class:"text-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearCart()}}},[t._v("清空")]):t._e(),i("v-uni-view",{staticClass:"settlement"},[i("v-uni-view",{staticClass:"sum"},[t._v("合计:"),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.moneySymbol)+t._s(t.sumPrice))])],1),i("v-uni-view",{staticClass:"btn",class:"bg-"+t.themeColor.name,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createOrder.apply(void 0,arguments)}}},[t._v("结算("+t._s(t.selectedList.length)+")")])],1)],1):t._e(),"show"===t.specClass?i("v-uni-view",{staticClass:"popup spec show",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpec.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpec.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"layer",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("rf-attr-content",{attrs:{isSelectedNum:!1,product:t.productDetail},on:{toggle:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec.apply(void 0,arguments)}}})],1)],1):t._e(),i("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},a=[]},"8d3f":function(t,e,i){var n=i("90d7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("6b82c8b8",n,!0,{sourceMap:!1,shadowMode:!1})},"90d7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-89218524]{background-color:#fff}.checkbox-box[data-v-89218524]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.checkbox-box .checkbox[data-v-89218524]{width:%?35?%;height:%?35?%;border-radius:100%;border:solid %?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.checkbox-box .checkbox .on[data-v-89218524]{width:%?25?%;height:%?25?%;border-radius:100%}.checkbox-box .checkbox-disabled[data-v-89218524]{border:solid %?2?% #c0c4cc}.checkbox-box .text[data-v-89218524]{font-size:%?28?%;margin-left:%?10?%}.status[data-v-89218524]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.header[data-v-89218524]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.header .title[data-v-89218524]{font-size:%?36?%}.place[data-v-89218524]{background-color:#fff;height:%?100?%}.goods-list[data-v-89218524]{width:100%;padding:0 0 %?100?% 0}.goods-list .btn-clear[data-v-89218524]{text-align:right;padding:0 %?30?%;font-size:%?30?%}.goods-list .tis[data-v-89218524]{width:100%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.empty[data-v-89218524]{position:fixed;left:0;top:0;width:100%;height:100vh;padding-bottom:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff}.empty .icongouwuche[data-v-89218524]{font-size:%?132?%}.empty .empty-tips[data-v-89218524]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?26?%;color:#c0c4cc}.empty .empty-tips .navigator[data-v-89218524]{margin-left:%?16?%}.footer[data-v-89218524]{width:100%;padding:0 2%;background-color:#fbfbfb;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;position:fixed;bottom:%?0?%;z-index:5}.footer .delBtn[data-v-89218524]{border:solid %?1?%;padding:0 %?24?%;height:%?42?%;border-radius:%?24?%;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .settlement[data-v-89218524]{width:52%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .settlement .sum[data-v-89218524]{font-size:%?28?%;margin-right:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.footer .settlement .sum .money[data-v-89218524]{font-weight:600}.footer .settlement .btn[data-v-89218524]{padding:0 %?26?%;height:%?50?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?30?%}body.?%PAGE?%[data-v-89218524]{background-color:#fff}",""]),t.exports=e},bf12:function(t,e,i){"use strict";i.r(e);var n=i("6c39"),s=i("2c90");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("d473");var r,o=i("f0c5"),c=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"89218524",null,!1,n["a"],r);e["default"]=c.exports},d473:function(t,e,i){"use strict";var n=i("8d3f"),s=i.n(n);s.a}}]);