<script lang="ts" setup>
// Current Banner
const currentBanner = ref(0);

// CategoriesData, BannerData
const propses = defineProps(['categories', 'bannerItem']);
</script>

<template>
  <section class="section-banner">
    <div class="home-page__banner">
      <v-hover v-slot="{ isHovering, props }">
        <v-carousel
          touch
          interval="3000"
          show-arrows="hover" 
          height="auto" 
          hide-delimiters
          v-model="currentBanner"
          :cycle="!isHovering" 
          v-bind="props"
        >
          <v-carousel-item
            v-for="(item, i) in propses.bannerItem"
            :key="i"
            :src="item.src"
            cover
          >
            <v-container>
  <!-- Subtitle -->
              <div 
                class="
                  home-page__banner-subTitle
                  subtitle
                  subtitle__bold
                  text-uppercase
                "
              >
                {{ $t('Banner.' + item.subTitle) }}
              </div>
  <!-- Title -->
              <div class="title-display-first">
                {{ $t('Banner.' + item.title) }}
              </div>
  <!-- Btns -->
              <div class="element__more-small-tablet">
                <BtnOutline 
                  class="
                    home-page__banner-btn 
                    btn__regular
                  "
                >
                  {{ $t('Banner.ShopSale') }}
                </BtnOutline>
                <Btn 
                  class="
                    home-page__banner-btn 
                    btn__regular
                  "
                >
                  {{ $t('Banner.' + item.title) }}
                </Btn>
              </div>
  <!-- Pagination -->
              <div class="home-page__banner-pagination" >
                <h3 
                  v-for="(item, i) in propses.bannerItem" 
                  :key="item" 
                  @click="currentBanner = i"
                  :v-model="currentBanner"
                  class="home-page__banner-pagination-item title-h3"
                  :class="currentBanner === i ? 'home-page__banner-pagination-item-active' : ''"
                >
                  0{{ i + 1 }}
                </h3>
              </div>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-hover>
<!-- Banner Category section -->
      <div class="home-page__banner-category">
        <v-container>
          <div class="home-page__banner-category-width">
            <div class="home-page__banner-category-items">
              <div
                v-for="(category, i) in propses.categories"
                :key="i"
              >
                <img 
                  :src="category.src" 
                  alt="Category photo" 
                  class="home-page__banner-category-img"
                >
                <div class="lead lead__bold">{{ $t('Banner.' + category.title) }}</div>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </section>
</template>
