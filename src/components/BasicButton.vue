<script lang="ts" setup>
  import type { IconType } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';

  type Props = {
    iconLeading?: IconType;
    iconTrailing?: IconType;
    isRestyled?: boolean;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 radius-1/4 p-1 font-700'"
    class="basic-button"
  >
    <SvgIcon
      :svg-id="props.iconLeading"
      v-if="props.iconLeading"
    />

    <slot />

    <SvgIcon
      :svg-id="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </button>
</template>
