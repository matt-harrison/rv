<script lang="ts" setup>
  import type { Vehicle } from '@/types/Vehicle';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicImage from '@/components/BasicImage.vue';
  import { ICONS } from '@/types/Icon';
  import { cdnDomain, cdnVersion } from '@/config/rv.config';
  import { formatPrice } from '@/utilities/format';

  type Props = {
    isFavorite: boolean;
    vehicle: Vehicle;
  };

  const emit = defineEmits(['favoriteClick']);

  const props = defineProps<Props>();

  const thumbnail: string | undefined =
    props.vehicle.photoIds.length > 0
      ? `https://${cdnDomain}/${cdnVersion}/media/${props.vehicle.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;

  const handleFavoriteClick = () => {
    emit('favoriteClick', props.vehicle.adId);
  };
</script>

<template>
  <li class="card-listing-featured shrink-none p-1/4 snap-start xy-hidden">
    <RouterLink
      class="block p-1/2 h-full bg-white shadow-box underline-none"
      to="/listing"
    >
      <div class="flex column axis1-between h-full">
        <div>
          <div class="mb-1/2 border-overlay radius-1/4">
            <BasicImage
              :offset="200"
              :src="thumbnail"
              assume-horizontal
              class="card-listing-featured-img w-full"
              is-lazy-load
            />
          </div>

          <div class="flex column gap-1/4 mb-1">
            <div class="font-12">
              {{ props.vehicle.condition }} {{ props.vehicle.year }} {{ props.vehicle.makeName[0] }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.modelName[0] }}</div>

            <div class="font-12">{{ props.vehicle.dealerGroupName }}</div>
          </div>
        </div>

        <div class="flex axis1-between axis2-center">
          <span class="font-14 font-700">
            {{ formatPrice(props.vehicle.price) }}
          </span>

          <BasicButtonIcon
            :icon="isFavorite ? ICONS.HEART : ICONS.HEART_OPEN"
            @click.prevent="handleFavoriteClick"
            class="tertiary"
          />
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped>
  .card-listing-featured {
    width: 232px;
  }

  .card-listing-featured-img {
    height: 129px;
  }
</style>
