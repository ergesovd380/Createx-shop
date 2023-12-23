<script lang="ts" setup>
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps(['saleUp', 'modules', 'trendingSidesPerView']);
</script>

<template>
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
          :slidesPerView="props.trendingSidesPerView"
          :spaceBetween="30"
          :navigation="{enabled: true, prevEl: '.myPrevSale', nextEl: '.myNextSale'}"
          :loop="true"
          :modules="props.modules"
          class="mySwiper"
        >
          <swiper-slide 
            v-for="item in props.saleUp"
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
                <div class="swiper-price">
                  <h4 class="title-h4 text-red">${{ item.price }}</h4>
                  <div class="subtitle swiper-price-sale">$179.00</div>
                </div>
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
                    <BtnOutline class="swiper-add-cart btn__small"> <v-icon>mdi-cart-outline</v-icon> Add to cart</BtnOutline>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-center">
        <BtnOutline class="btn__regular">See all sale products</BtnOutline>
      </div>
    </v-container>
  </section>
</template>
