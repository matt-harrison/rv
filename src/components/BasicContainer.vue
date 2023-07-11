<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  const { isLarge } = storeToRefs(viewportStore);
</script>

<template>
  <div
    :class="isLarge ? 'mx-auto' : 'mx-1'"
    class="basic-container w-container"
  >
    <slot />
  </div>
</template>

<style scoped></style>
