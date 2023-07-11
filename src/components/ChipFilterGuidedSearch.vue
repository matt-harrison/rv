<script lang="ts" setup>
  import type { VehicleType } from '@/types/VehicleType';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICONS } from '@/types/Icon';

  type Props = {
    isActive: boolean;
    vehicleType: VehicleType;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="props.isActive ? 'primary-variant tier-3' : 'border-1 border-gray bg-gray-light'"
    class="guided-search-toggle flex column axis2-center shrink-none mt-1 radius-1/2 px-1 pb-1/2 snap-start"
  >
    <div class="guided-search-toggle-thumb relative mb-1 radius-1/4 bg-gray" />

    <div class="flex axis1-center axis2-center gap-1/4 font-12">
      <span class="font-700 whitespace-nowrap">{{ props.vehicleType.label }}</span>

      <SvgIcon
        :svg-id="ICONS.CHECK"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped>
  .guided-search-toggle-thumb {
    margin-top: -1rem;
    width: 90px;
    height: 40px;
  }
</style>
