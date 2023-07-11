<script setup lang="ts">
  import { ref } from 'vue';
  import BasicTextInput from '@/components/BasicTextInput.vue';
  import VehiclePreview from '@/components/VehiclePreview.vue';
  import BasicButton from './BasicButton.vue';
  import dummyVehicle from '@/data/dummy-vehicle-detail.json';

  const form = ref<HTMLFormElement | null>(null);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (form.value) {
      console.log(form);
    }
  };
</script>

<template>
  <VehiclePreview :vehicle="dummyVehicle" />
  <div class="mt-3/2 font-14">Let the dealer contact you over text about this RV.</div>
  <form
    ref="form"
    class="flex column mt-1 mb-2 gap-3/4"
  >
    <BasicTextInput
      label="Name"
      name="name"
      required
    />
    <BasicTextInput
      label="Phone"
      name="phone"
      required
    />
    <BasicTextInput
      label="Email"
      name="email"
    />
  </form>
  <footer class="footer sticky left-0 bottom-0 py-1/2 px-2 bg-surface">
    <BasicButton
      @click="handleSubmit"
      class="ml-auto"
      is-primary
      type="submit"
    >
      Send
    </BasicButton>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    grid-column: 1 / -1;
  }
</style>
