import axios from 'axios';
import { defineStore } from 'pinia';

import type { Raw } from '@/types/Raw';
import type { Vehicle } from '@/types/Vehicle';

import { mapResult } from '@/utilities/map';

type State = {
  vehicle: Vehicle | undefined;
};

const adData = (window as any).adData || null;

export const useVehicleDetailStore = defineStore('vehicleDetailStore', {
  actions: {
    getVehicle() {
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
          const vehicle: Vehicle = mapResult(vehiclesRaw[0]);

          this.setVehicle(vehicle);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    setVehicle(vehicle: Vehicle) {
      this.vehicle = vehicle;
    },
  },
  state: (): State => ({
    vehicle: undefined,
  }),
});
