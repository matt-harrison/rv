<script lang="ts" setup>
  import { ref } from 'vue';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import type { Vehicle } from '@/types/Vehicle';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicImage from '@/components/BasicImage.vue';
  import { cdnDomain, cdnVersion } from '@/config/rv.config';
  import { formatPhone, formatPrice, formatTitleCase } from '@/utilities/format';

  type Props = {
    isFavorite: boolean;
    vehicle: Vehicle;
  };

  const emit = defineEmits(['handleFavoriteClick']);

  const props = defineProps<Props>();

  const showPhone = ref(false);

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    address: '123 Main St',
    hasHiddenPhone: Math.floor(Math.random() * 2),
    label: Math.floor(Math.random() * 10) === 0 ? 'Delivery Available' : undefined,
    milesAway: 21,
    stockNumber: '326303',
    zip: '12345',
  };

  const adType: string | undefined = props.vehicle.isPremium === '1' ? 'Premium' : undefined;
  const cityState = props.vehicle ? `${formatTitleCase(props.vehicle.city)}, ${props.vehicle.stateCode}` : null;

  const thumbnail: string | undefined =
    props.vehicle.photoIds.length > 0
      ? `https://${cdnDomain}/${cdnVersion}/media/${props.vehicle.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;

  const setShowPhone = (showPhoneValue: boolean) => {
    showPhone.value = showPhoneValue;
  };

  const handleFavoriteClick = () => {
    emit('handleFavoriteClick', props.vehicle.adId);
  };
</script>

<template>
  <li class="card-listing p-1/4 w-full xy-hidden">
    <RouterLink
      class="relative block h-full bg-white shadow-box underline-none"
      to="/listing"
    >
      <div class="flex column axis1-between gap-1/2 p-1/2 h-full">
        <div class="flex column gap-1/2">
          <BasicImage
            :offset="200"
            :src="thumbnail"
            assume-horizontal
            class="site-carousel-card-img mb-1/2 w-full"
            is-lazy-load
          />

          <div class="flex column gap-1/4">
            <div class="font-12">
              {{ props.vehicle.condition }} {{ props.vehicle.year }} {{ props.vehicle.makeName[0] || '' }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.modelName[0] || '' }}</div>

            <div class="font-12">
              <span v-if="adType">{{ adType }} ad by </span>
              <span>{{ props.vehicle.dealerGroupName || '' }}</span>
            </div>

            <div class="font-12">
              <span v-if="cityState">{{ cityState }} . </span>
              <span>{{ dummy.milesAway }} miles away</span>
            </div>
          </div>
        </div>

        <div class="flex wrap axis1-between axis2-center gap-1/4 font-12">
          <span class="font-700">
            {{ props.vehicle.price ? formatPrice(props.vehicle.price) : '' }}
          </span>

          <div
            class="flex wrap axis1-end axis2-center gap-1/2 grow"
            v-if="props.vehicle.phone"
          >
            <div class="flex axis2-center gap-1/4">
              <BasicButtonIcon
                class="p-1/2"
                icon="phone"
                is-secondary
                is-solid
              />

              <button
                @click.stop.prevent="setShowPhone(true)"
                class="font-700 underline"
                v-if="!showPhone && dummy.hasHiddenPhone"
              >
                Show phone number
              </button>

              <a
                @click.stop
                class="font-700"
                href="tel:+{{ props.vehicle.phone }}"
                v-if="showPhone || !dummy.hasHiddenPhone"
              >
                Call {{ formatPhone(parseInt(props.vehicle.phone, 10)) }}
              </a>
            </div>

            <BasicButtonIcon
              class="p-1/2"
              icon="envelope"
              is-primary
              is-solid
            />
          </div>
        </div>
      </div>

      <div
        class="card-listing-label absolute top-0 flex mt-1"
        v-if="dummy.label"
      >
        <div class="flex gap-1/2 p-1/2 bg-white">
          <FontAwesomeIcon icon="fa-solid fa-bookmark" />
          <span class="font-12 font-600">{{ dummy.label }}</span>
        </div>

        <div class="card-listing-label-flag" />
      </div>
      <div class="absolute top-0 right-0 mt-1 mr-1">
        <BasicButtonIcon
          :is-solid="isFavorite"
          @click.prevent="handleFavoriteClick"
          class="p-1/2 font-18"
          icon="heart"
          is-restyled
          is-secondary
        />
      </div>
    </RouterLink>
  </li>
</template>

<style scoped>
  .card-listing-label {
    filter: drop-shadow(var(--shadow));
  }

  .card-listing-label-flag {
    border-top: 16px solid white;
    border-right: 8px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 8px solid white;
  }

  @media (min-width: 992px) {
    .card-listing {
      max-width: calc(33.3333% - (2rem / 3));
    }
  }
</style>