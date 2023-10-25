<script lang="ts" setup>
import { useTheme } from 'vuetify';
const theme = useTheme()

// Менять тему
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}
</script>

<template>
  <v-app-bar 
    height="70"
    elevation="0"
  >
    <v-container>
      <div class="header__secondbar">
        <div class="header__secondbar-item">
          <slot></slot>
        </div>
<!-- Change theme -->
        <div class="header__secondbar-item" @click="toggleTheme">
          <v-btn><v-icon>mdi-theme-light-dark</v-icon></v-btn>
        </div>
<!-- Search -->
        <div class="header__secondbar-item">
          <Dialog />
        </div>
<!-- Heart -->
        <div class="header__secondbar-item header__toolbar">
          <v-badge :content="2" inline color="transparent">
            <v-icon>mdi-heart-outline</v-icon>
          </v-badge>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
