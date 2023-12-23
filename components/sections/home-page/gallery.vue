<script lang="ts" setup>
// CategoriesData, BannerData
const props = defineProps(['date', 'gridBigGallery', 'gridSmallGallery']);
</script>

<template>
  <section class="home-page__gallery section base__small">
<!-- Banner Row 1 -->
    <v-row>
<!-- Banner 1 -->
      <v-col :cols="props.gridSmallGallery" class="pa-1">
        <v-img 
          src="images/home-page/gallery/banner-1.png" 
          class="home-page__gallery-img"
          cover
        >
          <div class="base__small-bold text-uppercase">
            Summer Collections
          </div>
          <h2 class="home-page__gallery-title title-h2">Sale Up to 70%</h2>
          <BtnOutline class="btn__small">Explore new prices</BtnOutline>
        </v-img>
      </v-col>
<!-- Banner 2 -->
      <v-col :cols="props.gridBigGallery" class="pa-1">
        <v-img 
          src="images/home-page/gallery/banner-2.png"
          class="home-page__gallery-img"
          cover
        >
          <div class="base__small-bold text-uppercase">
            Deal of the week
          </div>
          <h2 class="home-page__gallery-title title-h2">
            Stay Warm With Our 
            <br> 
            New Sweaters
          </h2>
          <BtnOutline class="btn__small">Shop now</BtnOutline>
<!-- Date -->
          <div class="home-page__gallery-date">
            <div 
              class="
                base__small-bold
                text-uppercase
                home-page__gallery-date-title
              "
            >
              Limited time offer
            </div>
            <div class="home-page__gallery-date-content">
              <v-row>
                <v-col                   
                  v-for="(d, index) in props.date"
                  :key="index"
                >
                  <h3 class="title-h3">
                    {{ d.num }}
                  </h3>
                  <div>
                    {{ d.str }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>
<!-- Banner Row 2 -->
    <v-row>
<!-- Banner 3 -->
      <v-col :cols="props.gridBigGallery" class="pa-1">
        <v-img 
          src="images/home-page/gallery/banner-3.png"
          class="home-page__gallery-img"
          cover
        >
          <div class=" 
              base__small-bold
              text-uppercase
            "
          >New collection</div>
          <h2 class="home-page__gallery-title title-h2">
            Shoes & Bags 
            <br> 
            autumn / winter 2020 
          </h2>
          <BtnOutline class="btn__small">
            See offers 
            <v-icon size="small">mdi-arrow-right</v-icon>
          </BtnOutline>
        </v-img>
      </v-col>
<!-- Banner 4 -->
      <v-col :cols="props.gridSmallGallery" class="pa-1">
        <v-img 
          src="images/home-page/gallery/banner-4.png"
          class="home-page__gallery-img"
          cover
        >
          <div class="
            base__small-bold
            text-uppercase
            "
          >For All new Email Subscribers</div>
          <h2 class="home-page__gallery-title title-h2">Get 5% Off & Free Delivery</h2>
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
            <div class="form__singup">*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</div>
          </v-form>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>