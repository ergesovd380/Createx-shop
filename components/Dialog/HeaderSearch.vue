<script lang="ts" setup>
import { ref } from 'vue';

const dialog = ref(false)
</script>

<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="300"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
        >
          <v-icon size="large">mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-card min-height="500">
        <v-toolbar
          color="var(--primary)"
          title="Search CreateX"
          class="text-white"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon color="var(--white)">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <InputSearch />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
 