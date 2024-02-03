<script lang="ts" setup>
import { useTheme } from 'vuetify';
import {onMounted} from 'vue';
import { useI18n } from 'vue-i18n';

// Менять язык
const { locale } = useI18n({ useScope: 'global' })
const toggleLang = () => {
  localStorage.setItem('lang', locale.value);
};

// Менять тему
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  localStorage.setItem('theme', theme.global.name.value);
};

const topbarItems = ['Delivery', 'Track', 'Blog', 'Contacts']

// При перезагрузке открыть тему
const localeTheme = localStorage.theme || 'light';
const localeLang = localStorage.lang || 'ru'
const startTheme = () => {
  theme.global.name.value = localeTheme;
  locale.value = localeLang;
};
onMounted(() => {
  startTheme();
});
</script>

<template>
  <v-app-bar 
    color="var(--gray-900)"
    height="44"
    elevation="0"
  >
    <v-container>
      <div class="header__topbar base__small">
        <div class="header__topbar-item">{{ $t('Topbar.Available') }} <b>(405) 555-0128</b></div>
        <div class="header__topbar-item element__more-big-tablet">
          <div class="header__menu">
            <div 
              class="header__menu-item"
              v-for="(items, index) in topbarItems"
              :key="index"
            >
              {{ $t('Topbar.' + items) }}
            </div>
          </div>
        </div>
        <div class="header__topbar-item">
          <v-btn @click="toggleTheme"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
        </div>
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
        <div class="header__topbar-item element__less-big-tablet">
          <Dialog />
        </div>
        <div class="header__topbar-item">
          <v-btn><v-icon>mdi-account-outline</v-icon></v-btn>
          <small>{{ $t('Topbar.Log') }}</small>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
