<script lang="ts" setup>
  const props = defineProps(['brands', 'brandsStatus', 'gridFashion', 'fashionCards']);
</script>

<template>
  <section class="home-page__fashion section">
    <v-container>
      <div class="home-page__fashion-head">
        <h1 class="title-h1">{{ $t('Fashion.Title') }}</h1>
        <v-spacer></v-spacer>
        <BtnOutline class="btn__small">{{ $t('Fashion.Btn') }}</BtnOutline>
      </div>
      <v-row>
        <v-col 
          v-for="(card, index) in props.fashionCards" 
          :key="index" 
          :cols="props.gridFashion"
        >
          <v-card elevation="4">
              <v-img :src="card.src"></v-img>
              <v-card-text>
                <div class="lead lead__bold">{{ $t('Fashion.' + card.title) }}</div>
                <div class="home-page__fashion-card-subtitle base__small">
                  <span>{{ $t('Fashion.' + card.brand )}}</span> 
                  <span class="home-page__fashion-card-slash">|</span> 
                  <span>{{ $t('Fashion.' + card.date) }}</span>
                  <span class="home-page__fashion-card-slash">|</span> 
                  <span>{{ $t('Fashion.' + card.comment) }}</span>
                </div>
                <div class="
                  home-page__fashion-card-content 
                  base 
                  base__regular"
                >
                  {{ $t('Fashion.' + card.subTitle) }}
                </div>
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>
<!-- Brands section -->
      <v-row class="section-top" v-if="props.brandsStatus">
        <v-col 
          v-for="(brand, i) in props.brands" 
          :key="i"
          class="text-center"
        >
          <img :src="brand">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
