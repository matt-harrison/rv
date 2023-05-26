<script lang="ts" setup>
  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import type { VehicleType } from '@/types/VehicleType';

  type Props = {
    isActive: boolean;
    vehicleType: VehicleType;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="props.isActive ? 'bg-blue-light' : 'bg-gray-light'"
    class="guided-search-toggle flex column axis2-center shrink-none mt-1 border-1 border-gray radius-1/2 pb-1/2 snap-start"
  >
    <div class="guided-search-toggle-thumb relative mb-1 radius-1/4 bg-gray" />

    <div class="flex axis1-center axis2-center gap-1/4">
      <span class="font-12 font-700 whitespace-nowrap">{{ props.vehicleType.label }}</span>
      <FontAwesomeIcon
        class="guided-search-toggle-check"
        icon="fa-solid fa-check"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped>
  .guided-search-toggle {
    width: 125px;
  }

  .guided-search-toggle-check {
    width: 15px;
    height: 15px;
  }

  .guided-search-toggle-thumb {
    margin-top: -1rem;
    width: 90px;
    height: 40px;
  }
</style>
