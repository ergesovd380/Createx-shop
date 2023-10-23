<script lang="ts" setup>
import { ref } from 'vue';

// Navigation Drawers with categories
const showDrawer = ref(false);
const categories = ref(['Women', 'Men', 'Girls', 'Boys']);
</script>

<template>
  <v-app-bar 
    height="84"
    elevation="0"
  >
    <v-container>
      <div class="header__secondbar">
        <div class="header__secondbar-item">
          <slot></slot>
        </div>
<!-- Categories -->
        <div class="header__secondbar-item base base__bold">
          <div 
            v-for="(category, index) in categories"
            :key="index"
            class="header__category" 
            @click.stop="showDrawer = !showDrawer"
          >
            {{ category }}
          </div>
          <div class="header__category sale">Sale</div>
        </div>
<!-- Search big-tablet -->
        <div class="header__secondbar-item element__more-big-tablet">          
          <InputSearch 
            class="header__search"
            placeholder="Search for products..."  
          />
        </div>
<!-- Heart/Cart -->
        <div class="header__secondbar-item header__toolbar">
<!-- Heart -->
          <div class="base base__regular">
            <v-badge :content="2" inline color="transparent">
              <v-icon>mdi-heart-outline</v-icon>
            </v-badge>
          </div>
<!-- Vertical line -->
          <div class="divider__vl divider__vl-header"></div>
<!-- Cart -->
          <div class="header__toolbar-cart">
            <v-badge :content="4" inline color="var(--success)">
              <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
          </div>
        </div>
      </div>
    </v-container>
  </v-app-bar>
  
<!--Navigation drawer-->
  <v-navigation-drawer
    v-model="showDrawer"
    location="top"
    temporary
    width="490"
  >
    <Navigation />
  </v-navigation-drawer>
</template>
