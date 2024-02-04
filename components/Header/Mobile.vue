<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { useI18n } from 'vue-i18n';

// Менять язык
const { locale } = useI18n({ useScope: 'global' })
const toggleLang = () => {
  localStorage.setItem('lang', locale.value);
};

// Менять тему
const theme = useTheme()
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
<!-- Change lang -->
        <div class="header__topbar-item">
          <v-select 
            v-model="locale"
             @update:menu="toggleLang" 
             variant="underlined"
             :items="['en', 'ru']"
             hide-selected
             menu-icon="mdi-earth"
            ></v-select>
        </div>
<!-- Search -->
        <div class="header__secondbar-item">
          <Dialog />
        </div>
<!-- Heart -->
        <!-- <div class="header__secondbar-item header__toolbar">
          <v-badge :content="2" inline color="transparent">
            <v-icon>mdi-heart-outline</v-icon>
          </v-badge>
        </div> -->
      </div>
    </v-container>
  </v-app-bar>
</template>
