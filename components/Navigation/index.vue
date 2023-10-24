<script lang="ts" setup>
import {ref} from 'vue'

const filters = ref(['New collection', 'Best Sellers', 'Plus Size'])
const categories = ref([
  {
    title: 'Clothes',
    subcategory: ['Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportwear', 'Swimwear']
  },
  {
    title: 'Shoes',
    subcategory: ['Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Sneakers', 'Leather']
  },
  {
    title: 'Accessories',
    subcategory: ['Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights']
  }
])
</script>

<template>
  <div class="base__small navigation">
    <v-container>
      <v-row>
        <v-col cols="2">
          <div 
            v-for="filter in filters" 
            :key="filter"
            class="navigation__category"
          >
            {{ filter }}
          </div>
          <div class="navigation__category navigation__sale">Sale up to 70%</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col
              v-for="category in categories"
              :key="category.title"
            >
              <div class="
                navigation__category 
                base__small-bold 
                text-uppercase"
              >{{ category.title }}</div>
              <div
                v-for="(subcategory, index) in category.subcategory"
                :key="index"
                class="navigation__category"
              >
                {{ subcategory }}
              </div>
            </v-col>
            <div class="divider__vl divider__vl-navigation"></div>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-card
            class="mx-auto"
            max-width="285"
            elevation="0"
          >
            <v-img
              src="/images/navigation/boy.png"
              class="navigation__img"
              cover
            ></v-img>
            <div class="navigation__img-title base__small base__small-bold">
              Back to school. Sale up to 50%
            </div>
            <BtnOutline
              class="btn__extrasmall"
            >
              <span>See offers</span>
              <v-icon 
                class="btn__extrasmall-icon">mdi-arrow-right</v-icon>
            </BtnOutline>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
