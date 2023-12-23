<script lang="ts" setup>
  const props = defineProps(['subscribeBtns', 'subscribeSelection', 'subscribeImg']);
</script>

<template>
  <section class="home-page__subscribe section">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="home-page__subscribe-title title-h1">
            Subscribe for updates
          </h1>
          <div 
            class="
              lead 
              lead__regular
              home-page__subscribe-subtitle
            "
          >Subscribe for exclusive early sale access and new arrivals.</div>
          <v-item-group 
              v-model="props.subscribeSelection" 
              multiple 
              selected-class="home-page__subscribe-selected"
            >
              <v-item
                v-for="(btn, indexSubscribe) in props.subscribeBtns"
                :key="indexSubscribe"
                v-slot="{ selectedClass, toggle }"
              >
                <BtnOutline
                  :class="selectedClass"
                  class="btn__subscribe-selection"
                  @click="toggle"
                >
                  {{ btn }}
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
              Email
            </label>
            <InputText 
              placeholder="Your working email" 
              class="form__input"
              id="email__gallery"
            />
            <Btn class="btn__small">Subscribe</Btn>
            <v-checkbox 
              color="var(--primary)" 
              class="form__checkbox"
            >
              <template v-slot:label>
                <div class="base base__regu">I agree to receive communications from Createx Store.</div>
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
