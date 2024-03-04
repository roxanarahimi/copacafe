<template>
  <div class=" fixed-top bg-white" style="box-shadow: 0 4px 4px 0 rgba(0,0,0,.03);">
    <nav class="navbar navbar-expand-lg  pt-4">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse pt-4" id="navbarScroll">
          <ul class="navbar-nav ms-auto mb-0 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">خانه</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">محصولات</a>
            </li>
          </ul>
          <a class="navbar-brand mx-0 text-center d-block d-lg-inline-block">
            <img src="/img/logo.png" class="mx-auto" width="150px" alt="">
          </a>
          <ul class="navbar-nav me-auto mb-0 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">درباره ما</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">تماس با ما</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false" style="height: calc(100vh - 103px); margin-top:103px;">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner h-100">
      <div class="carousel-item px-3 active h-100" data-bs-interval="3000">
        <div class="row justify-content-center h-100">
          <div class="col-10 h-100 d-grid" style="">
            <div class="row align-self-center flex-row-reverse">
              <div class="col-lg-7">
                <img src="/img/slide1.png" class="img-fluid" alt="">
              </div><div class="col-lg-5 d-grid">
                <div class="carousel-text align-self-end my-color fw-bolder mt-4">
                  <p class="">کوپاکافه</p>
                  <p>طعم واقعی قهوه</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div class="carousel-item px-3 h-100" data-bs-interval="3000">
        <div class="row justify-content-center h-100">
          <div class="col-10 h-100 d-grid" style="">
            <div class="row align-self-center flex-row-reverse">
              <div class="col-lg-7">
                <img src="/img/slide2.png" class="img-fluid" alt="">
              </div><div class="col-lg-5 d-grid">
              <div class="carousel-text align-self-end my-color fw-bolder mt-4">
                <p class="">کوپاکافه</p>
                <p>دنیای تنوع و کیفیت</p>
              </div>
            </div>

            </div>
          </div>
        </div>

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div id="products" class=" row justify-content-center min-vh-100" style="padding-top: 70px">

    <div class="text-center mb-5">
      <div class="rounded-3 d-inline-block p-1" style="border: 1px solid #004400">
        <h1 class="my-bg d-inline-block mx-auto p-4 rounded-3 mb-0">محصولات کوپاکافه</h1>
      </div>

    </div>
    <div class="row col-10  ">
      <div class="d-none d-lg-block col-5"></div>
      <div class="row mb-5 px-2 col-lg-7 flex-row-reverse">
        <div class="col-lg-8 p-0 d-flex justify-content-between mb-4 mb-lg-0">
          <div v-for="(index,item) in 5" :key="index" class="category " style="padding:3px; border: 1px #004400 solid">
            <div :class="{'my-bg': index == 1} " class="w-100 h-100 rounded " style=" background-color: #e2e2e2">
              <i class="bi bi-cup-hot"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-grid">
        <p class="align-self-end m-0 ms-3">قهوه فوری</p>
      </div>

      </div>

      <div class="row flex-row-reverse">
        <div class="col-lg-7">
          <div class="row  d-none d-lg-flex">
            <div v-for="item in 6" class="col-4 px-3 mb-4">
              <div class="card rounded-4">
                <div class="card-body pt-5">
                  <div class="card-img mb-3">
                    <img src="/img/cc.webp" class="img-fluid" alt="">
                  </div>
                  <div class="card-title">
                    <p>قهوه فوری</p>
                    <small>بسته 500 گرمی</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div class=" d-lg-none w-100" style=" overflow-x: scroll">
           <div class="d-flex" style="min-width: 100%;">
             <div v-for="item in 6" class=" col-6 px-2 mb-3" style="width: 180px !important">
               <div class="card rounded-3 w-100">
                 <div class="card-body pt-4">
                   <div class="card-img mb-3">
                     <img src="/img/cc.webp" class="img-fluid" alt="">
                   </div>
                   <div class="card-title">
                     <p>قهوه فوری</p>
                     <small>بسته 500 گرمی</small>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
        </div>
        <div class="col-lg-5">
        <div class="card border-0 rounded-4">
          <div class="card-body">
            <div class="card-img mb-3">
              <img src="/img/cc.webp" class="img-fluid" alt="">
            </div>
            <div class="card-title">
              <p>قهوه فوری</p>
              <small>بسته 500 گرمی</small>
            </div>
          </div>
        </div>

      </div>

      </div>
    </div>

  </div>
  <div class=" py-5 my-bg " style="margin-top: 100px; margin-bottom: 150px">
    <div class="row d-grid">
      <div class="col-10 row align-self-center mx-auto flex-row-reverse">
        <div class="col-lg-6">
          <img src="/img/make.png" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 d-grid">
          <div class="align-self-end">
            <h3 class="text-center my-5">راهنمای دم آوری قهوه</h3>
            <p class="text-justify px-lg-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
              طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
              جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفادفزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
              داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class=" my-5">
    <div class="row d-grid">
      <div class="col-10 row align-self-center mx-auto">
        <div class="col-lg-6">
          <img src="/img/bigcup.png" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 d-grid">
          <div class="align-self-end">
            <h3 class="text-center my-5">درباره کوپاکافه</h3>
            <p class="text-justify px-lg-5">
              تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تاان فارسی ایجاد کرد، در این صورت می توان امید
              داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
              جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفادفزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
              داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تا
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
  <footer class="" style="margin-top: 120px !important; ">
    <div class="my-bg " style=" background: url('/img/footer.png') top left no-repeat; background-size: 100% ;padding-bottom: 50px">

      <div class="px-lg-5" style=" padding-top: 100px">
        <div class="row px-5 ">
          <div class="col-xl-7 row mb-4">
            <div class="col-sm-6 col-xl-5 px-3">

              <div class="text-center mb-4">
                <img src="/img/logo.png" width="200px">
              </div>
             <small class="d-block text-justify">
                برند الیت در سال ۱۳۸۴ به ثبت رسید و برند اصلی شرکت آماده لذیذ است. عصاره ، نودالیت و سوپ های نیمه آماده
                جزو اولین محصولات تولید شده توسط الیت می‌باشند. محصولات ترین استاندارد های مواد غذایی دنیا تولید می‌شود.
              </small>
            </div>
            <div class="col-sm-6 col-xl-7 px-lg-3" style="margin-top: 80px">
            <p class="text-center mb-4"><b>تماس با ما</b></p>

            <ul class="p-0">
              <li class="d-flex mb-3">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
                   viewBox="0 0 16 16">
                <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </span>
                <small>
                  <a target="_blank"
                     href="https://www.google.com/maps/place/AmadehLaziz/@35.7302329,51.3807302,19z/data=!4m6!3m5!1s0x3f8e07d020c7ca45:0x43bf4c9a730015f3!8m2!3d35.7301399!4d51.3807224!16s%2Fg%2F11c1r04p2q">
                    دفتر مرکزی: تهران، خیابان گیشا، خیابان هشتم، پلاک 58</a>
                </small>
              </li>
              <li class="d-flex mb-3">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone"
                   viewBox="0 0 16 16">
                <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
           </span>

                <small dir="ltr">
                  <a href="tel:+982141638699">+98 21 41638699</a>

                </small>
              </li>
              <li class="d-flex mb-3">
            <span class="me-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-postcard"
                  viewBox="0 0 16 16">
  <path fill-rule="evenodd"
        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"/>
</svg>
           </span>

                <small dir="ltr" style="cursor: pointer;position: relative" @click="coppyCode">
                  کد پستی:

                  <span id="postalcode">
                      1446863914
                    </span>
<!--                  <span id="coppyAlert">-->
<!--                      کپی شد!-->
<!--                    </span>-->
                </small>
              </li>


            </ul>
          </div>
            </div>
          <div class="col-sm-5 col-xl-5 px-3 d-grid">
            <div class="d-flex justify-content-between align-self-end d-none d-lg-block">
              <div><img src="/img/c1.png"  class="footer-img" alt=""></div>
              <div><img src="/img/c2.png"  class="footer-img" alt=""></div>
              <div><img src="/img/c4.png"  class="footer-img" alt=""></div>
              <div><img src="/img/c3.png"  class="footer-img" alt=""></div>
            </div>
            <div class="d-lg-none d-flex">
              <div class="p-2"><img src="/img/c1.png"  class="footer-img " alt=""></div>
              <div class="p-2"><img src="/img/c4.png"  class="footer-img " alt=""></div>
              </div>
            <div class="d-lg-none d-flex">
            <div class="p-2"><img src="/img/c2.png"  class="footer-img " alt=""></div>
              <div class="p-2"><img src="/img/c3.png"  class="footer-img " alt=""></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <small class="d-block m-3 mx-5">
              &copy; کلیه حقوق این وبسایت متعلق به شرکت
              <br class="d-sm-none">
              آماده لذیذ میباشد.
            </small>
          </div>
        </div>
      </div>


    </div>
  </footer>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
