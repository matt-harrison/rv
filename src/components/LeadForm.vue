<script lang="ts" setup>
  import { ref } from 'vue';
  import type { VehicleDetail } from '@/types/VehicleDetail';
  import BasicButton from '@/components/BasicButton.vue';
  import { getVehicleTitle } from '@/utilities/vehicle';

  type Props = {
    vehicle: VehicleDetail | undefined;
  };

  const props = defineProps<Props>();

  const comments = ref(props.vehicle ? `Is this ${getVehicleTitle(props.vehicle)} for sale?` : '');
</script>

<template>
  <form class="lead-form">
    <div class="flex gap-1 mb-1">
      <fieldset class="flex column gap-1/4">
        <label
          class="font-14"
          for="first-name"
        >
          First Name
        </label>

        <input
          class="border-1 border-gray p-1/2 w-full bg-white"
          id="-name"
          type="texfirstt"
        />
      </fieldset>

      <fieldset class="flex column gap-1/4">
        <label
          class="font-14"
          for="first-name"
        >
          Last Name
        </label>

        <input
          class="border-1 border-gray p-1/2 w-full bg-white"
          type="text"
        />
      </fieldset>
    </div>

    <div class="flex gap-1 mb-1">
      <fieldset class="flex column gap-1/4">
        <label
          class="font-14"
          for="first-name"
        >
          Phone (recommended)
        </label>

        <input
          class="border-1 border-gray p-1/2 w-full bg-white"
          type="text"
        />
      </fieldset>

      <fieldset class="flex column gap-1/4">
        <label
          class="font-14"
          for="first-name"
        >
          Email
        </label>

        <input
          class="border-1 border-gray p-1/2 w-full bg-white"
          type="text"
        />
      </fieldset>
    </div>

    <fieldset class="flex column gap-1/4">
      <label
        class="font-14"
        for="comments"
      >
        Comments
      </label>

      <textarea
        class="mb-1 border-1 border-gray p-1/2 w-full bg-white"
        rows="3"
        v-model="comments"
      />
    </fieldset>

    <div class="flex axis1-center mb-1">
      <BasicButton class="primary tier-1 w-full">Send email</BasicButton>
    </div>

    <p class="font-12">
      <span>Stay safe. Read more about </span>
      <RouterLink
        class="font-600"
        to="#"
      >
        avoiding scams and protecting your money.
      </RouterLink>
      <span> By using this site, you agree to our </span>
      <RouterLink
        class="font-600"
        to="#"
      >
        Terms of Use
      </RouterLink>
      <span> & our </span>
      <RouterLink
        class="font-600"
        to="#"
      >
        Privacy Policy.
      </RouterLink>
    </p>
  </form>
</template>

<style scoped></style>
