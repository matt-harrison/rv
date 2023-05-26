<script lang="ts" setup>
  import type { Vehicle } from '@/types/Vehicle';

  import BasicCarousel from '@/components/BasicCarousel.vue';
  import CardFeaturedListing from '@/components/CardFeaturedListing.vue';

  type Props = {
    getIsFavorite: (adId: number) => boolean;
    handleFavoriteClick: (adId: number) => void;
    isTouchscreen?: boolean;
    offsetX?: number;
    vehicles: Vehicle[];
  };

  const props = withDefaults(defineProps<Props>(), {
    offsetX: 0,
  });
</script>

<template>
  <BasicCarousel
    :card-width="208"
    :gap="16"
    :is-touchscreen="props.isTouchscreen"
    :offset-x="offsetX"
    class="featured-listing-card-carousel"
  >
    <CardFeaturedListing
      :is-favorite="props.getIsFavorite(vehicle.adId)"
      :key="vehicle.adId"
      :vehicle="vehicle"
      @handle-favorite-click="props.handleFavoriteClick"
      v-for="vehicle in props.vehicles"
    />
  </BasicCarousel>
</template>

<style scoped></style>
