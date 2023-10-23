<script lang="ts" setup>
import { useTheme } from 'vuetify'
import {onMounted} from 'vue'

// Менять тему
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}

// При перезагрузке открыть тему
const localeTheme = localStorage.theme || 'light'
const startTheme = () => {
  theme.global.name.value = localeTheme;
}
onMounted(() => {
  startTheme()
})
</script>

<template>
  <v-app-bar 
    color="var(--gray-900)"
    height="44"
    elevation="0"
  >
    <v-container>
      <div class="header__topbar base__small">
        <div class="header__topbar-item">Available 24/7 at (405) 555-0128</div>
        <div class="header__topbar-item element__more-tablet">
          <div class="header__menu">
            <div class="header__menu-item">Delivery & returns</div>
            <div class="header__menu-item">Track order</div>
            <div class="header__menu-item">Blog</div>
            <div class="header__menu-item">Contacts</div>
          </div>
        </div>
        <div class="header__topbar-item" @click="toggleTheme">
          <v-btn><v-icon>mdi-theme-light-dark</v-icon></v-btn>
        </div>
        <div class="header__topbar-item element__less-big-tablet">
          <Dialog />
        </div>
        <div class="header__topbar-item">
          <v-btn><v-icon>mdi-account-outline</v-icon></v-btn>
          <small>Log in / Register</small>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
