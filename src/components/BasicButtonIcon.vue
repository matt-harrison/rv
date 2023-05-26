<script lang="ts" setup>
  import { computed } from 'vue';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const props = defineProps({
    classIcon: {
      default: '',
      required: false,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    isBrand: {
      default: false,
      required: false,
      type: Boolean,
    },
    isPrimary: {
      default: false,
      required: false,
      type: Boolean,
    },
    isRestyled: {
      default: false,
      required: false,
      type: Boolean,
    },
    isSecondary: {
      default: false,
      required: false,
      type: Boolean,
    },
    isSolid: {
      default: false,
      required: false,
      type: Boolean,
    },
  });

  const iconSet = computed(() => (props.isBrand ? 'brands' : props.isSolid ? 'solid' : 'regular'));
</script>

<template>
  <button
    :class="[
      props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 border-2 radius-1/2 p-1 font-700',
      props.isPrimary ? 'primary' : '',
      props.isSecondary ? 'secondary' : '',
    ]"
    class="basic-button-icon flex axis1-center axis2-center radius-full ratio-1/1"
  >
    <FontAwesomeIcon
      :class="props.classIcon"
      :icon="[`fa-${iconSet}`, `fa-${props.icon}`]"
    />
  </button>
</template>

<style scoped>
  .basic-button-icon.primary,
  .basic-button-icon.secondary:hover {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }

  .basic-button-icon.secondary,
  .basic-button-icon.primary:hover {
    border-color: var(--primary);
    background-color: var(--white);
    color: var(--primary);
  }

  .basic-button-icon[disabled] {
    border-color: var(--gray);
    background-color: var(--gray);
    color: var(--gray-dark);
  }

  .basic-button-icon:hover .link-label {
    text-decoration: underline;
  }
</style>
