<script lang="ts" setup>
  import type { IconType } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';

  type Props = {
    iconLeading?: IconType;
    iconTrailing?: IconType;
    isPrimary?: boolean;
    isRestyled?: boolean;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2'"
    class="basic-button-as-link"
  >
    <SvgIcon
      :svg-id="props.iconLeading"
      v-if="props.iconLeading"
    />

    <div class="underline">
      <slot />
    </div>

    <SvgIcon
      :svg-id="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </button>
</template>
