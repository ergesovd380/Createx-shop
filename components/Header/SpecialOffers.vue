<script lang="ts" setup>
import { ref } from 'vue';

const step = ref(1);
const length = 3;
</script>

<template>
  <v-app-bar
    height="34"
    color="var(--primary)"
  >
    <v-container>
      <v-window
        v-model="step"
        hide-arrows
      >
        <v-window-item
          v-for="n in length"
          :key="n"
          :value="n"
        >
          <v-card 
            class="d-flex justify-center align-center" 
            color="var(--primary)"
          >
            <v-btn
              v-if="step > 1"
              variant="plain"
              icon="mdi-chevron-left"
              color="var(--white)"
              @click="step--"
            ></v-btn>
            <span class="
              text-white
              base__extrasmall 
              base__extrasmall-bold
            ">
              Up to 70% Off.
              <a href="" class="link link__extrasmall">
                Shop our latest sale style
              </a>
            </span>
            <v-btn
              v-if="step < 3"
              variant="plain"
              icon="mdi-chevron-right"
              color="var(--white)"
              @click="step++"
            ></v-btn>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
  </v-app-bar>
</template>
