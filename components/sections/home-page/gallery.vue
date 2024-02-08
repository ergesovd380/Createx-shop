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
            {{ $t('Gallery.Summer') }}
          </div>
          <h2 class="home-page__gallery-title title-h2">{{ $t('Gallery.Sale') }}</h2>
          <BtnOutline class="btn__small">{{ $t('Gallery.Explore') }}</BtnOutline>
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
            {{ $t('Gallery.Deal') }}
          </div>
          <h2 class="home-page__gallery-title title-h2">
            {{ $t('Gallery.Stay') }} 
            <br> 
            {{ $t('Gallery.NewSweaters') }}
          </h2>
          <BtnOutline class="btn__small">{{ $t('Gallery.Shop') }}</BtnOutline>
<!-- Date -->
          <div class="home-page__gallery-date">
            <div 
              class="
                base__small-bold
                text-uppercase
                home-page__gallery-date-title
              "
            >
              {{ $t('Gallery.Limited') }}
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
          >{{ $t('Gallery.NewCollection') }}</div>
          <h2 class="home-page__gallery-title title-h2">
            {{ $t('Gallery.ShoesBags') }}
            <br> 
            {{ $t('Gallery.AutumnWinter') }}
          </h2>
          <BtnOutline class="btn__small">
            {{ $t('Gallery.SeeOffers') }} 
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
          >{{ $t('Gallery.EmailSubscribers') }}</div>
          <h2 class="home-page__gallery-title title-h2">{{ $t('Gallery.FreeDelivery') }}</h2>
<!-- Form -->
          <v-form 
            @submit.prevent
            class="form"
          >
            <label 
              for="email__gallery" 
              class="form__label base base__regular"
            >
            {{ $t('Gallery.Email') }}
            </label>
            <InputText 
              :placeholder="$t('Gallery.WorkingEmail')" 
              class="form__input"
              id="email__gallery"
            />
            <Btn class="btn__small">{{ $t('Gallery.Subscribe') }}</Btn>
            <div class="form__singup">{{ $t('Gallery.SignUp') }}</div>
          </v-form>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>
