<script lang="ts" setup>
// Import Vue.js components
import {ref, computed} from 'vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper Pagination modules
import { Pagination, Navigation } from 'swiper/modules';
// Pagination carousel
const modules = [Pagination, Navigation];

// Vuex
import {useStore} from 'vuex';
const store = useStore();

//Components
// section-home-page-banner
const bannerItem = computed(() => store.getters["banner/banner"]);
// Category section
const categories = computed(() => store.getters["banner/categories"]);

// section-home-page-newarrival
const newarrival = computed(() => store.getters["products/newArrival"]);
const newarrivalSidesPerView = ref(6);

// section-home-page-gallery
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

// section-home-page-popular
const popularCategories = computed(() => store.getters["popularCategories/items"]);

// section-home-page-trending
const trending = computed(() => store.getters["products/Trending"]);
const trendingSidesPerView = ref(3);

// section-home-page-sale-up
const saleUp = computed(() => store.getters["saleUp/items"]);

// section-home-page-mobile-store
const mobileStore = ref(true);

// section-home-page-services
const gridServices = ref(3);

// section-home-page-instagram
const Instagram = ref(true);

// section-home-page-fashion
const gridFashion = ref(6);
// Brands
const brandsStatus = ref(true);
const brands = ref([
  'images/home-page/brands/img-1.png',
  'images/home-page/brands/img-2.png',
  'images/home-page/brands/img-3.png',
  'images/home-page/brands/img-4.png',
  'images/home-page/brands/img-5.png',
  'images/home-page/brands/img-6.png'
]);

// section-home-page-subscribe
const subscribeBtns = ref(['Women', 'Men', 'Girls', 'Boys']);
const subscribeSelection = ref([]);
const subscribeImg = ref(true);

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
const calculateGrid600 = () => {
  if(window.innerWidth < 600) {
    trendingSidesPerView.value = 1;
    gridServices.value = 12;
    gridFashion.value = 12;
  } else {
    trendingSidesPerView.value = 3;
    gridServices.value = 3;
    gridFashion.value = 6;
  }
};
const calculateGrid800 = () => {
  if(window.innerWidth < 800) {
    gridBigGallery.value = 12;
    gridSmallGallery.value = 12;

    mobileStore.value = false;
    Instagram.value = false;
    brandsStatus.value = false;
  } else {
    gridBigGallery.value = 7;
    gridSmallGallery.value = 5;

    mobileStore.value = true;
    Instagram.value = true;
    brandsStatus.value = true;
  }
};
const calculateGrid960 = () => {
  if(window.innerWidth < 960) {
    subscribeImg.value = false;
  } else {
    subscribeImg.value = true;
  }
};

window.addEventListener('resize', () => {
  calculateNewarrival(); calculateGrid600(); calculateGrid800(); calculateGrid960();
});
onMounted(() => {
  calculateNewarrival(); calculateGrid600(); calculateGrid800(); calculateGrid960();
});
</script>

<template>
  <main class="home-page">
<!-- Banner section -->
    <SectionsHomePageBanner 
      :bannerItem="bannerItem"
      :categories="categories"
    />
<!-- New arrival section -->
    <SectionsHomePageNewarrival
      :modules="modules"
      :newarrival="newarrival"
      :newarrivalSidesPerView="newarrivalSidesPerView"
    />
<!-- Gallery section -->
    <SectionsHomePageGallery 
      :date="date"
      :gridBigGallery="gridBigGallery"
      :gridSmallGallery="gridSmallGallery"
    />
<!-- Popular Categories section -->
    <SectionsHomePagePopular 
      :popularCategories="popularCategories"
    />
<!-- Trending now section -->
    <SectionsHomePageTrending 
      :modules="modules"
      :trending="trending"
      :trendingSidesPerView="trendingSidesPerView"
    />
<!-- Sale up section -->
    <SectionsHomePageSaleUp 
      :modules="modules"
      :saleUp="saleUp"
      :trendingSidesPerView="trendingSidesPerView"
    />
<!-- Mobile store section -->
    <SectionsHomePageMobileStore 
      :mobileStore="mobileStore"
    />
<!-- Services section -->
    <SectionsHomePageServices 
      :gridServices="gridServices"
    />
<!-- Instagram section -->
    <SectionsHomePageInstagram 
      :Instagram="Instagram"
    />
<!-- Fashion section -->
    <SectionsHomePageFashion 
      :gridFashion="gridFashion"
      :brandsStatus="brandsStatus"
      :brands="brands"
    />
<!-- Subscribe section -->
    <SectionsHomePageSubscribe 
      :subscribeBtns="subscribeBtns"
      :subscribeSelection="subscribeSelection"
      :subscribeImg="subscribeImg"
    />
  </main>
</template>
