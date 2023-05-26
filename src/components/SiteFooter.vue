<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import { useBreakpointStore } from '@/stores/BreakpointStore';

  const breakpointStore = useBreakpointStore();

  const { isExtraSmall } = storeToRefs(breakpointStore);
</script>

<template>
  <footer class="site-footer flex column gap-1/4 font-14">
    <div class="py-2 bg-gray-light">
      <BasicContainer class="flex wrap axis1-between axis2-start gap-2">
        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-explore"
        >
          <h2 class="mb-1 font-18">Explore RV Trader</h2>

          <div class="flex wrap gap-1 axis1-between">
            <div class="flex column gap-1">
              <RouterLink
                class="underline-none"
                to="#"
              >
                About RVTrader.com
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                RVTrader.com Blog
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Site Map
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Need Help?
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Email Us Feedback
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Security Center
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Community Guidelines
              </RouterLink>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-affiliates"
        >
          <h2 class="mb-1 font-18">RV Trader affiliates</h2>

          <div class="flex column gap-1 axis1-between">
            <RouterLink
              class="underline-none"
              to="#"
            >
              Airplanes For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              ATVs For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Trucks For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Motorcycles For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Heavy Equipment For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Jet Skis For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Snowmobiles For Sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Boats For Sale
            </RouterLink>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-1 w-full' : ''"
          class="site-footer-dealers-sellers"
        >
          <div class="flex column gap-1 mb-2">
            <h2 class="font-18">Dealers</h2>

            <div class="flex column axis2-start gap-1">
              <BasicButton
                :class="isExtraSmall ? '' : 'w-full'"
                is-secondary
              >
                TraderTraxx Login
              </BasicButton>

              <p>
                <RouterLink
                  class="font-600"
                  to="#"
                >
                  Advertise your inventory
                </RouterLink>
                <span> with us!</span>
              </p>
            </div>
          </div>

          <div>
            <h2 class="mb-1 font-18">Private sellers</h2>

            <div class="flex column axis2-start gap-1">
              <span>Sell your RV fro $69.95</span>

              <BasicButton
                :class="isExtraSmall ? '' : 'w-full'"
                is-secondary
              >
                Sell my RV
              </BasicButton>

              <RouterLink
                class="font-600"
                to="#"
              >
                Edit my listing
              </RouterLink>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 axis1-center w-full' : ''"
          class="site-footer-socials flex gap-1/2 font-24"
        >
          <BasicButtonIcon
            class-icon="site-footer-social"
            icon="twitter"
            is-brand
            is-restyled
            is-secondary
          />

          <BasicButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="facebook-f"
            is-brand
            is-restyled
            is-secondary
          />

          <BasicButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="instagram"
            is-brand
            is-restyled
            is-secondary
          />

          <BasicButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="youtube"
            is-brand
            is-restyled
            is-secondary
          />

          <BasicButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="pinterest-p"
            is-brand
            is-restyled
            is-secondary
          />

          <BasicButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="linkedin-in"
            is-brand
            is-restyled
            is-secondary
          />
        </div>
      </BasicContainer>
    </div>

    <div class="py-2 bg-gray-light">
      <BasicContainer
        :class="isExtraSmall ? 'column axis2-center' : 'row'"
        class="flex wrap gap-1"
      >
        <span>RVTrader.com © 2023 Trader Interactive | All rights reserved.</span>
        <RouterLink
          class="underline-none"
          to="#"
        >
          Privacy Policy
        </RouterLink>

        <RouterLink
          class="underline-none"
          to="#"
        >
          Terms of Use
        </RouterLink>

        <RouterLink
          class="underline-none"
          to="#"
        >
          Advertiser Agreement
        </RouterLink>
      </BasicContainer>
    </div>
    <slot />
  </footer>
</template>

<style scoped>
  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }
</style>

<style>
  .site-footer-social {
    width: 36px;
  }
</style>
