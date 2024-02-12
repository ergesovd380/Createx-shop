<script lang="ts" setup>
  const props = defineProps(['gridServices']);
</script>

<template>
  <section class="home-page__services section">
    <v-container>
      <v-row class="text-center">
        <v-col :cols="props.gridServices" class="home-page__services-border">
          <img src="images/home-page/services/delivery.png">
          <div class="lead lead__bold">{{ $t('Service.ShippingTitle') }}</div>
          <div class="home-page__services-subtitle base base__regular">{{ $t('Service.ShippingSubtitle') }}</div>
        </v-col>
        <v-col :cols="props.gridServices" class="home-page__services-border">
          <img src="images/home-page/services/call-center.png">
          <div class="lead lead__bold">{{ $t('Service.SupportTitle') }}</div>
          <div class="home-page__services-subtitle base base__regular">{{ $t('Service.SupportSubtitle') }}</div>
        </v-col>
        <v-col :cols="props.gridServices" class="home-page__services-border">
          <img src="images/home-page/services/shield.png">
          <div class="lead lead__bold">{{ $t('Service.GuaranteeTitle') }}</div>
          <div class="home-page__services-subtitle base base__regular">{{ $t('Service.GuaranteeSubtitle') }}</div>
        </v-col>
        <v-col :cols="props.gridServices">
          <img src="images/home-page/services/credit-card.png">
          <div class="lead lead__bold">{{ $t('Service.PaymentTitle') }}</div>
          <div class="home-page__services-subtitle base base__regular">{{ $t('Service.PaymentSubtitle') }}</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
