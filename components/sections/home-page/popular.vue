<script lang="ts" setup>
  const props = defineProps(['popularCategories']);
</script>

<template>
  <section class="home-page__popular section">
    <v-container>
      <h1 class="title-h1">{{ $t('Popular.Title') }}</h1>
      <div class="home-page__popular-categories">
        <div 
          v-for="(item, index) in props.popularCategories"
          :key="index"
        >
          <v-img :src="item.img"></v-img>
          <div class="home-page__popular-name lead lead__bold">{{ $t('Popular.' + item.name) }}</div>
        </div>
      </div>
    </v-container>
  </section>
</template>
