<script lang="ts" setup>
import {ref} from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

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
])

// newarrival
const newarrival = ref([
  {
    id: 1,
    stars: 5,
    src: '/images/home-page/newarrival/1.png',
    name: 'Black and white sport cap',
    price: '18.15'
  },
  {
    id: 2,
    stars: 0,
    src: '/images/home-page/newarrival/2.png',
    name: 'Metal bridge sunglasses',
    price: '89.95'
  },
  {
    id: 3,
    stars: 4,
    src: '/images/home-page/newarrival/3.png',
    name: 'Green baby romper',
    price: '20.40'
  },
  {
    id: 4,
    stars: 0,
    src: '/images/home-page/newarrival/4.png',
    name: 'Mid-rise slim cropped fit jeans',
    price: '40.00'
  },
  {
    id: 5,
    stars: 5,
    src: '/images/home-page/newarrival/5.png',
    name: 'Red dangle earrings',
    price: '29.95'
  },
  {
    id: 6,
    stars: 0,
    src: '/images/home-page/newarrival/6.png',
    name: 'Baby shoes with laces',
    price: '30.60'
  },
  {
    id: 7,
    stars: 5,
    src: '/images/home-page/newarrival/1.png',
    name: 'Black and white sport cap',
    price: '18.15'
  },
  {
    id: 8,
    stars: 0,
    src: '/images/home-page/newarrival/2.png',
    name: 'Metal bridge sunglasses',
    price: '89.95'
  },
  {
    id: 9,
    stars: 4,
    src: '/images/home-page/newarrival/3.png',
    name: 'Green baby romper',
    price: '20.40'
  },
  {
    id: 10,
    stars: 0,
    src: '/images/home-page/newarrival/4.png',
    name: 'Mid-rise slim cropped fit jeans',
    price: '40.00'
  },
  {
    id: 11,
    stars: 5,
    src: '/images/home-page/newarrival/5.png',
    name: 'Red dangle earrings',
    price: '29.95'
  },
  {
    id: 12,
    stars: 0,
    src: '/images/home-page/newarrival/6.png',
    name: 'Baby shoes with laces',
    price: '30.60'
  }
])

// Pagination carousel
const modules = [Pagination]

</script>

<template>
  <main class="home-page">
<!-- Banner section -->
    <section class="section-banner">
      <div class="home-page__banner">
        <v-carousel 
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
    <section class="home-page__newarrival section">
      <h1 class="title-h1">New arrival</h1>
      <div class="home-page__newarrival-subtitle subtitle">
        Check out our latest arrivals for the upcoming season
        <br>
        <a href="#" class="link">See the collection here</a>
      </div>
      <swiper
        :slidesPerView="6"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide 
          v-for="item in newarrival"
          :key="item.id"
        >
          <v-img 
            :src="item.src" 
            max-height="320px" 
            max-width="285px"
            class="swiper-img"
          >
            <v-rating
              v-model="item.stars"
              color="white"
              active-color="yellow-accent-4"
              half-increments
              disabled
              size="18"
            ></v-rating>
          </v-img>
          <div class="subtitle">{{ item.name }}</div>
          <div class="price">${{ item.price }}</div>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>
