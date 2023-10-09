<script lang="ts" setup>
import {ref} from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Swiper
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Pagination carousel
const modules = [Pagination, Navigation];

// Banner section
const items = ref([
  {
    src: '/images/home-page/banner/men.png',
    title: 'Menswear',
    subTitle: 'New collection'
  },
  {
    src: '/images/home-page/banner/women.jpg',
    title: 'Womenswear',
    subTitle: 'New collection'
  },
  {
    src: '/images/home-page/banner/boy.jpg',
    title: 'Boyswear',
    subTitle: 'New collection'
  },
  {
    src: '/images/home-page/banner/girl.jpg',
    title: 'Girlswear',
    subTitle: 'New collection'
  }
]);
const currentBanner = ref(0);

// Category section
const categories = ref([
  {
    src: '/images/home-page/categories/women.png',
    title: "Women's"
  },
  {
    src: '/images/home-page/categories/men.png',
    title: "Men's"
  },
  {
    src: '/images/home-page/categories/kid.png',
    title: "Kids'"
  }
]);

// Newarrival
const newarrival = ref([
  {
    id: 1,
    stars: 5,
    src: '/images/home-page/newarrival/img-1.png',
    name: 'Black and white sport cap',
    price: '18.15',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 2,
    stars: 0,
    src: '/images/home-page/newarrival/img-2.png',
    name: 'Metal bridge sunglasses',
    price: '89.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 3,
    stars: 4,
    src: '/images/home-page/newarrival/img-3.png',
    name: 'Green baby romper',
    price: '20.40',
    heart: true,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 4,
    stars: 0,
    src: '/images/home-page/newarrival/img-4.png',
    name: 'Mid-rise slim cropped fit jeans',
    price: '40.00',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 5,
    stars: 5,
    src: '/images/home-page/newarrival/img-5.png',
    name: 'Red dangle earrings',
    price: '29.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 6,
    stars: 0,
    src: '/images/home-page/newarrival/img-6.png',
    name: 'Baby shoes with laces',
    price: '30.60',
    heart: true,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 7,
    stars: 5,
    src: '/images/home-page/newarrival/img-1.png',
    name: 'Black and white sport cap',
    price: '18.15',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 8,
    stars: 0,
    src: '/images/home-page/newarrival/img-2.png',
    name: 'Metal bridge sunglasses',
    price: '89.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 9,
    stars: 4,
    src: '/images/home-page/newarrival/img-3.png',
    name: 'Green baby romper',
    price: '20.40',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  }
]);
const newarrivalSidesPerView = ref(6)


// Gallery
const date = [
  {
    num: '06',
    str: 'Days'
  },
  {
    num: '18',
    str: 'Hours'
  },
  {
    num: '24',
    str: 'Mins'
  },
  {
    num: '12',
    str: 'Sec'
  },
];
const gridBigGallery = ref(7);
const gridSmallGallery = ref(5);

// Popular
const popularCategories = [
  {
    img: 'images/home-page/popular/img-1.png',
    name: 'Tops'
  },
  {
    img: 'images/home-page/popular/img-2.png',
    name: 'T-shirts'
  },
  {
    img: 'images/home-page/popular/img-3.png',
    name: 'Caps'
  },
  {
    img: 'images/home-page/popular/img-4.png',
    name: 'Sandals'
  },
  {
    img: 'images/home-page/popular/img-5.png',
    name: 'Jackets'
  },
  {
    img: 'images/home-page/popular/img-6.png',
    name: 'Coats'
  }
]

// Trending
const trending = ref([
  {
    id: 1,
    stars: 5,
    src: '/images/home-page/trending/img-1.png',
    name: 'Shirt with insertion lace trims',
    price: '49.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 2,
    stars: 4,
    src: '/images/home-page/trending/img-2.png',
    name: 'Chrono watch with blue leather belt',
    price: '120.60',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 3,
    stars: 0,
    src: '/images/home-page/trending/img-3.png',
    name: 'Check coat with colour contrast',
    price: '183.45',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 4,
    stars: 5,
    src: '/images/home-page/trending/img-1.png',
    name: 'Shirt with insertion lace trims',
    price: '49.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 5,
    stars: 4,
    src: '/images/home-page/trending/img-2.png',
    name: 'Chrono watch with blue leather belt',
    price: '120.60',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 6,
    stars: 0,
    src: '/images/home-page/trending/img-3.png',
    name: 'Check coat with colour contrast',
    price: '183.45',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  }
])

const bigSidesPerView = ref(3)

// Sale Up
const saleUp = ref([
  {
    id: 1,
    stars: 5,
    src: '/images/home-page/sale-up/img-1.png',
    name: 'Leather crossbody bag with gold hardware',
    price: '179.00',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 2,
    stars: 0,
    src: '/images/home-page/sale-up/img-2.png',
    name: 'Skinny push-up jeans',
    price: '80.00',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 3,
    stars: 5,
    src: '/images/home-page/sale-up/img-3.png',
    name: 'Wide heel suede ankle boots',
    price: '149.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 4,
    stars: 5,
    src: '/images/home-page/sale-up/img-1.png',
    name: 'Leather crossbody bag with gold hardware',
    price: '179.00',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 5,
    stars: 0,
    src: '/images/home-page/sale-up/img-2.png',
    name: 'Skinny push-up jeans',
    price: '80.00',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  },
  {
    id: 6,
    stars: 5,
    src: '/images/home-page/sale-up/img-3.png',
    name: 'Wide heel suede ankle boots',
    price: '149.95',
    heart: false,
    expand: false,
    size: [36, 38, 40, 42],
    color: ['bg-black', 'bg-brown', 'bg-secondary']
  }
])

// mobileStore
const mobileStore = ref(true);

// Services
const gridServices = ref(3);

// Desktop size
const calculateNewarrival = () => {
  if(window.innerWidth < 600) {
    newarrivalSidesPerView.value = 2;
  } else if(window.innerWidth < 800) {
    newarrivalSidesPerView.value = 3;
  } else if(window.innerWidth < 960) {
    newarrivalSidesPerView.value = 4
  } else if(window.innerWidth < 1600) {
    newarrivalSidesPerView.value = 5;
  }
};
const calculateGrid = () => {
  if(window.innerWidth < 800) {
    gridBigGallery.value = 12;
    gridSmallGallery.value = 12;

    mobileStore.value = false;
  } else {
    gridBigGallery.value = 7;
    gridSmallGallery.value = 5;

    mobileStore.value = true;
  }
};
const calculatebigSidesPerView = () => {
  if(window.innerWidth < 600) {
    bigSidesPerView.value = 1;

    gridServices.value = 12;
  } else {
    bigSidesPerView.value = 3;

    gridServices.value = 3;
  }
};

window.addEventListener('resize', () => {
  calculateNewarrival(); calculateGrid(); calculatebigSidesPerView();
});
onMounted(() => {
  calculateNewarrival(); calculateGrid(); calculatebigSidesPerView();
});

</script>

<template>
  <main class="home-page">
<!-- Banner section -->
    <section class="section-banner">
      <div class="home-page__banner">
        <v-carousel
          cycle 
          interval="3000"
          show-arrows="hover" 
          height="auto" 
          hide-delimiters
          v-model="currentBanner"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cover
          >
            <v-container>
              <div class="home-page__banner-subTitle">{{ item.subTitle }}</div>
              <div class="home-page__banner-title">{{ item.title }}</div>
              <div class="home-page__banner-btns element__more-small-tablet">
                <BtnOutline class="home-page__banner-btn">Shop sale</BtnOutline>
                <Btn class="home-page__banner-btn">Shop the {{ item.title }}</Btn>
              </div>
              <div class="home-page__banner-pagination" >
                <h3 
                  v-for="(item, i) in items" 
                  :key="i" 
                  @click="currentBanner = i"
                  :v-model="currentBanner"
                  class="home-page__banner-pagination-item"
                  :class="currentBanner === i ? 'home-page__banner-pagination-item-active' : ''"
                >
                  0{{ i + 1 }}
                </h3>
              </div>
            </v-container>
          </v-carousel-item>
        </v-carousel>
        <div class="home-page__banner-category">
          <v-container>
            <div class="home-page__banner-category-width">
              <div class="home-page__banner-category-item">
                <div
                  v-for="(category, i) in categories"
                  :key="i"
                >
                  <img 
                    :src="category.src" 
                    alt="Category photo" 
                    class="home-page__banner-category-img"
                  >
                  <div class="home-page__banner-category-title">{{ category.title }}</div>
                </div>
              </div>
            </div>
          </v-container>
        </div>
      </div>
    </section>
<!-- New arrival section -->
    <section class="home-page__newarrival section-top">
      <h1 class="title-h1 home-page__newarrival-title">New arrival</h1>
      <div class="home-page__newarrival-subtitle subtitle">
        Check out our latest arrivals for the upcoming season
        <br>
        <a href="#" class="link">See the collection here</a>
      </div>
      <swiper
        :slidesPerView="newarrivalSidesPerView"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide 
          v-for="item in newarrival"
          :key="item.id"
        >
          <v-card elevation="0">
            <v-img 
              :src="item.src" 
              max-height="320px" 
              max-width="285px"
              class="swiper-img"
            >
              <Rating 
                v-if="item.stars > 0"
                v-model="item.stars"
              ></Rating>
              <div 
                class="swiper-img-heart"
                @click="item.heart = !item.heart"
              >
                <v-icon
                  v-if="item.heart"
                  icon="mdi-heart"
                  color="red"
                  class="mt-1"
                ></v-icon>
                <v-icon
                  v-else
                  icon="mdi-heart-outline"
                  color="black"
                  class="mt-1"
                ></v-icon>
              </div>
            </v-img>
            <v-card-text>
              <div 
                class="subtitle swiper-name"
                @click="item.expand = !item.expand"
              >
                {{ item.name }}
                <v-tooltip
                  activator="parent"
                  location="top"
                >To card double click</v-tooltip>
              </div>
              <div class="price">${{ item.price }}</div>
<!-- Expand transition-->
              <v-expand-transition>
                <div v-if="item.expand">
                  <div class="swiper-data">
<!-- Swiper size -->
                    <v-chip-group
                      selected-class="swiper-size-active"
                      mandatory
                    >
                      <v-chip
                        v-for="size in item.size"
                        :key="size"
                        :value="size"
                        variant="text"
                        tag="div"
                        class="swiper-size"
                        size="24"
                      >
                        {{ size }}
                      </v-chip>
                    </v-chip-group>
<!-- Swiper color -->
                    <v-chip-group
                      selected-class="swiper-color-active"
                      mandatory
                    >
                      <v-chip
                        v-for="color in item.color"
                        :key="color"
                        :value="color"
                        variant="text"
                        tag="div"
                        class="swiper-color"
                        size="24"
                        rounded
                      >
                        <div 
                          class="swiper-color-value" 
                          :class="color"
                        ></div>
                      </v-chip>
                    </v-chip-group>
                  </div>
                  <BtnOutline class="swiper-add-cart"> <v-icon>mdi-cart</v-icon> Add to cart</BtnOutline>
                </div>
              </v-expand-transition>
            </v-card-text>
          </v-card>
        </swiper-slide>
      </swiper>
    </section>
<!-- Gallery section -->
    <section class="home-page__gallery section menu__small">
<!-- Banner Row 1 -->
      <v-row>
<!-- Banner 1 -->
        <v-col :cols="gridSmallGallery"  class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-1.png" 
            class="home-page__gallery-img"
            cover
          >
            <div class="home-page__gallery-subtitle">Summer Collections</div>
            <div class="home-page__gallery-title title-h2">Sale Up to 70%</div>
            <BtnOutline class="home-page__gallery-btn">Explore new prices</BtnOutline>
          </v-img>
        </v-col>
<!-- Banner 2 -->
        <v-col :cols="gridBigGallery" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-2.png"
            class="home-page__gallery-img"
            cover
          >
            <div class="home-page__gallery-subtitle">Deal of the week</div>
            <div class="home-page__gallery-title title-h2">Stay Warm With Our <br> New Sweaters</div>
            <BtnOutline class="home-page__gallery-btn">Shop now</BtnOutline>
<!-- Date -->
            <div class="home-page__gallery-date">
              <div 
                class="
                  menu__small-title
                  mb-3
                  home-page__gallery-date-title
                "
              >
                Limited time offer
              </div>
              <div class="home-page__gallery-date-content">
                <v-row>
                  <v-col                   
                    v-for="(d, index) in date"
                    :key="index"
                  >
                    <div class="title-h3">
                      {{ d.num }}
                    </div>
                    <div>
                      {{ d.str }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
<!-- Banner Row 2 -->
      <v-row>
<!-- Banner 3 -->
        <v-col :cols="gridBigGallery" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-3.png"
            class="home-page__gallery-img"
            cover
          >
            <div class="home-page__gallery-subtitle">New collection</div>
            <div class="home-page__gallery-title title-h2">Shoes & Bags <br> autumn / winter 2020 </div>
            <BtnOutline class="home-page__gallery-btn">
              See offers 
              <v-icon size="small">mdi-arrow-right</v-icon>
            </BtnOutline>
          </v-img>
        </v-col>
<!-- Banner 4 -->
        <v-col :cols="gridSmallGallery" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-4.png"
            class="home-page__gallery-img"
            cover
          >
            <div class="home-page__gallery-subtitle">For All new Email Subscribers</div>
            <div class="home-page__gallery-title title-h2">Get 5% Off & Free Delivery</div>
<!-- Form -->
            <v-form 
              @submit.prevent
              class="home-page__gallery-form"
            >
              <label 
                for="email__gallery" 
                class="home-page__gallery-form-label"
              >
                Email
              </label>
              <InputText 
                placeholder="Your working email" 
                class="home-page__gallery-form-input"
                id="email__gallery"
              />
              <Btn class="home-page__gallery-btn">Subscribe</Btn>
              <div class="home-page__gallery-form-singup">*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</div>
            </v-form>
          </v-img>
        </v-col>
      </v-row>
    </section>
<!-- Popular Categories section -->
    <section class="home-page__popular section">
      <v-container>
        <h1 class="title-h1">Popular categories</h1>
        <div class="home-page__popular-categories">
          <div 
            v-for="(item, index) in popularCategories"
            :key="index"
          >
            <v-img :src="item.img"></v-img>
            <div class="home-page__popular-name category-name">{{ item.name }}</div>
          </div>
        </div>
      </v-container>
    </section>
<!-- Trending now section -->
    <section class="home-page__trending section">
      <v-container>
        <div class="home-page__trending-header">
          <h1 class="home-page__trending-title title-h1">Trending now</h1>
          <div>
            <Btn class="myPrevTrending swiper-btn"><v-icon size="small">mdi-arrow-left-thin</v-icon></Btn>
            <Btn class="myNextTrending swiper-btn"><v-icon size="small">mdi-arrow-right-thin</v-icon></Btn>
          </div>
        </div>
        <div class="home-page__trending-categories">
          <swiper
            :slidesPerView="bigSidesPerView"
            :spaceBetween="30"
            :navigation="{enabled: true, prevEl: '.myPrevTrending', nextEl: '.myNextTrending'}"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide 
              v-for="item in trending"
              :key="item.id"
            >
              <v-card elevation="0">
                <v-img 
                  :src="item.src" 
                  max-height="490px" 
                  max-width="440px"
                  class="swiper-img"
                >
                  <Rating 
                    v-if="item.stars > 0"
                    v-model="item.stars"
                  ></Rating>
                  <div 
                    class="swiper-img-heart"
                    @click="item.heart = !item.heart"
                  >
                    <v-icon
                      v-if="item.heart"
                      icon="mdi-heart"
                      color="red"
                      class="mt-1"
                    ></v-icon>
                    <v-icon
                      v-else
                      icon="mdi-heart-outline"
                      color="black"
                      class="mt-1"
                    ></v-icon>
                  </div>
                </v-img>
                <v-card-text>
                  <div 
                    class="subtitle swiper-name" 
                    @click="item.expand = !item.expand"
                  >
                    {{ item.name }}
                    <v-tooltip
                      activator="parent"
                      location="top"
                    >To card double click</v-tooltip>
                  </div>
                  <div class="price">${{ item.price }}</div>
                  <!-- Expand transition-->
                  <v-expand-transition>
                    <div v-if="item.expand">
                      <div class="swiper-data">
<!-- Swiper size -->
                        <v-chip-group
                          selected-class="swiper-size-active"
                          mandatory
                        >
                          <v-chip
                            v-for="size in item.size"
                            :key="size"
                            :value="size"
                            variant="text"
                            tag="div"
                            class="swiper-size"
                            size="24"
                          >
                            {{ size }}
                          </v-chip>
                        </v-chip-group>
<!-- Swiper color -->
                        <v-chip-group
                          selected-class="swiper-color-active"
                          mandatory
                        >
                          <v-chip
                            v-for="color in item.color"
                            :key="color"
                            :value="color"
                            variant="text"
                            tag="div"
                            class="swiper-color"
                            size="24"
                            rounded
                          >
                            <div 
                              class="swiper-color-value" 
                              :class="color"
                            ></div>
                          </v-chip>
                        </v-chip-group>
                      </div>
                      <BtnOutline class="swiper-add-cart"> <v-icon>mdi-cart</v-icon> Add to cart</BtnOutline>
                    </div>
                  </v-expand-transition>
                </v-card-text>
              </v-card>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-center">
          <BtnOutline class="home-page__trending-btn">Explore top sales</BtnOutline>
        </div>
      </v-container>
    </section>
<!-- Sale up section -->
    <section class="home-page__sale-up section">
      <v-container>
        <div class="home-page__sale-up-header">
          <h1 class="title-h1">Sale up to 70%</h1>
          <div>
            <Btn class="myPrevSale swiper-btn"><v-icon size="small">mdi-arrow-left-thin</v-icon></Btn>
            <Btn class="myNextSale swiper-btn"><v-icon size="small">mdi-arrow-right-thin</v-icon></Btn>
          </div>
        </div>
        <div class="home-page__sale-up-categories">
          <swiper
            :slidesPerView="bigSidesPerView"
            :spaceBetween="30"
            :navigation="{enabled: true, prevEl: '.myPrevSale', nextEl: '.myNextSale'}"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide 
              v-for="item in saleUp"
              :key="item.id"
            >
              <v-card elevation="0">
                <v-img 
                  :src="item.src" 
                  max-height="490px" 
                  max-width="440px"
                  class="swiper-img"
                >
                  <div class="swiper-img-header">
                    <div class="swiper-img-sale">-50%</div>
                    <Rating 
                      v-if="item.stars > 0"
                      v-model="item.stars"
                    ></Rating>
                  </div>
                  <div 
                    class="swiper-img-heart"
                    @click="item.heart = !item.heart"
                  >
                    <v-icon
                      v-if="item.heart"
                      icon="mdi-heart"
                      color="red"
                      class="mt-1"
                    ></v-icon>
                    <v-icon
                      v-else
                      icon="mdi-heart-outline"
                      color="black"
                      class="mt-1"
                    ></v-icon>
                  </div>
                </v-img>
                <v-card-text>
                  <div 
                    class="subtitle swiper-name" 
                    @click="item.expand = !item.expand"
                  >
                    {{ item.name }}
                    <v-tooltip
                      activator="parent"
                      location="top"
                    >To card double click</v-tooltip>
                  </div>
                  <div class="price">${{ item.price }}</div>
                  <v-expand-transition>
                    <div v-if="item.expand">
                      <div class="swiper-data">
<!-- Swiper size -->
                        <v-chip-group
                          selected-class="swiper-size-active"
                          mandatory
                        >
                          <v-chip
                            v-for="size in item.size"
                            :key="size"
                            :value="size"
                            variant="text"
                            tag="div"
                            class="swiper-size"
                            size="24"
                          >
                            {{ size }}
                          </v-chip>
                        </v-chip-group>
<!-- Swiper color -->
                        <v-chip-group
                          selected-class="swiper-color-active"
                          mandatory
                        >
                          <v-chip
                            v-for="color in item.color"
                            :key="color"
                            :value="color"
                            variant="text"
                            tag="div"
                            class="swiper-color"
                            size="24"
                            rounded
                          >
                            <div 
                              class="swiper-color-value" 
                              :class="color"
                            ></div>
                          </v-chip>
                        </v-chip-group>
                      </div>
                      <BtnOutline class="swiper-add-cart"> <v-icon>mdi-cart</v-icon> Add to cart</BtnOutline>
                    </div>
                  </v-expand-transition>
                </v-card-text>
              </v-card>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-center">
          <BtnOutline class="home-page__sale-up-btn">See all sale products</BtnOutline>
        </div>
      </v-container>
    </section>
<!-- Mobile store -->
    <section class="home-page__mobileStore">
      <v-container>
        <v-row>
          <v-col v-if="mobileStore">
            <img src="images/home-page/mobile-store/img.png" class="home-page__mobileStore-img">
          </v-col>
          <v-col class="home-page__mobileStore-col">
            <div class="home-page__mobileStore-title title-h2">Enjoy mobile shopping with our Createx Store App!</div>
            <div>
              <img 
                width="162" 
                height="48"
                src="images/footer/app-store.png"
                class="home-page__mobileStore-links"
              >
              <img 
                width="162" 
                height="48"
                src="images/footer/google-play.png"
                class=home-page__mobileStore-links
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
<!-- Services -->
    <section class="section">
      <v-container>
        <v-row class="text-center">
          <v-col :cols="gridServices" class="home-page__services-border">
            <img src="images/home-page/services/delivery.png">
            <div class="category-name">Fast Worldwide Shipping</div>
            <div class="home-page__services-subtitle menu__regular">Get free shipping over $250</div>
          </v-col>
          <v-col :cols="gridServices" class="home-page__services-border">
            <img src="images/home-page/services/call-center.png">
            <div class="category-name">24/7 Customer Support</div>
            <div class="home-page__services-subtitle menu__regular">Friendly 24/7 customer support</div>
          </v-col>
          <v-col :cols="gridServices" class="home-page__services-border">
            <img src="images/home-page/services/shield.png">
            <div class="category-name">Money Back Guarantee</div>
            <div class="home-page__services-subtitle menu__regular">We return money within 30 days</div>
          </v-col>
          <v-col :cols="gridServices">
            <img src="images/home-page/services/credit-card.png">
            <div class="category-name">Secure Online Payment</div>
            <div class="home-page__services-subtitle menu__regular">Accept all major credit cards</div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>
