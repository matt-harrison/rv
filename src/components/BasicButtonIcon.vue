<script lang="ts" setup>
  import type { IconType } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';

  type Props = {
    icon: IconType;
    isBrand?: boolean;
    isRestyled?: boolean;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="props.isRestyled ? '' : 'flex axis1-center axis2-center font-700'"
    class="basic-button-icon flex axis1-center axis2-center radius-full p-1/2"
  >
    <SvgIcon :svg-id="props.icon" />
  </button>
</template>
