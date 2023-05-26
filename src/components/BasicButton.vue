<script lang="ts" setup>
  const props = defineProps({
    iconLeading: {
      default: undefined,
      required: false,
      type: String,
    },
    iconTrailing: {
      default: undefined,
      required: false,
      type: String,
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
</script>

<template>
  <button
    :class="[
      props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 border-2 radius-1/2 p-1 font-700',
      props.isPrimary ? 'primary' : '',
      props.isSecondary ? 'secondary' : '',
    ]"
    class="basic-button"
  >
    <FontAwesomeIcon
      :icon="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.iconLeading}`]"
      v-if="props.iconLeading"
    />

    <slot />

    <FontAwesomeIcon
      :icon="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.iconTrailing}`]"
      v-if="props.iconTrailing"
    />
  </button>
</template>

<style scoped>
  .basic-button.primary,
  .basic-button.secondary:hover {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }

  .basic-button.secondary,
  .basic-button.primary:hover {
    border-color: var(--primary);
    background-color: var(--white);
    color: var(--primary);
  }

  .basic-button[disabled] {
    border-color: var(--gray);
    background-color: var(--gray);
    color: var(--gray-dark);
  }

  .basic-button:hover .link-label {
    text-decoration: underline;
  }
</style>
