(function(){var t={4700:function(t,e,r){"use strict";var a={};r.r(a);var n=r(9242),o=r(3396);const i={class:"app"};function c(t,e,r,a,n,c){const s=(0,o.up)("vMainWrapper");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(s)])}var s=r(7139),p=r.p+"img/home.8fd30713.svg",u=r.p+"img/cart.514e4256.svg";const l={class:"v-main-wrapper"},m={class:"v-main-wrapper__header"},d={class:"v-main-wrapper__header-content container"},_=(0,o._)("div",{class:"v-main-wrapper__header-item"},[(0,o._)("img",{src:p,alt:""})],-1),g=(0,o._)("div",{class:"v-main-wrapper__header-item"}," ПРЕДЗАКАЗ ",-1),v=(0,o._)("div",{class:"v-main-wrapper__header-item"}," АКЦИИ ",-1),f=(0,o._)("img",{src:u,alt:""},null,-1),T={class:"v-main-wrapper__cart-quantity cart-text"},h={class:"v-main-wrapper__main container"};function C(t,e,r,a,n,i){const c=(0,o.up)("router-link"),p=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("header",m,[(0,o._)("div",d,[_,g,(0,o.Wm)(c,{to:{name:"catalog"},class:"v-main-wrapper__header-item"},{default:(0,o.w5)((()=>[(0,o.Uk)(" КНИГИ ")])),_:1}),v,(0,o.Wm)(c,{to:{name:"cart"},class:"v-main-wrapper__header-item"},{default:(0,o.w5)((()=>[f,(0,o._)("div",T,(0,s.zw)(t.CART.length),1)])),_:1})])]),(0,o._)("main",h,[(0,o.Wm)(p)]),(0,o._)("footer",{class:"v-main-wrapper__footer",onClick:e[0]||(e[0]=(...t)=>i.removeLocalStorageCart&&i.removeLocalStorageCart(...t))}," c. 2022. Чурцев Константин. ")])}var E=r(65),j={name:"v-main-wrapper",components:{},props:{},data(){return{}},computed:(0,E.Se)(["CART"]),methods:{removeLocalStorageCart(){localStorage.removeItem("cart")}},watch:{},mounted(){}},w=r(89);const R=(0,w.Z)(j,[["render",C]]);var O=R,b={name:"App",components:{vMainWrapper:O}};const y=(0,w.Z)(b,[["render",c]]);var I=y,D=(r(7658),r(4311)),A={state:{products:[]},mutations:{SET_PRODUCTS_TO_STATE:(t,e)=>{let r=1;t.products=[],e.forEach((e=>{e.article="T"+r,t.products.push(e),r++}))}},actions:{GET_PRODUCTS_FROM_API({commit:t}){return(0,D.Z)("https://my-json-server.typicode.com/Kostczev/online-shop-vue/books",{method:"GET"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))}},getters:{PRODUCTS(t){return t.products}}},M={SET_CART:(t,e)=>{let r=!1;t.cart.map((function(t){t.article===e.article&&(r=!0,t.quantity++,t.totalPrice=t.quantity*t.price)})),r||(e.quantity=1,e.totalPrice=e.price,t.cart.push(e)),console.log(t.cart),localStorage.setItem("cart",JSON.stringify(t.cart))},REMOEV_FROM_CART:(t,e)=>{t.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(t.cart))},INCREMENT_ITEM:(t,e)=>{t.cart[e].quantity++,t.cart[e].totalPrice+=t.cart[e].price,localStorage.setItem("cart",JSON.stringify(t.cart))},DECREMENT_ITEM:(t,e)=>{t.cart[e].quantity>1&&(t.cart[e].quantity--,t.cart[e].totalPrice-=t.cart[e].price,localStorage.setItem("cart",JSON.stringify(t.cart)))}},S={ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOEV_FROM_CART",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT_ITEM",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT_ITEM",e)}},k={CART(t){return t.cart}},P={state:{cart:JSON.parse(localStorage.getItem("cart")||"[]")},mutations:M,actions:S,getters:k};const x=(0,E.MT)({modules:{product:A,cart:P}});var U=x,N=r(2483);const F={class:"v-catalog"},q={class:"v-catalog__tips"},z={class:"form-radio-btn"},G=(0,o._)("label",{for:"radio-1"},[(0,o.Uk)("Все "),(0,o._)("span",{class:"visible-on-the-pc"},"книги")],-1),L={class:"form-radio-btn"},W=(0,o._)("label",{for:"radio-2"},[(0,o.Uk)("Новинки "),(0,o._)("span",{class:"visible-on-the-pc"},"литературы")],-1),Z={class:"form-radio-btn"},V=(0,o._)("label",{for:"radio-3"},[(0,o.Uk)("Лучшие "),(0,o._)("span",{class:"visible-on-the-pc"},"из лучших")],-1),J={class:"form-radio-btn"},$=(0,o._)("label",{for:"radio-4"},[(0,o.Uk)("Скоро "),(0,o._)("span",{class:"visible-on-the-pc"},"в продаже")],-1),K={class:"v-catalog__list"};function H(t,e,r,a,i,c){const s=(0,o.up)("vCatalogItem");return(0,o.wg)(),(0,o.iD)("div",F,[(0,o._)("div",q,[(0,o._)("div",z,[(0,o.wy)((0,o._)("input",{id:"radio-1",type:"radio",name:"tips",value:"All","onUpdate:modelValue":e[0]||(e[0]=t=>i.tip=t),checked:""},null,512),[[n.G2,i.tip]]),G]),(0,o._)("div",L,[(0,o.wy)((0,o._)("input",{id:"radio-2",type:"radio",name:"tips",value:"New","onUpdate:modelValue":e[1]||(e[1]=t=>i.tip=t)},null,512),[[n.G2,i.tip]]),W]),(0,o._)("div",Z,[(0,o.wy)((0,o._)("input",{id:"radio-3",type:"radio",name:"tips",value:"Top","onUpdate:modelValue":e[2]||(e[2]=t=>i.tip=t)},null,512),[[n.G2,i.tip]]),V]),(0,o._)("div",J,[(0,o.wy)((0,o._)("input",{id:"radio-4",type:"radio",name:"tips",value:"Coming","onUpdate:modelValue":e[3]||(e[3]=t=>i.tip=t)},null,512),[[n.G2,i.tip]]),$])]),(0,o._)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.filtredProducts,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.article,product_data:t,onAddToCart:c.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}const Y={class:"v-catalog-item"},B=["src"],Q={class:"v-catalog-item__name"},X={class:"v-catalog-item__author"},tt={class:"v-catalog-item__price"},et=(0,o._)("img",{src:u,alt:""},null,-1),rt=(0,o._)("div",{class:"cart-text"},"+",-1),at=[et,rt];function nt(t,e,a,n,i,c){return(0,o.wg)(),(0,o.iD)("div",Y,[(0,o._)("img",{class:"v-catalog-item__img",src:r(1281)("./"+a.product_data.image),alt:"img"},null,8,B),(0,o._)("p",Q,(0,s.zw)(a.product_data.name),1),(0,o._)("p",X,(0,s.zw)(a.product_data.author),1),(0,o._)("p",tt,(0,s.zw)(a.product_data.price)+" ₽",1),(0,o._)("button",{class:"v-catalog-item__add-to-cart-btn btn",onClick:e[0]||(e[0]=(...t)=>c.addToCart&&c.addToCart(...t))},at)])}var ot={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{addToCart(){this.$emit("addToCart",this.product_data)}}};const it=(0,w.Z)(ot,[["render",nt]]);var ct=it,st={name:"v-catalog",components:{vCatalogItem:ct},data(){return{tip:"",sortedProduct:[]}},computed:{...(0,E.Se)(["PRODUCTS","CART"]),filtredProducts(){return this.sortedProduct.length>0?this.sortedProduct:this.PRODUCTS}},methods:{...(0,E.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t)}},watch:{tip(t){let e=[];this.PRODUCTS.map((function(r){r.tips===t&&e.push(r)})),this.sortedProduct=e}},mounted(){this.GET_PRODUCTS_FROM_API()}};const pt=(0,w.Z)(st,[["render",H]]);var ut=pt;const lt={class:"v-cart"},mt=(0,o._)("h1",null,"КОРЗИНА",-1),dt={key:0},_t=(0,o._)("p",null,"В корзине нет ни одного товара",-1),gt={key:1,class:"v-cart__total"},vt=(0,o._)("p",{class:"v-cart__total-title"},"Общая стоимость:",-1);function ft(t,e,r,a,n,i){const c=(0,o.up)("router-link"),p=(0,o.up)("vCartItem");return(0,o.wg)(),(0,o.iD)("div",lt,[mt,0==t.CART.length?((0,o.wg)(),(0,o.iD)("div",dt,[_t,(0,o._)("p",null,[(0,o.Uk)("Вернитесь в "),(0,o.Wm)(c,{to:{name:"catalog"}},{default:(0,o.w5)((()=>[(0,o.Uk)("каталог")])),_:1}),(0,o.Uk)(" и добавьте товары в корзину.")])])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.CART,((t,e)=>((0,o.wg)(),(0,o.j4)(p,{key:t.article,cart_item_data:t,onDeleteFromCart:t=>i.deleteFromCart(e),onIncrementItem:t=>i.incrementItem(e),onDecrementItem:t=>i.decrementItem(e)},null,8,["cart_item_data","onDeleteFromCart","onIncrementItem","onDecrementItem"])))),128)),t.CART.length>0?((0,o.wg)(),(0,o.iD)("div",gt,[vt,(0,o._)("p",null,(0,s.zw)(i.cartTotalPrice)+" ₽",1)])):(0,o.kq)("",!0)])}const Tt={class:"v-cart-item"},ht=["src"],Ct={class:"v-cart-item__info"},Et={class:"v-cart-item__author"},jt={class:"v-cart-item__quantity"},wt=(0,o._)("p",null,"Количество:",-1),Rt={class:"v-cart-item__totle-price"};function Ot(t,e,a,n,i,c){return(0,o.wg)(),(0,o.iD)("div",Tt,[(0,o._)("img",{class:"v-cart-item__image",src:r(1281)("./"+a.cart_item_data.image),alt:""},null,8,ht),(0,o._)("div",Ct,[(0,o._)("p",null,(0,s.zw)(a.cart_item_data.name),1),(0,o._)("p",Et,(0,s.zw)(a.cart_item_data.author),1)]),(0,o._)("div",jt,[wt,(0,o._)("p",null,[(0,o._)("span",{class:"v-cart-item__quantit-button",onClick:e[0]||(e[0]=(...t)=>c.decrementItem&&c.decrementItem(...t))},"-"),(0,o.Uk)(" "+(0,s.zw)(a.cart_item_data.quantity)+" ",1),(0,o._)("span",{class:"v-cart-item__quantit-button",onClick:e[1]||(e[1]=(...t)=>c.incrementItem&&c.incrementItem(...t))},"+")])]),(0,o._)("div",Rt,(0,s.zw)(a.cart_item_data.totalPrice)+" ₽ ",1),(0,o._)("button",{onClick:e[2]||(e[2]=(...t)=>c.deleteFromCart&&c.deleteFromCart(...t)),class:"v-cart-item__del-btn"},"✕")])}var bt={name:"v-cart-item",props:{cart_item_data:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{deleteFromCart(){this.$emit("deleteFromCart")},decrementItem(){this.$emit("decrementItem")},incrementItem(){this.$emit("incrementItem")}},mounted(){}};const yt=(0,w.Z)(bt,[["render",Ot]]);var It=yt,Dt={name:"v-cart",components:{vCartItem:It},props:{cart_data:{type:Array,default(){return[]}}},data(){return{}},computed:{...(0,E.Se)(["CART"]),cartTotalPrice(){let t=0;return this.CART.forEach((e=>{t+=e.totalPrice})),t}},methods:{...(0,E.nv)(["DELETE_FROM_CART","DECREMENT_CART_ITEM","INCREMENT_CART_ITEM"]),deleteFromCart(t){this.DELETE_FROM_CART(t)},incrementItem(t){this.INCREMENT_CART_ITEM(t)},decrementItem(t){this.DECREMENT_CART_ITEM(t)}}};const At=(0,w.Z)(Dt,[["render",ft]]);var Mt=At,St=(0,N.p7)({history:(0,N.PO)(),routes:[{path:"/",redirect:{name:"catalog"}},{path:"/online-shop-vue/",component:ut,name:"catalog"},{path:"/online-shop-vue/cart",component:Mt,name:"cart"}]});const kt=(0,n.ri)(I);kt.use(St),kt.use(U),kt.use(a["default"]),kt.mount("#app")},1281:function(t,e,r){var a={"./Атака чудовищного хомяка.jpg":9381,"./Бегущий по лезвию.jpg":5971,"./Высота одиночества.jpg":9747,"./Вяжи.jpg":4722,"./Гойда.jpg":6453,"./Золушка.jpg":9145,"./Камень грез.jpg":2622,"./Когда порвется нить.jpg":1819,"./Мечты сбываются всегда.jpg":7442,"./Милый дом Чи. Книга 11.jpg":4194,"./Невеста туманного дракона.jpg":9657,"./Общество сороки.jpg":6969,"./Путь домохозяина. Том 1.jpg":1007,"./Свидетель мертвых.jpg":7985,"./Тэянг.jpg":8069,"./Уроки химии.jpg":9687,"./Утренняя книга.jpg":6081,"./Шумерские мифы.jpg":5510,"./Я бы поправил.jpg":3148,"./боги и чудовища.jpg":299};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id=1281},9381:function(t,e,r){"use strict";t.exports=r.p+"img/Атака чудовищного хомяка.e955f65f.jpg"},5971:function(t,e,r){"use strict";t.exports=r.p+"img/Бегущий по лезвию.498d6ce9.jpg"},9747:function(t,e,r){"use strict";t.exports=r.p+"img/Высота одиночества.6d3b1954.jpg"},4722:function(t,e,r){"use strict";t.exports=r.p+"img/Вяжи.69346808.jpg"},6453:function(t,e,r){"use strict";t.exports=r.p+"img/Гойда.be03dade.jpg"},9145:function(t,e,r){"use strict";t.exports=r.p+"img/Золушка.14950c58.jpg"},2622:function(t,e,r){"use strict";t.exports=r.p+"img/Камень грез.2055cef9.jpg"},1819:function(t,e,r){"use strict";t.exports=r.p+"img/Когда порвется нить.461fa70f.jpg"},7442:function(t,e,r){"use strict";t.exports=r.p+"img/Мечты сбываются всегда.495d5f47.jpg"},4194:function(t,e,r){"use strict";t.exports=r.p+"img/Милый дом Чи. Книга 11.cd5ed6ea.jpg"},9657:function(t,e,r){"use strict";t.exports=r.p+"img/Невеста туманного дракона.ba232d23.jpg"},6969:function(t,e,r){"use strict";t.exports=r.p+"img/Общество сороки.24775a33.jpg"},1007:function(t,e,r){"use strict";t.exports=r.p+"img/Путь домохозяина. Том 1.265f955e.jpg"},7985:function(t,e,r){"use strict";t.exports=r.p+"img/Свидетель мертвых.2639984a.jpg"},8069:function(t,e,r){"use strict";t.exports=r.p+"img/Тэянг.6ed1164e.jpg"},9687:function(t,e,r){"use strict";t.exports=r.p+"img/Уроки химии.fc2fd5b0.jpg"},6081:function(t,e,r){"use strict";t.exports=r.p+"img/Утренняя книга.0e9f8135.jpg"},5510:function(t,e,r){"use strict";t.exports=r.p+"img/Шумерские мифы.bcab6c27.jpg"},3148:function(t,e,r){"use strict";t.exports=r.p+"img/Я бы поправил.481969db.jpg"},299:function(t,e,r){"use strict";t.exports=r.p+"img/боги и чудовища.49f0e0a4.jpg"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[s])}))?a.splice(s--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var p=n();void 0!==p&&(e=p)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/online-shop-vue/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],c=a[1],s=a[2],p=0;if(i.some((function(e){return 0!==t[e]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var u=s(r)}for(e&&e(a);p<i.length;p++)o=i[p],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(4700)}));a=r.O(a)})();
//# sourceMappingURL=app.57854ae0.js.map