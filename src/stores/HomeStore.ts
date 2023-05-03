import axios from 'axios';
import { defineStore } from 'pinia';

import type { VehicleRaw } from '@/types/Vehicle';

type State = {
  featuredListings: VehicleRaw[];
  recommendedVehicles: VehicleRaw[];
};

const adData = (window as any).adData || null;

export const useHomeStore = defineStore('homeStore', {
  actions: {
    getVehicles() {
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
          const vehiclesRaw: VehicleRaw[] = response.data.results;

          this.setVehicles(vehiclesRaw);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    setVehicles(vehicles: VehicleRaw[]) {
      this.featuredListings = vehicles;
      this.recommendedVehicles = vehicles;
    },
  },
  state: (): State => ({
    featuredListings: [],
    recommendedVehicles: [],
  }),
});
