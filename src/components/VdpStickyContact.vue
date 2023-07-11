<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { storeToRefs } from 'pinia';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicLinkAsButton from './BasicLinkAsButton.vue';
  import { getVehiclePhoneHref } from '@/utilities/vehicle';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';
  import { ICONS } from '@/types/Icon';

  const isStickyContact = ref(false);
  const stickyContactRef = ref();
  const stickableFooterRef = ref();

  const vehicleDetailStore = useVehicleDetailStore();
  const { vehicle } = storeToRefs(vehicleDetailStore);
  const phoneHref = getVehiclePhoneHref(vehicle.value);

  const getIsStickyContact = () => {
    if (stickyContactRef.value) {
      const stickyFooterRect = stickyContactRef.value.getBoundingClientRect();
      const stickableFooterRect = stickableFooterRef.value.getBoundingClientRect();

      isStickyContact.value = stickyFooterRect.y + stickableFooterRect.height <= screen.height;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', getIsStickyContact);
    window.addEventListener('scroll', getIsStickyContact);
    getIsStickyContact();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', getIsStickyContact);
    window.removeEventListener('scroll', getIsStickyContact);
  });
</script>

<template>
  <div
    :class="isStickyContact ? 'fixed bottom-0 shadow-box' : ''"
    ref="stickableFooterRef"
    class="sticky-footer flex gap-1/2 py-2 px-1 w-full bg-white"
  >
    <BasicLinkAsButton
      :icon-leading="ICONS.MESSAGE"
      class="vehicle-detail-text-cta secondary flex column"
      to="sms:+7575551234"
    >
      <span class="font-12 font-600">text</span>
    </BasicLinkAsButton>

    <BasicLinkAsButton
      :icon-leading="ICONS.PHONE"
      :to="phoneHref"
      class="vehicle-detail-call-cta primary tier-1 flex column"
    >
      <span class="font-12 font-600">call</span>
    </BasicLinkAsButton>

    <BasicButton
      :icon-leading="ICONS.ENVELOPE"
      class="vehicle-detail-email-cta primary tier-2 flex column"
    >
      <span class="font-12 font-600">email</span>
    </BasicButton>

    <BasicButton
      :icon-leading="ICONS.COMMENTS"
      class="vehicle-detail-chat-cta secondary flex column"
    >
      <span class="font-12 font-600">chat</span>
    </BasicButton>
  </div>
</template>

<style>
  .sticky-footer .vehicle-detail-call-cta {
    flex: 3;
  }

  .sticky-footer .vehicle-detail-chat-cta,
  .sticky-footer .vehicle-detail-text-cta {
    flex: 1;
  }

  .sticky-footer .vehicle-detail-email-cta {
    flex: 2;
  }
</style>
