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

// Newarrival
const newarrival = ref([
  {
    id: 1,
    stars: 5,
    src: '/images/home-page/newarrival/1.png',
    name: 'Black and white sport cap',
    price: '18.15',
    heart: false
  },
  {
    id: 2,
    stars: 0,
    src: '/images/home-page/newarrival/2.png',
    name: 'Metal bridge sunglasses',
    price: '89.95',
    heart: false
  },
  {
    id: 3,
    stars: 4,
    src: '/images/home-page/newarrival/3.png',
    name: 'Green baby romper',
    price: '20.40',
    heart: true
  },
  {
    id: 4,
    stars: 0,
    src: '/images/home-page/newarrival/4.png',
    name: 'Mid-rise slim cropped fit jeans',
    price: '40.00',
    heart: false
  },
  {
    id: 5,
    stars: 5,
    src: '/images/home-page/newarrival/5.png',
    name: 'Red dangle earrings',
    price: '29.95',
    heart: false
  },
  {
    id: 6,
    stars: 0,
    src: '/images/home-page/newarrival/6.png',
    name: 'Baby shoes with laces',
    price: '30.60',
    heart: true
  },
  {
    id: 7,
    stars: 5,
    src: '/images/home-page/newarrival/1.png',
    name: 'Black and white sport cap',
    price: '18.15',
    heart: false
  },
  {
    id: 8,
    stars: 0,
    src: '/images/home-page/newarrival/2.png',
    name: 'Metal bridge sunglasses',
    price: '89.95',
    heart: false
  },
  {
    id: 9,
    stars: 4,
    src: '/images/home-page/newarrival/3.png',
    name: 'Green baby romper',
    price: '20.40',
    heart: false
  }
])

// Pagination carousel
const modules = [Pagination]

// Desktop size
const slidesPerView = ref(6)
const calculateSize = () => {
  if(window.innerWidth < 600) {
    slidesPerView.value = 2
  } else if(window.innerWidth < 800) {
    slidesPerView.value = 3
  } else if(window.innerWidth < 960) {
    slidesPerView.value = 4
  } else if(window.innerWidth < 1600) {
    slidesPerView.value = 5
  }
}
window.addEventListener('resize', () => {
  calculateSize()
})
onMounted(() => {
  calculateSize()
})

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
]

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
        :slidesPerView="slidesPerView"
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
              active-color="yellow-accent-4"
              color="white"
              half-increments
              disabled
              size="x-small"
              density="compact"
              class="swiper-img-stars"
            ></v-rating>
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
          <div class="subtitle">{{ item.name }}</div>
          <div class="price">${{ item.price }}</div>
        </swiper-slide>
      </swiper>
    </section>
<!-- Gallery section -->
    <section class="home-page__gallery section">
<!-- Banner Row 1 -->
      <v-row>
<!-- Banner 1 -->
        <v-col cols="5" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-1.png" 
            class="home-page__gallery-img"
            cover
          >
            <div class="menu__small">Summer Collections</div>
            <div class="home-page__gallery-title title-h2">Sale Up to 70%</div>
            <BtnOutline class="home-page__gallery-btn">Explore new prices</BtnOutline>
          </v-img>
        </v-col>
<!-- Banner 2 -->
        <v-col cols="7" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-2.png"
            class="home-page__gallery-img"
            cover
          >
            <div class="menu__small">Deal of the week</div>
            <div class="home-page__gallery-title title-h2">Stay Warm With Our <br> New Sweaters</div>
            <BtnOutline class="home-page__gallery-btn">Shop now</BtnOutline>
<!-- Date -->
            <div class="menu__small-title mb-3">Limited time offer</div>
            <div class="home-page__gallery-date">
              <v-row>
                <v-col                   
                  v-for="(d, index) in date"
                  :key="index"
                >
                  <div class="title-h3">
                    {{ d.num }}
                  </div>
                  <div class="menu__small">
                    {{ d.str }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-img>
        </v-col>
      </v-row>
<!-- Banner Row 2 -->
      <v-row>
<!-- Banner 3 -->
        <v-col cols="7" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-3.png"
            class="home-page__gallery-img"
            cover
          >
            <div class="menu__small">New collection</div>
            <div class="home-page__gallery-title title-h2">Shoes & Bags <br> autumn / winter 2020 </div>
            <BtnOutline class="home-page__gallery-btn">Explore new prices</BtnOutline>
          </v-img>
        </v-col>
<!-- Banner 4 -->
        <v-col cols="5" class="pa-1">
          <v-img 
            src="images/home-page/gallery/banner-4.png"
            class="home-page__gallery-img"
            cover
          >
            <div class="menu__small">For All new Email Subscribers</div>
            <div class="home-page__gallery-title title-h2">Get 5% Off & Free Delivery</div>
<!-- Form -->
            <v-form @submit.prevent>
              <label for="email__gallery">Email</label>
              <InputText 
                placeholder="Your working email" 
                class="home-page__gallery-form-input"
              ></InputText>
              <Btn 
                class="home-page__gallery-form-btn"
              >
                Subscribe
              </Btn>
            </v-form>
          </v-img>
        </v-col>
      </v-row>
    </section>
  </main>
</template>
