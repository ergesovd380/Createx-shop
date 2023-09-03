<script lang="ts" setup>
import {ref} from 'vue';
const open = ref(['Users']);
const categories = ref([
  {
    sex: 'Men',
    category: [
      {
        title: 'Clothes for men',
        subcategory: ['Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportwear', 'Swimwear']
      },
      {
        title: 'Shoes for men',
        subcategory: ['Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Sneakers', 'Leather']
      },
      {
        title: 'Accessories for men',
        subcategory: ['Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights']
      }
    ]
  },
  {
    sex: 'Women',
    category: [
      {
        title: 'Clothes for women',
        subcategory: ['Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportwear', 'Swimwear']
      },
      {
        title: 'Shoes for women',
        subcategory: ['Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Sneakers', 'Leather']
      },
      {
        title: 'Accessories for women',
        subcategory: ['Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights']
      }
    ]
  },
  {
    sex: 'Girl',
    category: [
      {
        title: 'Clothes for girls',
        subcategory: ['Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportwear', 'Swimwear']
      },
      {
        title: 'Shoes for girls',
        subcategory: ['Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Sneakers', 'Leather']
      },
      {
        title: 'Accessories for girls',
        subcategory: ['Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights']
      }
    ]
  },
  {
    sex: 'Boys',
    category: [
      {
        title: 'Clothes for boys',
        subcategory: ['Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportwear', 'Swimwear']
      },
      {
        title: 'Shoes for boys',
        subcategory: ['Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Sneakers', 'Leather']
      },
      {
        title: 'Accessories for boys',
        subcategory: ['Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights']
      }
    ]
  }
])

</script>

<template>
  <div>
    <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-sale" title="Sale"></v-list-item>

<!-- Categories -->
      <v-list-group
        :fluid="true"
      >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-widgets"
            title="Categories"
          ></v-list-item>
        </template>

        <v-list-group
          v-for="(s, index) in categories"
          :key="index" 
          :value="s.sex" 
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="s.sex"
            ></v-list-item>
          </template>
  
          <v-list-group 
            v-for="(c, index) in s.category"
            :key="index"
            :value="c.title"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="c.title"
              ></v-list-item>
            </template>
  
            <v-list-item
              v-for="(subcategory, index) in c.subcategory"
              :key="index"
              :title="subcategory"
              :value="subcategory"
            ></v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list-group>

    </v-list>
  </div>
</template>
