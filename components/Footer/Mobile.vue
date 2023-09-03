<script setup lang="ts">
import { ref, computed } from 'vue';
const value = ref(0)
const active = ref(true)

const color = computed(() => {
  switch (value.value) {
    case 0: return 'blue-grey'
    case 1: return 'blue'
    case 2: return 'teal'
    case 3: return 'indigo'
    default: return 'blue-grey'
}})

</script>
<template>
  <v-bottom-navigation
    v-model="value"
    :bg-color="color"
    mode="shift"
    grow
    elevation="0"
  >
    <v-btn>
      <v-icon>mdi-home</v-icon>
      <span>Home Page</span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-widgets</v-icon>
      <span>Categories</span>
    </v-btn>
    <v-btn>
      <v-badge :model-value="active" :content="4" color="var(--success)">
        <v-icon icon="mdi-cart"></v-icon>
      </v-badge>
      <span>Cart</span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-account</v-icon>
      <span>User</span>
    </v-btn>
  </v-bottom-navigation>
</template>
