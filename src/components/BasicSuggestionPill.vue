<script lang="ts" setup>
  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICONS } from '@/types/Icon';
</script>

<template>
  <button class="basic-suggestion-pill flex axis1-center axis2-center gap-1/2 radius-1/2 p-1 font-700">
    <SvgIcon :svg-id="ICONS.MAGNIFYING_GLASS" />

    <slot />
  </button>
</template>
