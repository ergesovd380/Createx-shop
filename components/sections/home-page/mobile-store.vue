<script lang="ts" setup>
  const props = defineProps(['mobileStore'])
</script>

<template>
  <section class="home-page__mobileStore">
    <v-container>
      <v-row>
        <v-col v-if="props.mobileStore">
          <img src="images/home-page/mobile-store/img.png" class="home-page__mobileStore-img">
        </v-col>
        <v-col class="home-page__mobileStore-col">
          <h2 class="title-h2">Enjoy mobile shopping with our Createx Store App!</h2>
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
</template>
