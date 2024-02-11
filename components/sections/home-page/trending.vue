<script lang="ts" setup>
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps(['trending', 'trendingSidesPerView', 'modules']);
</script>

<template>
  <section class="home-page__trending section">
    <v-container>
      <div class="home-page__trending-header">
        <h1 class="home-page__trending-title title-h1">{{ $t('Trending.Title') }}</h1>
        <div>
          <Btn class="myPrevTrending swiper-btn"><v-icon size="small">mdi-arrow-left-thin</v-icon></Btn>
          <Btn class="myNextTrending swiper-btn"><v-icon size="small">mdi-arrow-right-thin</v-icon></Btn>
        </div>
      </div>
      <div class="home-page__trending-categories">
        <swiper
          :slidesPerView="props.trendingSidesPerView"
          :spaceBetween="30"
          :navigation="{enabled: true, prevEl: '.myPrevTrending', nextEl: '.myNextTrending'}"
          :loop="true"
          :modules="props.modules"
          class="mySwiper"
        >
          <swiper-slide 
            v-for="item in props.trending"
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
                  {{ $t('Products.' + item.id) }}
                  <v-tooltip
                    activator="parent"
                    location="top"
                  >{{ $t('Swiper.Tooltip') }}</v-tooltip>
                </div>
                <h4 class="title-h4">${{ item.price }}</h4>
                <!-- Expand transition-->
                <v-expand-transition>
                  <div v-if="item.expand">
                    <div class="swiper-data">
<!-- Swiper size -->
                      <v-chip-group
                        selected-class="swiper-sc-active"
                        mandatory
                      >
                        <v-chip
                          v-for="size in item.size"
                          :key="size"
                          :value="size"
                          variant="text"
                          size="24"
                          class="rounded swiper-sc"
                        >
                          <div
                            class="swiper-item base__extrasmall"
                          >
                            {{ size }}
                          </div>
                        </v-chip>
                      </v-chip-group>
<!-- Swiper color -->
                      <v-chip-group
                        selected-class="swiper-sc-active"
                        mandatory
                      >
                        <v-chip
                          v-for="color in item.color"
                          :key="color"
                          :value="color"
                          variant="text"
                          size="24"
                          class="rounded-circle swiper-sc"
                        >
                          <div 
                            class="
                              swiper-item 
                              swiper-item-color 
                              rounded-circle
                            " 
                            :class="color"
                          ></div>
                        </v-chip>
                      </v-chip-group>
                    </div>
                    <BtnOutline class="swiper-add-cart btn__small"> <v-icon>mdi-cart-outline</v-icon>{{ $t('Swiper.AddCart') }}</BtnOutline>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-center">
        <BtnOutline class="btn__regular">{{ $t('Trending.TopSales') }}</BtnOutline>
      </div>
    </v-container>
  </section>
</template>
