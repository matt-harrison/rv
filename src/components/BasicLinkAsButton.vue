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
    target: {
      default: undefined,
      required: false,
      type: String,
    },
    to: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <RouterLink
    :class="[
      props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 border-2 radius-1/2 p-1 font-700',
      props.isPrimary ? 'primary' : '',
      props.isSecondary ? 'secondary' : '',
    ]"
    :target="props.target"
    :to="props.to"
    class="basic-link-as-button underline-none"
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
  </RouterLink>
</template>

<style scoped>
  .basic-link-as-button.primary,
  .basic-link-as-button.secondary:hover {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }

  .basic-link-as-button.secondary,
  .basic-link-as-button.primary:hover {
    border-color: var(--primary);
    background-color: var(--white);
    color: var(--primary);
  }

  .basic-link-as-button:hover .link-label {
    text-decoration: underline;
  }
</style>
