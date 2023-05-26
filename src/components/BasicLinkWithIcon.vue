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
    isSolid: {
      default: false,
      required: false,
      type: Boolean,
    },
    target: {
      default: '_self',
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
    :target="props.target"
    :to="props.to"
    class="basic-link-with-icon inline-flex axis2-center gap-1/2 underline-none"
  >
    <FontAwesomeIcon
      :icon="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.iconLeading}`]"
      v-if="props.iconLeading"
    />

    <div class="underline">
      <slot />
    </div>

    <FontAwesomeIcon
      :icon="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.iconTrailing}`]"
      v-if="props.iconTrailing"
    />
  </RouterLink>
</template>

<style scoped />
