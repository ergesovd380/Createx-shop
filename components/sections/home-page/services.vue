<script lang="ts" setup>
  const props = defineProps(['gridServices']);
</script>

<template>
  <section class="home-page__services section">
    <v-container>
      <v-row class="text-center">
        <v-col :cols="props.gridServices" class="home-page__services-border">
          <img src="images/home-page/services/delivery.png">
          <div class="lead lead__bold">Fast Worldwide Shipping</div>
          <div class="home-page__services-subtitle base base__regular">Get free shipping over $250</div>
        </v-col>
        <v-col :cols="props.gridServices" class="home-page__services-border">
          <img src="images/home-page/services/call-center.png">
          <div class="lead lead__bold">24/7 Customer Support</div>
          <div class="home-page__services-subtitle base base__regular">Friendly 24/7 customer support</div>
        </v-col>
        <v-col :cols="props.gridServices" class="home-page__services-border">
          <img src="images/home-page/services/shield.png">
          <div class="lead lead__bold">Money Back Guarantee</div>
          <div class="home-page__services-subtitle base base__regular">We return money within 30 days</div>
        </v-col>
        <v-col :cols="props.gridServices">
          <img src="images/home-page/services/credit-card.png">
          <div class="lead lead__bold">Secure Online Payment</div>
          <div class="home-page__services-subtitle base base__regular">Accept all major credit cards</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
