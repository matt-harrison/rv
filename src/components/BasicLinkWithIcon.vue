<script lang="ts" setup>
  import type { IconType } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';

  type Props = {
    classIcon?: string;
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
    :class="isRestyled ? '' : 'inline-flex axis2-center gap-1/2 underline-none'"
    :target="props.target"
    :to="props.to"
    class="basic-link-with-icon"
  >
    <SvgIcon
      :class="classIcon"
      :svg-id="props.iconLeading"
      class="primary"
      v-if="props.iconLeading"
    />

    <div class="underline">
      <slot />
    </div>

    <SvgIcon
      :class="classIcon"
      :svg-id="props.iconTrailing"
      class="primary"
      v-if="props.iconTrailing"
    />
  </RouterLink>
</template>
