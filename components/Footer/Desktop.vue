<script setup>
import {ref} from 'vue';

const icons = ref([
  'mdi-facebook',
  'mdi-instagram',
  'mdi-twitter',
  'mdi-youtube',
  'mdi-pinterest'
])

</script>

<template>
  <v-footer  
    class="d-flex flex-column footer border" 
  >
    <v-container>
      <v-row class="base__regular">
        <v-col md="3" sm="6">
          <div class="base__regular-title footer__title">Help</div>
          <div class="footer__item"> 
            <span class="footer__menu">Delivery & returns</span>
          </div>
          <div class="footer__item"> 
            <span class="footer__menu">FAQ</span>
          </div>
          <div class="footer__item"> 
            <span class="footer__menu">Track order</span>
          </div>
          <div class="footer__item"> 
            <span class="footer__menu">Contacts</span>
          </div>
          <div class="footer__item"> 
            <span class="footer__menu">Blog</span>
          </div>
        </v-col>
        <v-col md="3" sm="6">
          <div class="base__regular-title footer__title">Shop</div>
          <div class="footer__item"> 
            <span class="footer__menu">New arrivals</span>
          </div>
          <div class="footer__item"> 
            <span class="footer__menu">Trending now</span>
          </div>
          <div class="footer__item"> 
            <span class="footer__menu">Sales</span>
          </div>
          <div> 
            <span class="footer__menu">Brands</span>
          </div>
        </v-col>
        <v-col md="3" sm="6">
          <div class="base__regular-title footer__title">Get in touch</div>
          <div class="footer__item">
            <span class="footer__menu">Call: (405) 555-0128</span>
          </div>
          <div class="footer__item">
            <span class="footer__menu">Email: hello@createx.com</span>
          </div>
          <div class="footer__icons">
            <span
              v-for="(icon, index) in icons"
              :key="index" 
              class="footer__icons-item">
              <v-icon>{{ icon }}</v-icon>
            </span>
          </div>
        </v-col>
        <v-col md="3" sm="6">
          <div class="base__regular-title footer__title">Download our app</div>
          <div class="footer__download">
            <div class="footer__download-item"><img src="/images/footer/app-store.png" alt=""></div>
            <div class="footer__download-item"><img src="/images/footer/google-play.png" alt=""></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="divider__gl"></div>
    <v-container>
      <div class="footer__bottom">
        <div class="footer__bottom-item">
          <span>© All rights reserved. Made with</span>
          <v-icon 
            color="var(--primary)" 
            class="mx-1"
          >
            mdi-heart-outline
          </v-icon>
          <span>by Createx Studio</span> 
        </div>
        <div class="footer__bottom-gotop">Go to top</div>
      </div>
    </v-container>
  </v-footer>
</template>
