<script lang="ts" setup>
  import type { IconType } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';

  type Props = {
    icon: IconType;
    isBrand?: boolean;
    isRestyled?: boolean;
    target?: string;
    to: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :class="props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 radius-1/2 p-1/2 font-700'"
    :target="props.target"
    :to="props.to"
    class="basic-link-as-button-icon flex axis1-center axis2-center radius-full p-1/2"
  >
    <SvgIcon :svg-id="props.icon" />
  </RouterLink>
</template>
