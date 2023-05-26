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
    isRestyled: {
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
    :class="props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2'"
    class="basic-button"
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
  </button>
</template>

<style scoped />
