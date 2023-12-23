<script lang="ts" setup>
  const props = defineProps(['brands', 'brandsStatus', 'gridFashion']);
</script>

<template>
  <section class="home-page__fashion section">
    <v-container>
      <div class="home-page__fashion-head">
        <h1 class="title-h1">Fashion blog</h1>
        <v-spacer></v-spacer>
        <BtnOutline class="btn__small">View blog</BtnOutline>
      </div>
      <v-row>
        <v-col :cols="props.gridFashion">
          <v-card elevation="4">
              <v-img src="images/home-page/fashion/img-1.png"></v-img>
              <v-card-text>
                <div class="lead lead__bold">Bag Trends for Summer 2020</div>
                <div class="home-page__fashion-card-subtitle base__small">
                  <span>Fashion</span> 
                  <span class="home-page__fashion-card-slash">|</span> 
                  <span>August 24, 2020</span>
                  <span class="home-page__fashion-card-slash">|</span> 
                  <span>No comments</span>
                </div>
                <div class="home-page__fashion-card-content base base__regular">
                  Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...
                </div>
              </v-card-text>
            </v-card>
        </v-col>
        <v-col :cols="props.gridFashion">
          <v-card elevation="4">
              <v-img src="images/home-page/fashion/img-2.png"></v-img>
              <v-card-text>
                <div class="lead lead__bold">Top 10 of This Season’s Hottest Sneakers</div>
                <div 
                  class="
                    home-page__fashion-card-subtitle
                    base__small
                  "
                >
                  <span>Lifestyle</span> 
                  <span class="home-page__fashion-card-slash">|</span> 
                  <span>July 16, 2020</span>
                  <span class="home-page__fashion-card-slash">|</span> 
                  <span>4 comments</span>
                </div>
                <div 
                  class="
                    home-page__fashion-card-content 
                    base 
                    base__regular
                  "
                >
                  Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...
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
