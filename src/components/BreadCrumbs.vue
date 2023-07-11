<script lang="ts" setup>
  import type { PropType } from 'vue';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICONS } from '@/types/Icon';

  const props = defineProps({
    breadCrumbs: {
      default: undefined,
      required: true,
      type: Object as PropType<BreadCrumb[]>,
    },
  });
</script>

<template>
  <ul class="bread-crumbs flex axis2-center gap-1/2 font-14 list-none">
    <template
      :key="crumb.label"
      v-for="crumb in props.breadCrumbs"
    >
      <li v-if="crumb.url">
        <a
          :href="crumb.url"
          v-if="crumb.url"
        >
          {{ crumb.label }}
        </a>
      </li>

      <li
        class="flex column axis1-center"
        v-if="crumb.url"
      >
        <SvgIcon :svg-id="ICONS.CHEVRON_RIGHT" />
      </li>

      <li v-if="!crumb.url">{{ crumb.label }}</li>
    </template>
  </ul>
</template>
