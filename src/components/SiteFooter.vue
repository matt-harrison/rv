<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import type { IconType } from '@/types/Icon';

  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicLinkAsButton from '@/components/BasicLinkAsButton.vue';
  import BasicLinkAsButtonIcon from '@/components/BasicLinkAsButtonIcon.vue';
  import { ICONS } from '@/types/Icon';
  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  type SocialLink = {
    icon: IconType;
    url: string;
  };

  const socialLinks: SocialLink[] = [
    {
      icon: ICONS.TWITTER,
      url: 'https://twitter.com/RVTrder',
    },
    {
      icon: ICONS.FACEBOOK,
      url: 'https://www.facebook.com/rvtrader',
    },
    {
      icon: ICONS.INSTAGRAM,
      url: 'https://www.instagram.com/RVTrader',
    },
    {
      icon: ICONS.YOUTUBE,
      url: 'https://www.youtube.com/RVTraderVideo',
    },
    {
      icon: ICONS.PINTEREST,
      url: 'https://www.pinterest.com/RVTrader',
    },
    {
      icon: ICONS.LINKED_IN,
      url: 'https://www.linkedin.com/showcase/rvtrader',
    },
  ];

  const { isExtraSmall } = storeToRefs(viewportStore);
</script>

<template>
  <footer class="site-footer flex column gap-1/4 font-14">
    <div class="py-2 bg-beige">
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
                RVTrader.com blog
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Site map
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Need help?
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Email us feedback
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Security center
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Community guidelines
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
              Airplanes for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              ATVs for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Trucks for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Motorcycles for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Heavy Equipment for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Jet Skis for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Snowmobiles for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Boats for sale
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
              <BasicLinkAsButton
                :class="isExtraSmall ? 'w-full' : 'px-1'"
                class="secondary radius-1/4 p-1/2"
                is-restyled
                to="#"
              >
                TraderTraxx login
              </BasicLinkAsButton>

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
              <span>Sell your RV for $69.95</span>

              <BasicLinkAsButton
                :class="isExtraSmall ? 'w-full' : 'px-1'"
                class="secondary radius-1/4 p-1/2"
                is-restyled
                to=""
              >
                Sell my RV
              </BasicLinkAsButton>

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
          class="site-footer-socials flex gap-1 font-20"
        >
          <BasicLinkAsButtonIcon
            :icon="socialLink.icon"
            :key="socialLink.url"
            :to="socialLink.url"
            class="tertiary"
            target="_blank"
            v-for="socialLink in socialLinks"
          />
        </div>
      </BasicContainer>
    </div>

    <div class="py-2 bg-beige">
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
