<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import type { BreadCrumb } from '@/types/BreadCrumb';
  import type { VehicleType } from '@/types/VehicleType';

  import AccordionItem from '@/components/AccordionItem.vue';
  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicButtonTabs from '@/components/BasicButtonTabs.vue';
  import BasicCarousel from '@/components/BasicCarousel.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicLinkAsButton from '@/components/BasicLinkAsButton.vue';
  import BasicToggle from '@/components/BasicToggle.vue';
  import BreadCrumbs from '@/components/BreadCrumbs.vue';
  import CardCarouselListingDealer from '@/components/CardCarouselListingDealer.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import CardListing from '@/components/CardListing.vue';
  import ChipFilterGuidedSearch from '@/components/ChipFilterGuidedSearch.vue';
  import SeoContent from '@/components/SeoContent.vue';
  import SiteDisclaimer from '@/components/SiteDisclaimer.vue';
  import SubscribeToNewsletter from '@/components/SubscribeToNewsletter.vue';
  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICONS } from '@/types/Icon';
  import { formatNumber } from '@/utilities/format';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useFilterStore } from '@/stores/FilterStore';
  import { useSearchResultStore } from '@/stores/SearchResultStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  const favoriteStore = useFavoriteStore();
  const featuredListingStore = useFeaturedListingStore();
  const filterStore = useFilterStore();
  const searchResultStore = useSearchResultStore();
  const userAgentStore = useUserAgentStore();
  const viewportStore = useViewportStore();

  featuredListingStore.getVehicles();
  filterStore.setPagesTotal(5);
  searchResultStore.getVehicles();

  const { isExtraSmall, isSmall, isLarge } = storeToRefs(viewportStore);
  const { filters, isBrowseByType, makes, types } = storeToRefs(filterStore);
  const { isTouchscreen } = storeToRefs(userAgentStore);

  const isSingleColumn = computed(() => isExtraSmall.value || isSmall.value);

  const breadCrumbs: BreadCrumb[] = [
    {
      label: 'Home',
      url: '#',
    },
    {
      label: 'Browse RVs',
      url: '#',
    },
    {
      label: 'Travel trailer',
      url: '#',
    },
    {
      label: 'Grand Design',
    },
  ];

  const filterCounts = {
    keyword: 0,
    location: 0,
    make: 0,
    makeModelFloorplan: 0,
    model: 0,
    type: 0,
  };

  let guidedSearchTabs = ref();
  let isSavedSearch = ref();

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    floorplanResults: 98430,
    headline: 'New and used Grand Design travel trailers for sale',
    resultCount: 123456,
  };

  const paginationButtons = new Array(filterStore.pagesTotal).fill('').map((empty, index) => index + 1);

  const rvTypes = new Array(9).fill('').map((item, index) => {
    return `RV Type ${index + 1}`;
  });

  const searchPills = [
    {
      label: 'New travel trailers',
      url: '/rvs-for-sale',
    },
    {
      label: 'Used travel trailers',
      url: '/rvs-for-sale',
    },
  ];

  const sleepingCapacities = new Array(9).fill('').map((item, index) => {
    return `Sleeps ${index + 1}`;
  });

  const topCities = new Array(12).fill('').map((item, index) => {
    return `Top City ${index + 1}`;
  });

  const topMakes = new Array(9).fill('').map((item, index) => {
    return `Top Make ${index + 1}`;
  });

  const topStates = new Array(12).fill('').map((item, index) => {
    return `State ${index + 1}`;
  });

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummyVehicleMakes: VehicleType[] = [
    { label: 'Travel trailer' },
    { label: 'Fifth wheel' },
    { label: 'Class A' },
    { label: 'Class C' },
    { label: 'Pop-up camper' },
    { label: 'Toy hauler' },
    { label: 'Truck camper' },
    { label: 'Class B' },
    { label: 'Park model' },
    { label: 'Fish house' },
  ];

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummyVehicleTypes: VehicleType[] = [
    { label: 'Airstream' },
    { label: 'Alliance Rv' },
    { label: 'Coachmen' },
    { label: 'Fleetwood' },
    { label: 'Forest River' },
  ];

  const handleFilterChipClick = (callback: () => void) => {
    callback();
    setBrowseButtons();
    setIsSavedSearch();
  };

  const handleClearAllClick = () => {
    filters.value.forEach((filter) => {
      filter.callback();
    });

    setBrowseButtons();
    setIsSavedSearch();
  };

  const handleMakeToggleClick = (label: string) => {
    filterStore.toggleMake(label);
    setBrowseButtons();
    setIsSavedSearch();
  };

  const handleTypeToggleClick = (label: string) => {
    filterStore.toggleType(label);
    setBrowseButtons();
    setIsSavedSearch();
  };

  const setBrowseButtons = () => {
    guidedSearchTabs.value = [
      {
        callback: () => {
          filterStore.setIsBrowseByType(true);
          setBrowseButtons();
        },
        count: filterCounts.type,
        isActive: isBrowseByType.value,
        label: types.value.length > 0 ? `Type (${types.value.length})` : 'Type',
      },
      {
        callback: () => {
          filterStore.setIsBrowseByType(false);
          setBrowseButtons();
        },
        count: filterCounts.make,
        isActive: !isBrowseByType.value,
        label: makes.value.length > 0 ? `Make (${makes.value.length})` : 'Make',
      },
    ];
  };

  const setIsSavedSearch = () => {
    isSavedSearch.value = filters?.value ? filterStore.getIsSavedSearch(filters.value) : false;
  };

  const toggleIsSavedSearch = () => {
    const isSavedSearch = filterStore.getIsSavedSearch(filters.value);

    if (isSavedSearch) {
      filterStore.removeSavedSearch(filters.value);
    } else {
      filterStore.addSavedSearch(filters.value);
    }

    setIsSavedSearch();
  };

  onMounted(() => {
    setBrowseButtons();
  });
</script>

<template>
  <div class="search-results-page mb-2">
    <AdPlaceholder
      class="mb-2"
      height="150"
    />

    <div
      :class="isSingleColumn ? 'column' : 'column-reverse'"
      class="flex gap-2 mb-2"
    >
      <BasicContainer :class="isLarge ? 'w-full' : ''">
        <BreadCrumbs
          :bread-crumbs="breadCrumbs"
          class="mb-1"
          v-if="!isSingleColumn"
        />

        <header class="flex wrap axis1-between gap-1">
          <div class="flex wrap axis2-center gap-1">
            <h1 class="font-24">{{ dummy.headline }}</h1>
            <span class="font-14">{{ formatNumber(dummy.resultCount) }} results</span>
          </div>

          <div
            :class="isSingleColumn ? 'axis1-between w-full' : ''"
            class="flex wrap axis2-center gap-1"
          >
            <div
              class="relative"
              v-if="isSingleColumn"
            >
              <BasicButton
                :icon-leading="ICONS.SLIDERS"
                class="primary tier-2 flex border-2 border-dark-gray radius-1/4 py-1/2 px-1 flex axis2-center gap-1/4 p-1/4"
                is-restyled
              >
                Filters
              </BasicButton>

              <div
                class="search-results-filter-count absolute top-0 right-0 flex axis1-center axis2-center radius-full bg-primary-tier-1 font-14 font-700"
                v-if="isSingleColumn && filters.length > 0"
              >
                {{ filters.length }}
              </div>
            </div>

            <div class="flex axis2-center gap-1/2">
              <BasicButton
                :class="
                  isSingleColumn
                    ? 'secondary radius-full p-1/2'
                    : 'tertiary flex axis2-center gap-1/2 radius-1/4 px-1 py-1/2'
                "
                :icon-leading="isSavedSearch ? ICONS.HEART : ICONS.HEART_OPEN"
                :is-active="isSavedSearch"
                @click="toggleIsSavedSearch"
                is-restyled
              >
                <span v-if="!isSingleColumn">Save search</span>
              </BasicButton>

              <BasicButton
                :class="
                  isSingleColumn
                    ? 'secondary flex border-2 border-dark-gray radius-1/4 py-1/2 px-1'
                    : 'tertiary flex axis2-center gap-1/2 radius-1/4 px-1 py-1/2'
                "
                class="flex axis2-center gap-1/4 p-1/4"
                is-restyled
              >
                <SvgIcon :svg-id="ICONS.ARROW_UP_ARROW_DOWN" />
                <span>Sort by{{ !isSingleColumn ? ':' : '' }}</span>
                <span
                  class="flex gap-1/4"
                  v-if="!isSingleColumn"
                >
                  <span>Premium</span>
                  <SvgIcon :svg-id="ICONS.CHEVRON_DOWN" />
                </span>
              </BasicButton>
            </div>
          </div>
        </header>
      </BasicContainer>

      <section v-if="guidedSearchTabs">
        <BasicContainer class="mb-2">
          <section class="flex axis2-center gap-1">
            <span
              class="font-20 font-700"
              v-if="!isSingleColumn"
            >
              Browse
            </span>

            <BasicButtonTabs
              :buttons="guidedSearchTabs"
              :class="isSingleColumn ? 'w-full' : ''"
            />
          </section>
        </BasicContainer>

        <BasicCarousel
          :card-width="125"
          :gap="16"
          :is-touchscreen="isTouchscreen"
          :offset-x="32"
          class="axis1-center"
          v-if="isBrowseByType"
        >
          <ChipFilterGuidedSearch
            :is-active="types.includes(vehicleType.label)"
            :key="vehicleType.label"
            :vehicle-type="vehicleType"
            @click="handleTypeToggleClick(vehicleType.label)"
            v-for="vehicleType in dummyVehicleMakes"
          />
        </BasicCarousel>

        <BasicCarousel
          :card-width="125"
          :gap="16"
          :is-touchscreen="isTouchscreen"
          :offset-x="32"
          class="axis1-center"
          v-if="!isBrowseByType"
        >
          <ChipFilterGuidedSearch
            :is-active="makes.includes(vehicleMake.label)"
            :key="vehicleMake.label"
            :vehicle-type="vehicleMake"
            @click="handleMakeToggleClick(vehicleMake.label)"
            v-for="vehicleMake in dummyVehicleTypes"
          />
        </BasicCarousel>
      </section>
    </div>

    <div
      :class="[isSingleColumn ? '' : 'mx-2', isLarge ? 'mx-auto w-container' : '']"
      class="search-results-columns"
    >
      <section class="flex gap-2 mb-2">
        <aside
          class="search-results-aside shrink-none bg-white"
          v-if="!isSingleColumn"
        >
          <div class="mb-2">
            <AccordionItem
              :is-expanded-initial="true"
              :label="`Location ${filterCounts.location ? '(' + filterCounts.location + ')' : ''}`"
              class-label="pb-1"
            >
              <div class="mb-1">
                <div class="flex axis1-between gap-1 my-1 border-b border-gray-light pb-1">
                  <div class="flex column gap-1/2 w-1/2">
                    <label
                      class="font-14"
                      for="zip"
                    >
                      Zip code
                    </label>

                    <input
                      class="border-1 border-gray radius-1/4 p-1 bg-white font-14"
                      name="zip"
                      type="text"
                    />
                  </div>

                  <div class="flex column gap-1/2 w-1/2">
                    <label
                      class="font-14"
                      for="radius"
                    >
                      Search within
                    </label>

                    <select
                      class="border-1 border-gray radius-1/4 p-1 bg-white font-14"
                      name="radius"
                    />
                  </div>
                </div>

                <div class="flex axis1-between axis2-center gap-1">
                  <span>
                    <span class="font-14">Only show listings with a floor plan image </span>
                    <span v-if="dummy.floorplanResults">({{ formatNumber(dummy.floorplanResults) }})</span>
                  </span>

                  <BasicToggle
                    :is-active="filterStore.isFilterByFloorplans"
                    @click="filterStore.toggleIsFilterByFloorplans"
                    class="shrink-none"
                  />
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              :label="`Make, model, floor plan ${
                filterCounts.makeModelFloorplan ? '(' + filterCounts.makeModelFloorplan + ')' : ''
              }`"
              class-label="py-1"
            >
              <div class="mb-1">
                <fieldset class="flex column gap-1/4 mb-1">
                  <label
                    class="font-14"
                    for="make"
                  >
                    Find a make
                  </label>

                  <input
                    class="border-1 border-gray radius-1/4 p-1 bg-white font-14"
                    name="make"
                    type="text"
                  />
                </fieldset>

                <fieldset class="flex column gap-1/4 mb-1/4">
                  <label
                    class="font-14 font-700"
                    for="topMake"
                  >
                    Top makes
                  </label>

                  <ul class="flex column gap-1/4">
                    <li
                      :key="index"
                      class="flex axis2-center gap-1/2"
                      v-for="(empty, index) in Array(8)"
                    >
                      <input
                        :id="`make${index}`"
                        type="checkbox"
                      />

                      <label
                        :for="`make${index}`"
                        class="font-14"
                      >
                        Make {{ index + 1 }}
                      </label>
                    </li>
                  </ul>
                </fieldset>

                <div class="mb-1">
                  <a
                    class="font-14 font-600"
                    href="#"
                  >
                    See all makes
                  </a>
                </div>

                <BasicButton> Select models and floor plans</BasicButton>
              </div>
            </AccordionItem>

            <AccordionItem
              class-label="py-1"
              label="RV type"
            >
              <div class="flex column gap-1/4 mb-1">
                <div
                  :key="index"
                  class="flex axis2-center gap-1/2"
                  v-for="(empty, index) in Array(8)"
                >
                  <input
                    :id="`type${index}`"
                    type="checkbox"
                  />
                  <label
                    :for="`type${index}`"
                    class="font-14"
                  >
                    RV type {{ index + 1 }}
                  </label>
                </div>
              </div>
            </AccordionItem>
          </div>

          <section>
            <h2 class="mb-1 font-16">Partner center</h2>

            <AdPlaceholder
              class="mb-2"
              height="181"
              width="300"
            />

            <AdPlaceholder
              height="250"
              width="300"
            />
          </section>
        </aside>

        <main class="search-results-main">
          <ul
            :class="isSingleColumn ? 'mx-2' : ''"
            class="flex wrap axis2-center gap-1/2 mb-2 list-none"
            v-if="!isSingleColumn && filters.length > 0"
          >
            <li
              :key="filter.label"
              v-for="filter in filters"
            >
              <BasicButton
                :icon-trailing="ICONS.XMARK"
                @click="handleFilterChipClick(filter.callback)"
                class="primary-variant tier-3 flex axis2-center gap-1/2 radius-full px-1 py-1/2 font-14 font-600"
                is-restyled
              >
                {{ filter.label }}
              </BasicButton>
            </li>

            <li>
              <BasicButton
                @click="handleClearAllClick"
                class="font-14 font-600 underline"
                is-restyled
              >
                Clear all
              </BasicButton>
            </li>
          </ul>

          <section class="mb-2 border-b border-gray-light pb-2 font-16">
            <h2
              :class="isSingleColumn ? 'mx-2' : ''"
              class="mb-1"
            >
              Featured listings
            </h2>

            <CardCarouselListingFeatured
              :get-is-favorite="favoriteStore.getIsFavorite"
              :handle-favorite-click="favoriteStore.toggleIsFavorite"
              :is-touchscreen="isTouchscreen"
              :offset-x="isSingleColumn ? 32 : undefined"
              :vehicles="featuredListingStore.vehicles"
            />
          </section>

          <ul class="flex wrap gap-1 mb-2 list-none">
            <template
              :key="vehicle.adId"
              v-for="(vehicle, index) in [
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles.slice(0, 6),
              ]"
            >
              <CardListing
                :class="isSingleColumn ? 'mx-2' : ''"
                :is-favorite="favoriteStore.getIsFavorite(vehicle.adId)"
                :vehicle="vehicle"
                @favorite-click="favoriteStore.toggleIsFavorite"
              />

              <li
                class="flex axis1-center w-full no-shrink"
                v-if="[12, 24].includes(index + 1)"
              >
                <AdPlaceholder
                  class="mx-2"
                  height="90"
                  v-if="!isSingleColumn"
                  width="728"
                />

                <AdPlaceholder
                  class="mx-2"
                  height="250"
                  v-if="isSingleColumn"
                  width="300"
                />
              </li>

              <li
                class="w-full"
                v-if="[3, 18].includes(index + 1)"
              >
                <CardCarouselListingDealer
                  :class="isSingleColumn ? 'mx-2' : ''"
                  :vehicles="featuredListingStore.vehicles"
                />
              </li>
            </template>
          </ul>

          <section
            :class="isSingleColumn ? 'px-2' : ''"
            class="flex axis1-center axis2-center gap-1 mb-2 w-full"
            v-if="filterStore.pagesTotal > 1"
          >
            <BasicButtonIcon
              :disabled="filterStore.pageCurrent === 1"
              :icon="ICONS.CHEVRON_LEFT"
              @click="filterStore.setPagePrevious"
              class="tertiary"
            />

            <ul class="flex axis2-center gap-1/4 mx-2 list-none">
              <li
                :key="paginationButton"
                v-for="paginationButton in paginationButtons"
              >
                <span
                  class="pagination-label primary tier-2 flex axis1-center axis2-center radius-full p-1 font-700"
                  v-if="filterStore.pageCurrent === paginationButton"
                >
                  {{ paginationButton }}
                </span>

                <BasicButton
                  @click="filterStore.setPageCurrent(paginationButton)"
                  class="tertiary relative radius-full p-1/2"
                  is-restyled
                  v-else
                >
                  <span class="pagination-label flex axis1-center axis2-center">
                    {{ paginationButton }}
                  </span>
                </BasicButton>
              </li>
            </ul>

            <BasicButtonIcon
              :disabled="filterStore.pageCurrent === paginationButtons[paginationButtons.length - 1]"
              :icon="ICONS.CHEVRON_RIGHT"
              @click="filterStore.setPageNext"
              class="tertiary"
            />
          </section>

          <section
            :class="isSingleColumn ? 'mx-2' : ''"
            class="flex wrap gap-1 mb-2 font-14"
          >
            <BasicLinkAsButton
              :icon-leading="ICONS.MAGNIFYING_GLASS"
              :key="searchPill.label"
              :to="searchPill.url"
              class="secondary flex axis2-center gap-1/2 radius-full py-1/2 px-1 font-600 underline-none"
              v-for="searchPill in searchPills"
            >
              {{ searchPill.label }}
            </BasicLinkAsButton>
          </section>

          <SiteDisclaimer :class="isSingleColumn ? 'mx-2 flex axis1-center' : ''" />

          <div
            class="flex column axis1-center mt-2"
            v-if="!isSingleColumn"
          >
            <AdPlaceholder
              class="mb-1"
              height="216"
            />

            <AdPlaceholder
              class="mb-1"
              height="148"
            />

            <AdPlaceholder
              class="mb-1"
              height="207"
            />

            <AdPlaceholder
              class="mb-1"
              height="216"
            />

            <AdPlaceholder height="148" />
          </div>
        </main>
      </section>

      <BasicContainer>
        <section v-if="!isSingleColumn">
          <SeoContent
            class="mb-2"
            heading="Top RV makes for sale"
          >
            <li
              :key="topMake"
              class="flex column gap-1/4 w-1/4 font-14"
              v-for="topMake in topMakes"
            >
              <span>{{ topMake }}</span>
              <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
            </li>
          </SeoContent>

          <SeoContent
            class="mb-2"
            heading="States with RVs for sale"
          >
            <li
              :key="topState"
              class="flex column gap-1/4 w-1/4 font-14"
              v-for="topState in topStates"
            >
              <span>{{ topState }}</span>
              <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
            </li>
          </SeoContent>

          <SeoContent
            class="mb-2"
            heading="Top cities with RVs for sale"
          >
            <li
              :key="topCity"
              class="flex column gap-1/4 w-1/4 font-14"
              v-for="topCity in topCities"
            >
              <span>{{ topCity }}</span>
              <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
            </li>
          </SeoContent>

          <SeoContent
            class="mb-2"
            heading="RV sleeping capacity"
          >
            <li
              :key="sleepingCapacity"
              class="flex column gap-1/4 w-1/4 font-14"
              v-for="sleepingCapacity in sleepingCapacities"
            >
              <span>{{ sleepingCapacity }}</span>
              <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
            </li>
          </SeoContent>

          <SeoContent heading="RV types">
            <li
              :key="rvType"
              class="flex column gap-1/4 w-full w-1/4 font-14"
              v-for="rvType in rvTypes"
            >
              <span>{{ rvType }}</span>
              <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
            </li>
          </SeoContent>
        </section>

        <SubscribeToNewsletter />
      </BasicContainer>
    </div>
  </div>
</template>

<style scoped>
  .full-width-ad {
    height: 150px;
  }

  .search-results-aside {
    width: 350px;
  }

  .search-results-filter-count {
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  .search-results-main {
    min-width: calc(100% - 350px - 4rem);
  }
</style>

<style>
  .pagination-label {
    width: 1rem;
    height: 1rem;
  }
</style>
