(function(){var t={9709:function(t,e,r){"use strict";var a={};r.r(a);var n=r(9242),i=r(3396);const o={class:"app"};function c(t,e,r,a,n,c){const s=(0,i.up)("vMainWrapper");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(s)])}var s=r(7139),p=r.p+"img/home.8fd30713.svg",u=r.p+"img/cart.514e4256.svg";const l={class:"v-main-wrapper"},m={class:"v-main-wrapper__header"},d={class:"v-main-wrapper__header-content container"},_=(0,i._)("div",{class:"v-main-wrapper__header-item"},[(0,i._)("img",{src:p,alt:""})],-1),g=(0,i._)("div",{class:"v-main-wrapper__header-item"}," ПРЕДЗАКАЗ ",-1),f=(0,i._)("div",{class:"v-main-wrapper__header-item"}," КОНЦТОВАРЫ ",-1),v=(0,i._)("div",{class:"v-main-wrapper__header-item"}," БОНУСНАЯ ПРОГРАММА ",-1),T=(0,i._)("div",{class:"v-main-wrapper__header-item"}," АКЦИИ ",-1),h=(0,i._)("img",{src:u,alt:""},null,-1),C={class:"v-main-wrapper__cart-quantity cart-text"},E={class:"v-main-wrapper__main container"},w=(0,i._)("footer",{class:"v-main-wrapper__footer"}," c. 2022. Чурцев Константин. ",-1);function R(t,e,r,a,n,o){const c=(0,i.up)("router-link"),p=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("header",m,[(0,i._)("div",d,[_,g,(0,i.Wm)(c,{to:{name:"catalog"},class:"v-main-wrapper__header-item"},{default:(0,i.w5)((()=>[(0,i.Uk)(" КНИГИ ")])),_:1}),f,v,T,(0,i.Wm)(c,{to:{name:"cart"},class:"v-main-wrapper__header-item"},{default:(0,i.w5)((()=>[h,(0,i._)("div",C,(0,s.zw)(t.CART.length),1)])),_:1})])]),(0,i._)("main",E,[(0,i.Wm)(p)]),w])}var j=r(65),O={name:"v-main-wrapper",components:{},props:{},data(){return{}},computed:(0,j.Se)(["CART"]),methods:{},watch:{},mounted(){}},y=r(89);const I=(0,y.Z)(O,[["render",R]]);var b=I,D={name:"App",components:{vMainWrapper:b}};const A=(0,y.Z)(D,[["render",c]]);var M=A,S=(r(7658),r(4311)),P={state:{products:[]},mutations:{SET_PRODUCTS_TO_STATE:(t,e)=>{let r=1;t.products=[],e.forEach((e=>{e.article="T"+r,t.products.push(e),r++}))}},actions:{GET_PRODUCTS_FROM_API({commit:t}){return(0,S.Z)("http://localhost:3000/books",{method:"GET"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))}},getters:{PRODUCTS(t){return t.products}}},x={SET_CART:(t,e)=>{let r=!1;t.cart.map((function(t){t.article===e.article&&(r=!0,t.quantity++,t.totalPrice=t.quantity*t.price)})),r||(e.quantity=1,e.totalPrice=e.price,t.cart.push(e)),console.log(t.cart),localStorage.setItem("cart",JSON.stringify(t.cart))},REMOEV_FROM_CART:(t,e)=>{t.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(t.cart))},INCREMENT_ITEM:(t,e)=>{t.cart[e].quantity++,t.cart[e].totalPrice+=t.cart[e].price,localStorage.setItem("cart",JSON.stringify(t.cart))},DECREMENT_ITEM:(t,e)=>{t.cart[e].quantity>1&&(t.cart[e].quantity--,t.cart[e].totalPrice-=t.cart[e].price,localStorage.setItem("cart",JSON.stringify(t.cart)))}},k={ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOEV_FROM_CART",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT_ITEM",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT_ITEM",e)}},N={CART(t){return t.cart}},U={state:{cart:JSON.parse(localStorage.getItem("cart")||"[]")},mutations:x,actions:k,getters:N};const F=(0,j.MT)({modules:{product:P,cart:U}});var q=F,z=r(2483);const G={class:"v-catalog"},W={class:"v-catalog__tips"},Z={class:"form-radio-btn"},V=(0,i._)("label",{for:"radio-1"},"Все книги",-1),J={class:"form-radio-btn"},L=(0,i._)("label",{for:"radio-2"},"Новинки литературы",-1),$={class:"form-radio-btn"},H=(0,i._)("label",{for:"radio-3"},"Лучшие из лучших",-1),K={class:"form-radio-btn"},Y=(0,i._)("label",{for:"radio-4"},"Скоро в продаже",-1),B={class:"v-catalog__list"};function Q(t,e,r,a,o,c){const s=(0,i.up)("vCatalogItem");return(0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("div",W,[(0,i._)("div",Z,[(0,i.wy)((0,i._)("input",{id:"radio-1",type:"radio",name:"tips",value:"All","onUpdate:modelValue":e[0]||(e[0]=t=>o.tip=t),checked:""},null,512),[[n.G2,o.tip]]),V]),(0,i._)("div",J,[(0,i.wy)((0,i._)("input",{id:"radio-2",type:"radio",name:"tips",value:"New","onUpdate:modelValue":e[1]||(e[1]=t=>o.tip=t)},null,512),[[n.G2,o.tip]]),L]),(0,i._)("div",$,[(0,i.wy)((0,i._)("input",{id:"radio-3",type:"radio",name:"tips",value:"Top","onUpdate:modelValue":e[2]||(e[2]=t=>o.tip=t)},null,512),[[n.G2,o.tip]]),H]),(0,i._)("div",K,[(0,i.wy)((0,i._)("input",{id:"radio-4",type:"radio",name:"tips",value:"Coming","onUpdate:modelValue":e[3]||(e[3]=t=>o.tip=t)},null,512),[[n.G2,o.tip]]),Y])]),(0,i._)("div",B,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.filtredProducts,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t.article,product_data:t,onAddToCart:c.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}const X={class:"v-catalog-item"},tt=["src"],et={class:"v-catalog-item__name"},rt={class:"v-catalog-item__author"},at={class:"v-catalog-item__price"},nt=(0,i._)("img",{src:u,alt:""},null,-1),it=(0,i._)("div",{class:"cart-text"},"+",-1),ot=[nt,it];function ct(t,e,a,n,o,c){return(0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("img",{class:"v-catalog-item__img",src:r(1281)("./"+a.product_data.image),alt:"img"},null,8,tt),(0,i._)("p",et,(0,s.zw)(a.product_data.name),1),(0,i._)("p",rt,(0,s.zw)(a.product_data.author),1),(0,i._)("p",at,(0,s.zw)(a.product_data.price)+" ₽",1),(0,i._)("button",{class:"v-catalog-item__add-to-cart-btn btn",onClick:e[0]||(e[0]=(...t)=>c.addToCart&&c.addToCart(...t))},ot)])}var st={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{addToCart(){this.$emit("addToCart",this.product_data)}}};const pt=(0,y.Z)(st,[["render",ct]]);var ut=pt,lt={name:"v-catalog",components:{vCatalogItem:ut},data(){return{tip:"",sortedProduct:[]}},computed:{...(0,j.Se)(["PRODUCTS","CART"]),filtredProducts(){return this.sortedProduct.length>0?this.sortedProduct:this.PRODUCTS}},methods:{...(0,j.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t)}},watch:{tip(t){let e=[];this.PRODUCTS.map((function(r){r.tips===t&&e.push(r)})),this.sortedProduct=e}},mounted(){this.GET_PRODUCTS_FROM_API()}};const mt=(0,y.Z)(lt,[["render",Q]]);var dt=mt;const _t={class:"v-cart"},gt=(0,i._)("h1",null,"КОРЗИНА",-1),ft={key:0},vt=(0,i._)("p",null,"В корзине нет ни одного товара",-1),Tt={key:1,class:"v-cart__total"},ht=(0,i._)("p",{class:"v-cart__total-title"},"Общая стоимость:",-1);function Ct(t,e,r,a,n,o){const c=(0,i.up)("router-link"),p=(0,i.up)("vCartItem");return(0,i.wg)(),(0,i.iD)("div",_t,[gt,0==t.CART.length?((0,i.wg)(),(0,i.iD)("div",ft,[vt,(0,i._)("p",null,[(0,i.Uk)("Вернитесь в "),(0,i.Wm)(c,{to:{name:"catalog"}},{default:(0,i.w5)((()=>[(0,i.Uk)("каталог")])),_:1}),(0,i.Uk)(" и добавьте товары в корзину.")])])):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.CART,((t,e)=>((0,i.wg)(),(0,i.j4)(p,{key:t.article,cart_item_data:t,onDeleteFromCart:t=>o.deleteFromCart(e),onIncrementItem:t=>o.incrementItem(e),onDecrementItem:t=>o.decrementItem(e)},null,8,["cart_item_data","onDeleteFromCart","onIncrementItem","onDecrementItem"])))),128)),t.CART.length>0?((0,i.wg)(),(0,i.iD)("div",Tt,[ht,(0,i._)("p",null,(0,s.zw)(o.cartTotalPrice)+" ₽",1)])):(0,i.kq)("",!0)])}const Et={class:"v-cart-item"},wt=["src"],Rt={class:"v-cart-item__info"},jt={class:"v-cart-item__author"},Ot={class:"v-cart-item__quantity"},yt=(0,i._)("p",null,"Количество:",-1),It={class:"v-cart-item__totle-price"};function bt(t,e,a,n,o,c){return(0,i.wg)(),(0,i.iD)("div",Et,[(0,i._)("img",{class:"v-cart-item__image",src:r(1281)("./"+a.cart_item_data.image),alt:""},null,8,wt),(0,i._)("div",Rt,[(0,i._)("p",null,(0,s.zw)(a.cart_item_data.name),1),(0,i._)("p",jt,(0,s.zw)(a.cart_item_data.author),1)]),(0,i._)("div",Ot,[yt,(0,i._)("p",null,[(0,i._)("span",{class:"v-cart-item__quantit-button",onClick:e[0]||(e[0]=(...t)=>c.decrementItem&&c.decrementItem(...t))},"-"),(0,i.Uk)(" "+(0,s.zw)(a.cart_item_data.quantity)+" ",1),(0,i._)("span",{class:"v-cart-item__quantit-button",onClick:e[1]||(e[1]=(...t)=>c.incrementItem&&c.incrementItem(...t))},"+")])]),(0,i._)("div",It,(0,s.zw)(a.cart_item_data.totalPrice)+" ₽ ",1),(0,i._)("button",{onClick:e[2]||(e[2]=(...t)=>c.deleteFromCart&&c.deleteFromCart(...t)),class:"v-cart-item__del-btn"},"✕")])}var Dt={name:"v-cart-item",props:{cart_item_data:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{deleteFromCart(){this.$emit("deleteFromCart")},decrementItem(){this.$emit("decrementItem")},incrementItem(){this.$emit("incrementItem")}},mounted(){}};const At=(0,y.Z)(Dt,[["render",bt]]);var Mt=At,St={name:"v-cart",components:{vCartItem:Mt},props:{cart_data:{type:Array,default(){return[]}}},data(){return{}},computed:{...(0,j.Se)(["CART"]),cartTotalPrice(){let t=0;return this.CART.forEach((e=>{t+=e.totalPrice})),t}},methods:{...(0,j.nv)(["DELETE_FROM_CART","DECREMENT_CART_ITEM","INCREMENT_CART_ITEM"]),deleteFromCart(t){this.DELETE_FROM_CART(t)},incrementItem(t){this.INCREMENT_CART_ITEM(t)},decrementItem(t){this.DECREMENT_CART_ITEM(t)}}};const Pt=(0,y.Z)(St,[["render",Ct]]);var xt=Pt,kt=(0,z.p7)({history:(0,z.PO)(),routes:[{path:"/online-shop-vue/",component:dt,name:"catalog"},{path:"/online-shop-vue/cart",component:xt,name:"cart"}]});const Nt=(0,n.ri)(M);Nt.use(kt),Nt.use(q),Nt.use(a["default"]),Nt.mount("#app")},1281:function(t,e,r){var a={"./Атака чудовищного хомяка.jpg":9381,"./Бегущий по лезвию.jpg":5971,"./Высота одиночества.jpg":9747,"./Вяжи.jpg":4722,"./Гойда.jpg":6453,"./Золушка.jpg":9145,"./Камень грез.jpg":2622,"./Когда порвется нить.jpg":1819,"./Мечты сбываются всегда.jpg":7442,"./Милый дом Чи. Книга 11.jpg":4194,"./Невеста туманного дракона.jpg":9657,"./Общество сороки.jpg":6969,"./Путь домохозяина. Том 1.jpg":1007,"./Свидетель мертвых.jpg":7985,"./Тэянг.jpg":8069,"./Уроки химии.jpg":9687,"./Утренняя книга.jpg":6081,"./Шумерские мифы.jpg":5510,"./Я бы поправил.jpg":3148,"./боги и чудовища.jpg":299};function n(t){var e=i(t);return r(e)}function i(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id=1281},9381:function(t,e,r){"use strict";t.exports=r.p+"img/Атака чудовищного хомяка.e955f65f.jpg"},5971:function(t,e,r){"use strict";t.exports=r.p+"img/Бегущий по лезвию.498d6ce9.jpg"},9747:function(t,e,r){"use strict";t.exports=r.p+"img/Высота одиночества.6d3b1954.jpg"},4722:function(t,e,r){"use strict";t.exports=r.p+"img/Вяжи.69346808.jpg"},6453:function(t,e,r){"use strict";t.exports=r.p+"img/Гойда.be03dade.jpg"},9145:function(t,e,r){"use strict";t.exports=r.p+"img/Золушка.14950c58.jpg"},2622:function(t,e,r){"use strict";t.exports=r.p+"img/Камень грез.2055cef9.jpg"},1819:function(t,e,r){"use strict";t.exports=r.p+"img/Когда порвется нить.461fa70f.jpg"},7442:function(t,e,r){"use strict";t.exports=r.p+"img/Мечты сбываются всегда.495d5f47.jpg"},4194:function(t,e,r){"use strict";t.exports=r.p+"img/Милый дом Чи. Книга 11.cd5ed6ea.jpg"},9657:function(t,e,r){"use strict";t.exports=r.p+"img/Невеста туманного дракона.ba232d23.jpg"},6969:function(t,e,r){"use strict";t.exports=r.p+"img/Общество сороки.24775a33.jpg"},1007:function(t,e,r){"use strict";t.exports=r.p+"img/Путь домохозяина. Том 1.265f955e.jpg"},7985:function(t,e,r){"use strict";t.exports=r.p+"img/Свидетель мертвых.2639984a.jpg"},8069:function(t,e,r){"use strict";t.exports=r.p+"img/Тэянг.6ed1164e.jpg"},9687:function(t,e,r){"use strict";t.exports=r.p+"img/Уроки химии.fc2fd5b0.jpg"},6081:function(t,e,r){"use strict";t.exports=r.p+"img/Утренняя книга.0e9f8135.jpg"},5510:function(t,e,r){"use strict";t.exports=r.p+"img/Шумерские мифы.bcab6c27.jpg"},3148:function(t,e,r){"use strict";t.exports=r.p+"img/Я бы поправил.481969db.jpg"},299:function(t,e,r){"use strict";t.exports=r.p+"img/боги и чудовища.49f0e0a4.jpg"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[s])}))?a.splice(s--,1):(c=!1,i<o&&(o=i));if(c){t.splice(u--,1);var p=n();void 0!==p&&(e=p)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/online-shop-vue/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,o=a[0],c=a[1],s=a[2],p=0;if(o.some((function(e){return 0!==t[e]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var u=s(r)}for(e&&e(a);p<o.length;p++)i=o[p],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},a=self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(9709)}));a=r.O(a)})();
//# sourceMappingURL=app.67438469.js.map