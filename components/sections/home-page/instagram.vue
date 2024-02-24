<script lang="ts" setup>
  const props = defineProps(['Instagram']);
</script>

<template>
  <section class="home-page__instagram section">
    <V-container>
      <v-row>
        <v-col>
          <h6 class="title-h6">{{ $t('Instagram.Title') }}</h6>
          <h1 class="title-h1">@createx_store</h1>
          <BtnOutline class="btn__regular home-page__instagram-btn">
            <v-icon>mdi-instagram</v-icon>
            {{ $t('Instagram.Btn') }}
          </BtnOutline>
        </v-col>
        <v-col v-if="props.Instagram">
          <img src="images/home-page/instagram/img-1.png">
        </v-col>
        <v-col v-if="props.Instagram">
          <img src="images/home-page/instagram/img-2.png">
        </v-col>
        <v-col v-if="props.Instagram">
          <img src="images/home-page/instagram/img-3.png">
        </v-col>
      </v-row>
    </V-container>
  </section>
</template>
