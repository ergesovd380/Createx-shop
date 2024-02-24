<script lang="ts" setup>
// Import Vue.js components
import {ref} from 'vue';
 
const props = defineProps(['subscribeCategories', 'subscribeImg']);
const subscribeSelection = ref([]);
const agre = ref(false);
</script>

<template>
  <section class="home-page__subscribe section">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="home-page__subscribe-title title-h1">
            {{ $t('Subscribe.Title') }}
          </h1>
          <div 
            class="
              lead 
              lead__regular
              home-page__subscribe-subtitle
            "
          >{{ $t('Subscribe.SubTitle') }}</div>
          <v-item-group 
              v-model="subscribeSelection"
              multiple
              selected-class="home-page__subscribe-selected"
            >
              <v-item
                v-for="(category, indexS) in props.subscribeCategories"
                :key="indexS"
                v-slot="{ selectedClass, toggle }"
              >
                <BtnOutline
                  :class="selectedClass"
                  class="btn__subscribe-selection"
                  @click="toggle"
                >
                  {{ $t('Categories.' + category) }}
                </BtnOutline>
              </v-item>
          </v-item-group>
<!-- Form -->
          <v-form 
            @submit.prevent
            class="form"
          >
            <label 
              for="email__gallery" 
              class="form__label base base__regular"
            >
              {{ $t('Email.Email') }}
            </label>
            <InputText 
              :placeholder="$t('Email.WorkingEmail')" 
              class="form__input"
              id="email__gallery"
            />
            <Btn 
              class="btn__small" 
              :disabled="!agre"
            >{{ $t('Email.Subscribe') }}</Btn>
            <v-checkbox 
              v-model="agre"
              color="var(--primary)" 
              class="form__checkbox"
            >
              <template v-slot:label>
                <div class="base base__regu">{{ $t('Subscribe.Agree') }}</div>
              </template>
            </v-checkbox>
          </v-form>
        </v-col>
        <v-col v-if="props.subscribeImg">
          <img src="images/home-page/subscribe/img.png"
          class="home-page__subscribe-img">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
