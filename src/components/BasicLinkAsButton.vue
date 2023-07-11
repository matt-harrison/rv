<script lang="ts" setup>
  import type { IconType } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';

  type Props = {
    iconLeading?: IconType;
    iconTrailing?: IconType;
    isRestyled?: boolean;
    target?: string;
    to: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :class="props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 radius-1/4 p-1 font-700'"
    :target="props.target"
    :to="props.to"
    class="basic-link-as-button underline-none"
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
  </RouterLink>
</template>
