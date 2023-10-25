<script setup>
import {ref} from 'vue';

const footer = ref([
  {
    title: 'Help', 
    menu: ['Delivery & returns', 'FAQ', 'Track order', 'Contacts', 'Blog']
  },
  {
    title: 'Shop', 
    menu: ['New arrivals', 'Trending now', 'Sales', 'Brands']
  },
  {
    title: 'Get in touch',
    menu: ['Call: (405) 555-0128', 'Email: hello@createx.com'],
    icons: ['mdi-facebook', 'mdi-instagram', 'mdi-twitter', 'mdi-youtube', 'mdi-pinterest']
  },
  {
    title: 'Download our app',
    img: ['/images/footer/app-store.png', '/images/footer/google-play.png']
  }
])
</script>

<template>
  <v-footer class="footer border d-flex flex-column">
<!-- Footer first section -->
    <v-container>
      <v-row class="base base__bold">
        <v-col 
          md="3" 
          sm="6" 
          v-for="(foot, indexFooter) in footer"
          :key="indexFooter"
        >
<!-- Footer title -->
          <div class="text-uppercase footer__title">
            {{ foot.title }}
          </div>
<!-- Footer menu -->
          <div 
            class="footer__item"
            v-for="(menu, indexMenu) in foot.menu"
            :key="indexMenu"
          > 
            <span 
              class="
                footer__menu 
                base 
                base__regular
              "
            >
              {{menu}}
            </span>
          </div>
<!-- Footer icons -->
          <div class="footer__icons">
            <span
              v-for="(icon, indexIcon) in foot.icons"
              :key="indexIcon" 
              class="footer__icons-item">
              <v-icon>{{ icon }}</v-icon>
            </span>
          </div>
<!-- Footer download-->
          <div class="footer__download">
            <div 
              class="footer__download-item"
              v-for="(img, indexImg) in foot.img"
              :key="indexImg"
            >
              <img :src="img" alt="">
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
<!-- Footer horizontal line-->
    <div class="divider__hl"></div>
<!-- Footer second section -->
    <v-container>
      <div class="footer__bottom">
        <div class="base__extrasmall">
          <span>© All rights reserved. Made with</span>
          <v-icon 
            color="var(--primary)" 
            class="mx-1"
          >
            mdi-heart-outline
          </v-icon>
          <span>by Createx Studio</span> 
        </div>
        <div 
          class="
            footer__bottom-gotop
            base
            base__bold
          "
        >
          Go to top
        </div>
      </div>
    </v-container>
  </v-footer>
</template>
