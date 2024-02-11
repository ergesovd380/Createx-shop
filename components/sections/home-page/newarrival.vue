<script lang="ts" setup>
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps(['newarrival', 'newarrivalSidesPerView', 'modules']);
</script>

<template>
  <section class="home-page__newarrival section-top">
<!-- Title and subtitle -->
    <h1 class="home-page__newarrival-title title-h1">{{ $t('NewArrival.Title') }}</h1>
    <div 
      class="
        home-page__newarrival-subtitle 
        subtitle
        subtitle__regular
      "
    >
      {{ $t('NewArrival.Subtitle') }}
      <br>
      <a href="#" class="link link__primary">{{ $t('NewArrival.Link') }}</a>
    </div>
<!-- Swiper -->
    <swiper
      :slidesPerView="props.newarrivalSidesPerView"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="props.modules"
      class="mySwiper"
    >
<!-- Swiper slides -->
      <swiper-slide 
        v-for="item in props.newarrival"
        :key="item.id"
      >
        <v-card elevation="0">
<!-- Swiper images -->
          <v-img 
            :src="item.src" 
            max-height="320px" 
            max-width="285px"
            class="swiper-img"
          >
<!-- Swiper rating -->
            <Rating 
              v-if="item.stars > 0"
              v-model="item.stars"
            ></Rating>
<!-- Swiper heart -->
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
<!-- Swiper product name -->
            <div 
              class="swiper-name subtitle subtitle__regular"
              @click="item.expand = !item.expand"
            >
              {{ $t('Products.' + item.id) }}
              <v-tooltip
                activator="parent"
                location="top"
              >{{ $t('Swiper.Tooltip') }}</v-tooltip>
            </div>
<!-- Swiper product price -->
            <h5 class="title-h5">${{ item.price }}</h5>
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
<!-- Swiper add cart btn -->
                <BtnOutline class="swiper-add-cart btn__small"> <v-icon>mdi-cart-outline</v-icon>{{ $t('Swiper.AddCart') }}</BtnOutline>
              </div>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </swiper-slide>
    </swiper>
  </section>
</template>
