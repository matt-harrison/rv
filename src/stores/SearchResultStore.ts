// import axios from 'axios';
import { defineStore } from 'pinia';

import type { Vehicle } from '@/types/Vehicle';

// Dummy API response to circumvent local/prod cross origin violation.
import { dummyVehicles } from '@/data/dummy-vehicles';

type State = {
  vehicles: Vehicle[];
};

// const adData = (window as any).adData || null;

export const useSearchResultStore = defineStore('searchResultStore', {
  actions: {
    getVehicles() {
      this.setVehicles(dummyVehicles);

      /*
      const adDataRaw = document.querySelector('[data-vue-selector="ad-data"]')?.innerHTML;
      const adData = adDataRaw ? JSON.parse(adDataRaw) : {};

      const params = {
        ad_id: adData.id || '',
        dealer_group_id: '',
        dealer_id: adData.dealerId || '',
        make: adData.details.Make || '',
        make_id: '',
        model: adData.details.Model || '',
      };

      const query = new URLSearchParams(params);
      const querystring = query.toString();

      axios
        .get(`/search-results-data/vdp-featured?${querystring}`)
        .then((response) => {
          const vehiclesRaw: Raw[] = response.data.results;
          const vehicles: Vehicle[] = mapResults(vehiclesRaw);

          this.setVehicles(vehicles);
        })
        .catch((error) => {
          console.error(error);
        });
      */
    },
    setVehicles(vehicles: Vehicle[]) {
      this.vehicles = vehicles;
    },
  },
  state: (): State => ({
    vehicles: [],
  }),
});
