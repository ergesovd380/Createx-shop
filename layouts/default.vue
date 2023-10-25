<script lang="ts" setup>
import {ref, onMounted, watch} from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme()

const Desktop = ref(true)

const calculateSize = () => {
  if(window.innerWidth > 600) {
    Desktop.value = true
  } else {
    Desktop.value = false
  }
}
window.addEventListener('resize', () => {
  calculateSize()
})

onMounted(() => {
  calculateSize()
})

// Менять контент под тему
const darkTheme = ref(false)

watch(theme.global.current, (theme) => {
  if (theme.dark) {
    darkTheme.value = true;
  } else {
    darkTheme.value = false;
  }
})

</script>

<template>
  <v-app>
    <v-header class="header">
<!-- Topbar Section -->
      <HeaderTopbar
        v-if="Desktop"
      />
<!-- Secondbar Section -->
      <HeaderSecondbar
       v-if="Desktop"
      >
        <HeaderLogo :src="darkTheme ? '/images/header/logo-white.png' : '/images/header/logo-black.png'" />
      </HeaderSecondbar>
<!-- Mobile Header -->
      <HeaderMobile 
        v-else
      > 
        <HeaderLogo :src="darkTheme ? '/images/header/logo-white.png' : '/images/header/logo-black.png'" />
      </HeaderMobile>
<!-- SpecialOffers Section -->
      <HeaderSpecialOffers/>
    </v-header>

    <v-main class="createx-shop">
      <NuxtPage/>
    </v-main>

<!-- Desktop Footer -->
    <FooterDesktop 
      :color="darkTheme ? 'var(--gray-900)' : 'var(--white)'"
      v-if="Desktop"
    />
<!-- Mobile Footer -->
    <FooterMobile 
      v-else
    />
  </v-app>
</template>
