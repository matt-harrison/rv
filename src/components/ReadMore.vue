<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import BasicButton from '@/components/BasicButton.vue';

  const props = defineProps({
    classLabel: {
      default: undefined,
      required: false,
      type: String,
    },
    heightCollapsed: {
      default: '3rem',
      required: false,
      type: String,
    },
    labelCollapsed: {
      default: 'Read more',
      required: false,
      type: String,
    },
    labelExpanded: {
      default: 'Read less',
      required: false,
      type: String,
    },
  });

  const isExpanded = ref(false);

  let readMoreContent = ref();

  const toggleIsExpanded = () => {
    const element = readMoreContent.value as HTMLElement;

    isExpanded.value = !isExpanded.value;

    element.style.gridTemplateRows = isExpanded.value ? '1fr' : '0fr';
  };

  onMounted(() => {
    const element = readMoreContent.value as HTMLElement;

    element.style.gridTemplateRows = isExpanded.value ? '1fr' : '0fr';
  });
</script>

<template>
  <div class="site-read-more flex column gap-1">
    <div
      ref="readMoreContent"
      class="site-read-more-content grid"
    >
      <div
        :style="{ minHeight: props.heightCollapsed }"
        class="y-hidden"
      >
        <slot />
      </div>
    </div>

    <div>
      <BasicButton
        :icon-trailing="isExpanded ? 'chevron-up' : 'chevron-down'"
        :is-restyled="true"
        @click="toggleIsExpanded"
        class="flex axis2-center gap-1/4 font-700"
        is-solid
      >
        <span class="underline">{{ isExpanded ? props.labelExpanded : props.labelCollapsed }}</span>
      </BasicButton>
    </div>
  </div>
</template>

<style scoped>
  .site-read-more-content {
    transition: grid-template-rows var(--animate);
  }
</style>
