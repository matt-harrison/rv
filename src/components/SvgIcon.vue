<script lang="ts" setup>
  import type { Component } from 'vue';
  import { defineAsyncComponent, markRaw, ref, watch } from 'vue';

  import type { IconType } from '@/types/Icon';

  import { formatPascalCase } from '@/utilities/format';

  type Props = {
    fill?: string;
    svgId: IconType;
  };

  const props = withDefaults(defineProps<Props>(), {
    fill: 'currentColor',
  });

  const innerSVG = ref<Component>();

  watch(
    () => props.svgId,
    () => {
      const id = props.svgId as unknown;
      const name = formatPascalCase(id as string);
      const component = defineAsyncComponent(() => import(`@/assets/svg/Icon${name}.vue`));

      innerSVG.value = markRaw(component);
    },
    { immediate: true }
  );
</script>

<template>
  <div class="svg-icon">
    <svg
      :data-icon="svgId"
      :fill="props.fill"
      class="block"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Component
        :is="innerSVG"
        v-if="innerSVG"
      />
    </svg>
  </div>
</template>

<style scoped>
  .svg-icon svg {
    width: 1em;
    height: 1em;
  }
</style>
