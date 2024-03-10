(function(){"use strict";var t={9906:function(t,e,l){var a=l(5130),s=l(6768);const c={style:{"overflow-x":"hidden"}};function r(t,e){const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",c,[(0,s.bF)(l)])}var o=l(1241);const i={},n=(0,o.A)(i,[["render",r]]);var d=n,u=l(1387);function g(t,e,l,a,c,r){const o=(0,s.g2)("the-menu"),i=(0,s.g2)("the-carousel"),n=(0,s.g2)("products"),d=(0,s.g2)("coffee"),u=(0,s.g2)("about"),g=(0,s.g2)("the-footer");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(o),(0,s.bF)(i),(0,s.bF)(n),(0,s.bF)(d),(0,s.bF)(u),(0,s.bF)(g)],64)}const p={class:"fixed-top bg-white",style:{"box-shadow":"0 4px 4px 0 rgba(0,0,0,.03)"}},v={class:"navbar navbar-expand-lg pt-4"},m={class:"container-fluid"},f=(0,s.Lk)("div",{class:"navbar-toggler border-0","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",style:{"z-index":"1000",cursor:"pointer"}},[(0,s.Lk)("i",{class:"bi bi-list"})],-1),b={class:"collapse navbar-collapse pt-4",id:"navbarScroll"},k={class:"navbar-nav ms-auto mb-0 my-lg-0 navbar-nav-scroll"},x={class:"nav-item"},h={class:"nav-item"},L=(0,s.Lk)("img",{src:"/img/logo.png",class:"mx-auto",width:"150px",alt:""},null,-1),y=[L],w={class:"navbar-nav me-auto mb-0 my-lg-0 navbar-nav-scroll"},C={class:"nav-item"},E={class:"nav-item"},T=(0,s.Lk)("img",{src:"/img/logo.png",class:"mx-auto",width:"100px",alt:""},null,-1),P=[T];function S(t,e,l,a,c,r){return(0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("nav",v,[(0,s.Lk)("div",m,[f,(0,s.Lk)("div",b,[(0,s.Lk)("ul",k,[(0,s.Lk)("li",x,[(0,s.Lk)("div",{class:"nav-link",onClick:e[0]||(e[0]=t=>a.scrollTo("home"))},"خانه")]),(0,s.Lk)("li",h,[(0,s.Lk)("div",{class:"nav-link",onClick:e[1]||(e[1]=t=>a.scrollTo("products"))},"محصولات")])]),(0,s.Lk)("div",{class:"navbar-brand mx-0 text-center d-block d-none d-lg-inline-block cursor-pointer",onClick:e[2]||(e[2]=t=>a.scrollTo("home"))},y),(0,s.Lk)("ul",w,[(0,s.Lk)("li",C,[(0,s.Lk)("div",{class:"nav-link",onClick:e[3]||(e[3]=t=>a.scrollTo("about"))},"درباره ما")]),(0,s.Lk)("li",E,[(0,s.Lk)("div",{class:"nav-link",onClick:e[4]||(e[4]=t=>a.scrollTo("contact"))},"تماس با ما")])])])]),(0,s.Lk)("div",{class:"navbar-brand m-0 text-center d-lg-none w-100 position-absolute top-0 right-0 pt-2 cursor-pointer",onClick:e[5]||(e[5]=t=>a.scrollTo("home"))},P)])])}var F={name:"Menu",setup(){const t=t=>{window.innerWidth<992&&document.querySelector(".navbar-toggler").click(),document.querySelector("#"+t).scrollIntoView()};return{scrollTo:t}}};const X=(0,o.A)(F,[["render",S]]);var j=X,_=l(4232);const M={id:"home",class:"scrollElement"},A={key:0,id:"slider",class:"carousel carousel-dark slide h-100","data-bs-ride":"carousel","data-bs-pause":"false"},z={class:"carousel-indicators"},O=["data-bs-slide-to","aria-label"],q={class:"carousel-inner h-100"},H={class:"row align-self-center d-none d-lg-flex flex-row-reverse h-100"},I={class:"col-lg-7 h-100 d-grid"},Z=["src"],U={class:"col-lg-5 h-100 d-grid",style:{background:"url('/img/slideBg.png') top right no-repeat","background-size":"100%"}},W={class:"carousel-text align-self-center text-light pb-5 fw-bolder mt-4"},K={class:"ps-4"},Q={class:"ps-4"},V={class:"row align-self-center d-lg-none h-100 p-2",style:{background:"url('/img/slideBg2.png') bottom right no-repeat","background-size":"100%"}},B={class:"col-12 d-grid"},D=["src"],N={class:"col-12 d-grid"},R={class:"carousel-text align-self-end text-light fw-bolder mt-4 mb-5 pb-5",style:{"font-size":"35px"}},$={class:"ps-4"},G={class:"ps-4"},J=(0,s.Fv)('<button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2);function Y(t,e,l,a,c,r){return(0,s.uX)(),(0,s.CE)("div",M,[a.data?.length?((0,s.uX)(),(0,s.CE)("div",A,[(0,s.Lk)("div",z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.data,((t,e)=>((0,s.uX)(),(0,s.CE)("button",{key:e,type:"button","data-bs-target":"#slider","data-bs-slide-to":e,class:(0,_.C4)({active:0==e}),"aria-current":"true","aria-label":"Slide "+e},null,10,O)))),128))]),(0,s.Lk)("div",q,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.data,((t,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:(0,_.C4)(["carousel-item h-100",{active:0==e}]),"data-bs-interval":"3000"},[(0,s.Lk)("div",H,[(0,s.Lk)("div",I,[(0,s.Lk)("img",{src:a.url+t.image,class:"img-fluid align-self-center me-auto pe-lg-4",alt:""},null,8,Z)]),(0,s.Lk)("div",U,[(0,s.Lk)("div",W,[(0,s.Lk)("p",K,(0,_.v_)(t.title),1),(0,s.Lk)("p",Q,(0,_.v_)(t.subTitle),1)])])]),(0,s.Lk)("div",V,[(0,s.Lk)("div",B,[(0,s.Lk)("img",{src:a.url+t.image,class:"img-fluid align-self-center",alt:""},null,8,D)]),(0,s.Lk)("div",N,[(0,s.Lk)("div",R,[(0,s.Lk)("p",$,(0,_.v_)(t.title),1),(0,s.Lk)("p",G,(0,_.v_)(t.subTitle),1)])])])],2)))),128))]),J])):(0,s.Q3)("",!0)])}var tt=l(782);const{onMounted:et}=l(1175);var lt={name:"Carousel",setup(){const t=(0,tt.Pj)(),e=t.state.panelUrl,l=()=>{t.commit("getSlides")};return et((()=>{l()})),{data:(0,s.EW)((()=>t.state.slides)),getData:l,store:t,url:e}}};const at=(0,o.A)(lt,[["render",Y]]);var st=at;const ct=t=>((0,s.Qi)("data-v-9d6e96c0"),t=t(),(0,s.jt)(),t),rt={id:"products",class:"scrollElement row px-0 mx-0 justify-content-center min-vh-100",style:{"padding-top":"70px"}},ot=ct((()=>(0,s.Lk)("div",{class:"text-center mb-5"},[(0,s.Lk)("div",{class:"rounded-3 d-inline-block p-1 my-border"},[(0,s.Lk)("h1",{class:"my-bg d-inline-block mx-auto p-4 rounded-3 mb-0"},"محصولات کوپاکافه")])],-1))),it={class:"row col-lg-11 px-0 mx-0"},nt={class:"row px-0 mx-0 flex-row-reverse"},dt={class:"col-lg-7 px-4 px-lg-0"},ut={key:0,class:"row px-0 mx-0"},gt={class:"row px-0 mx-0 flex-row-reverse mb-5"},pt={class:"col-lg-12 p-0 d-flex justify-content-between mb-4 px-lg-4 mb-lg-0"},vt=["id","title","onClick"],mt={class:"products-container"},ft={class:"px-0 mx-0 products-inner"},bt=["id","onClick"],kt={class:"card-body pt-lg-5"},xt={class:"product-card-img card-img mb-3"},ht=["src"],Lt=["src"],yt={class:"card-title"},wt={class:"mb-lg-2"},Ct={class:"col-lg-5"},Et={key:0,class:"card border-0 rounded-4 mt-lg-5 pt-lg-4"},Tt={class:"card-body"},Pt={class:"card-img text-center"},St=["src"],Ft={class:"d-flex justify-content-center mb-3"},Xt={class:"card-img"},jt=["src"],_t={class:"card-img"},Mt=["src"],At={class:"card-title"};function zt(t,e,l,a,c,r){return(0,s.uX)(),(0,s.CE)("div",rt,[ot,(0,s.Lk)("div",it,[(0,s.Lk)("div",nt,[(0,s.Lk)("div",dt,[a.productsCats?((0,s.uX)(),(0,s.CE)("div",ut,[(0,s.Lk)("div",gt,[(0,s.Lk)("div",pt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.productsCats,((t,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"category my-border mx-1 mx-lg-0"},[(0,s.Lk)("div",{id:"cat"+e,class:(0,_.C4)(["w-100 h-100 rounded category-inner",{"category-active":0==e}]),title:t.title,onClick:l=>a.categoryToggle(t,e)},(0,_.v_)(t.title),11,vt)])))),128))])])])):(0,s.Q3)("",!0),(0,s.Lk)("div",mt,[(0,s.Lk)("div",ft,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.products,((t,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"col-6 col-lg-4 px-1 px-lg-3 mb-4"},[(0,s.Lk)("div",{class:(0,_.C4)(["card rounded-4 cursor-pointer product-card",{"product-active":0==e}]),id:"product"+e,onClick:l=>a.productToggle(t,e)},[(0,s.Lk)("div",kt,[(0,s.Lk)("div",xt,[(0,s.Lk)("img",{src:a.url+t.image1,class:"img1 img-fluid",alt:""},null,8,ht),t.image2?((0,s.uX)(),(0,s.CE)("img",{key:0,src:a.url+t.image2,class:"img2 img-fluid d-none",alt:""},null,8,Lt)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",yt,[(0,s.Lk)("p",wt,(0,_.v_)(t.title),1),(0,s.Lk)("small",null,(0,_.v_)(t.subTitle),1)])])],10,bt)])))),128))])])]),(0,s.Lk)("div",Ct,[a.product?((0,s.uX)(),(0,s.CE)("div",Et,[(0,s.Lk)("div",Tt,[(0,s.Lk)("div",Pt,[(0,s.Lk)("img",{id:"active-product-img",src:a.url+a.product.image1,class:"img-fluid",alt:""},null,8,St)]),(0,s.Lk)("div",Ft,[(0,s.Lk)("div",{id:"active-product-img-1",class:"card mx-2 cursor-pointer active-product-img-active p-1",onClick:e[0]||(e[0]=t=>a.activeProductImgToggle(1)),style:{width:"100px"}},[(0,s.Lk)("div",Xt,[(0,s.Lk)("img",{src:a.url+a.product.image1,class:"img-fluid",alt:""},null,8,jt)])]),a.product.image2?((0,s.uX)(),(0,s.CE)("div",{key:0,id:"active-product-img-2",class:"card mx-2 cursor-pointer p-1",onClick:e[1]||(e[1]=t=>a.activeProductImgToggle(2)),style:{width:"100px"}},[(0,s.Lk)("div",_t,[(0,s.Lk)("img",{src:a.url+a.product.image2,class:"img-fluid",alt:""},null,8,Mt)])])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",At,[(0,s.Lk)("h3",null,(0,_.v_)(a.product.title),1),(0,s.Lk)("h5",null,(0,_.v_)(a.product.subTitle),1),(0,s.Lk)("p",null,(0,_.v_)(a.product.text),1)])])])):(0,s.Q3)("",!0)])])])])}var Ot=l(144),qt={name:"Products",setup(){const t=(0,tt.Pj)(),e=t.state.panelUrl,l=(0,s.EW)((()=>t.state.products)),a=(0,s.EW)((()=>t.state.productsCats)),c=(0,Ot.KR)({}),r=()=>{let e=new Promise((async(e,l)=>{await t.commit("getProductCats"),setTimeout((()=>{null!=a.value?e("Success"):l("Error")}),1e3)}));e.then((()=>{o(a.value[0].id),c.value=a.value[0].products[0]})).catch((t=>{console.error(t)}))},o=e=>{t.commit("getProducts",e)};(0,s.sV)((()=>{r()}));const i=(t,e)=>{document.querySelector(".category-active").classList.remove("category-active"),document.querySelector("#cat"+e).classList.add("category-active"),o(t.id),setTimeout((()=>{n(t.products[0],0)}),300)},n=(t,e)=>{document.querySelector(".product-active").classList.remove("product-active"),document.querySelector("#product"+e).classList.add("product-active"),c.value=t,d(1)},d=t=>{document.querySelector(".active-product-img-active ").classList.remove("active-product-img-active"),document.querySelector("#active-product-img-"+t).classList.add("active-product-img-active"),document.querySelector("#active-product-img").setAttribute("src",e+c.value["image"+t])};return{products:l,productsCats:a,getData:o,getCategories:r,store:t,url:e,categoryToggle:i,productToggle:n,product:c,activeProductImgToggle:d}}};const Ht=(0,o.A)(qt,[["render",zt],["__scopeId","data-v-9d6e96c0"]]);var It=Ht;const Zt={class:"coffee my-bg scrollElement",style:{"margin-top":"100px","margin-bottom":"150px"}},Ut=(0,s.Fv)('<img src="/img/coffee1.png" class="w-100" alt=""><div class="row d-grid"><div class="col-10 row align-self-center mx-auto flex-row-reverse"><div class="col-lg-5"><img src="/img/make.png" class="img-fluid" alt=""></div><div class="col-lg-7 d-grid pb-3"><div class="align-self-end"><h3 class="text-center my-5">راهنمای دم آوری قهوه</h3><p class="text-justify px-lg-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفادفزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p></div></div></div></div><img src="/img/coffee2.png" class="w-100" alt="">',3),Wt=[Ut];function Kt(t,e,l,a,c,r){return(0,s.uX)(),(0,s.CE)("div",Zt,Wt)}var Qt={name:"Coffee"};const Vt=(0,o.A)(Qt,[["render",Kt]]);var Bt=Vt;const Dt={id:"about",class:"my-5 scrollElement"},Nt=(0,s.Fv)('<div class="row d-grid"><div class="col-10 row align-self-center mx-auto"><div class="col-lg-6"><img src="/img/cup.png" class="img-fluid mt-2" alt=""></div><div class="col-lg-6 d-grid"><div class="align-self-end"><h3 class="text-center my-5">درباره کوپاکافه</h3><p class="text-justify px-lg-5"> تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تاان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفادفزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تا </p></div></div></div></div>',1),Rt=[Nt];function $t(t,e,l,a,c,r){return(0,s.uX)(),(0,s.CE)("div",Dt,Rt)}var Gt={name:"About"};const Jt=(0,o.A)(Gt,[["render",$t]]);var Yt=Jt;const te={id:"contact",class:"scrollElement",style:{"margin-top":"120px !important"}},ee={class:"my-bg",style:{background:"url('/img/footer.png') top left no-repeat","background-size":"100%","padding-bottom":"50px"}},le={class:"px-lg-5",style:{"padding-top":"100px"}},ae={class:"row px-5"},se={class:"col-xl-7 row mb-4"},ce=(0,s.Lk)("div",{class:"col-sm-6 col-xl-5 px-3"},[(0,s.Lk)("div",{class:"text-center mb-4"},[(0,s.Lk)("img",{src:"/img/logo.png",width:"200px"})]),(0,s.Lk)("small",{class:"d-block text-justify"}," برند الیت در سال ۱۳۸۴ به ثبت رسید و برند اصلی شرکت آماده لذیذ است. عصاره ، نودالیت و سوپ های نیمه آماده جزو اولین محصولات تولید شده توسط الیت می‌باشند. محصولات ترین استاندارد های مواد غذایی دنیا تولید می‌شود. ")],-1),re={class:"col-sm-6 col-xl-7 px-lg-3",style:{"margin-top":"80px"}},oe=(0,s.Lk)("p",{class:"text-center mb-4"},[(0,s.Lk)("b",null,"تماس با ما")],-1),ie={class:"p-0"},ne=(0,s.Fv)('<li class="d-flex mb-3"><span class="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg></span><small><a target="_blank" href="https://www.google.com/maps/place/AmadehLaziz/@35.7302329,51.3807302,19z/data=!4m6!3m5!1s0x3f8e07d020c7ca45:0x43bf4c9a730015f3!8m2!3d35.7301399!4d51.3807224!16s%2Fg%2F11c1r04p2q"> دفتر مرکزی: تهران، خیابان گیشا، خیابان هشتم، پلاک 58</a></small></li><li class="d-flex mb-3"><span class="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg></span><small dir="ltr"><a href="tel:+982141638699">+98 21 41638699</a></small></li>',2),de={class:"d-flex mb-3"},ue=(0,s.Lk)("span",{class:"me-2"},[(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-postcard",viewBox:"0 0 16 16"},[(0,s.Lk)("path",{"fill-rule":"evenodd",d:"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"})])],-1),ge=(0,s.Lk)("span",{id:"postalcode"}," 1446863914 ",-1),pe=(0,s.Fv)('<div class="col-sm-5 col-xl-5 px-3 d-grid"><div class="justify-content-between align-self-end d-none d-lg-flex"><div><img src="/img/c1.png" class="footer-img" alt=""></div><div><img src="/img/c2.png" class="footer-img" alt=""></div><div><img src="/img/c4.png" class="footer-img" alt=""></div><div><img src="/img/c3.png" class="footer-img" alt=""></div></div><div class="d-lg-none d-flex"><div class="p-2"><img src="/img/c1.png" class="footer-img" alt=""></div><div class="p-2"><img src="/img/c3.png" class="footer-img" alt=""></div></div><div class="d-lg-none d-flex"><div class="p-2"><img src="/img/c2.png" class="footer-img" alt=""></div><div class="p-2"><img src="/img/c4.png" class="footer-img" alt=""></div></div></div>',1),ve=(0,s.Lk)("div",{class:"row"},[(0,s.Lk)("div",{class:"col-12"},[(0,s.Lk)("small",{class:"d-block m-3 mx-5"},[(0,s.eW)(" © کلیه حقوق این وبسایت متعلق به شرکت "),(0,s.Lk)("br",{class:"d-sm-none"}),(0,s.eW)(" آماده لذیذ میباشد. ")])])],-1);function me(t,e,l,a,c,r){return(0,s.uX)(),(0,s.CE)("footer",te,[(0,s.Lk)("div",ee,[(0,s.Lk)("div",le,[(0,s.Lk)("div",ae,[(0,s.Lk)("div",se,[ce,(0,s.Lk)("div",re,[oe,(0,s.Lk)("ul",ie,[ne,(0,s.Lk)("li",de,[ue,(0,s.Lk)("small",{dir:"ltr",style:{cursor:"pointer",position:"relative"},onClick:e[0]||(e[0]=(...e)=>t.coppyCode&&t.coppyCode(...e))},[(0,s.eW)(" کد پستی: "),ge])])])])]),pe]),ve])])])}var fe={name:"Footer"};const be=(0,o.A)(fe,[["render",me]]);var ke=be,xe={name:"HomeView",components:{TheMenu:j,TheCarousel:st,Products:It,Coffee:Bt,About:Yt,TheFooter:ke}};const he=(0,o.A)(xe,[["render",g]]);var Le=he;const ye=[{path:"/",name:"home",component:Le}],we=(0,u.aE)({history:(0,u.LA)("/"),routes:ye});var Ce=we,Ee=(0,tt.y$)({state:{panelUrl:"https://panel.copacaffee.webagent.ir",slides:null,productsCats:null,products:null,product:null},mutations:{getSlides(t){axios.get(t.panelUrl+"/api/slide").then((e=>{t.slides=e.data})).catch()},getProductCats(t){axios.get(t.panelUrl+"/api/category/product").then((e=>{t.productsCats=e.data})).catch()},getProducts(t,e){axios.get(t.panelUrl+"/api/product?cat="+e).then((e=>{t.products=e.data})).catch()},getProduct(t,e){axios.get(t.panelUrl+"/api/product/"+e).then((e=>{t.product=e.data.product})).then((t=>{})).catch()}},actions:{getSlides(t){t.commit("getSlides")},getProductCats(t){t.commit("getProductCats")},getProducts(t){t.commit("getProducts")},getProduct(t){t.commit("getProduct")}}});window.axios=l(6425),(0,a.Ef)(d).use(Ee).use(Ce).mount("#app")}},e={};function l(a){var s=e[a];if(void 0!==s)return s.exports;var c=e[a]={exports:{}};return t[a].call(c.exports,c,c.exports,l),c.exports}l.m=t,function(){var t=[];l.O=function(e,a,s,c){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],c=t[d][2];for(var o=!0,i=0;i<a.length;i++)(!1&c||r>=c)&&Object.keys(l.O).every((function(t){return l.O[t](a[i])}))?a.splice(i--,1):(o=!1,c<r&&(r=c));if(o){t.splice(d--,1);var n=s();void 0!==n&&(e=n)}}return e}c=c||0;for(var d=t.length;d>0&&t[d-1][2]>c;d--)t[d]=t[d-1];t[d]=[a,s,c]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var a in e)l.o(e,a)&&!l.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};l.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,c,r=a[0],o=a[1],i=a[2],n=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)l.o(o,s)&&(l.m[s]=o[s]);if(i)var d=i(l)}for(e&&e(a);n<r.length;n++)c=r[n],l.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return l.O(d)},a=self["webpackChunkcopacafe"]=self["webpackChunkcopacafe"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=l.O(void 0,[504],(function(){return l(9906)}));a=l.O(a)})();
//# sourceMappingURL=app.6630f366.js.map