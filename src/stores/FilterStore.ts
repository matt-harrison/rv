import { defineStore } from 'pinia';

type Filter = {
  callback: () => void;
  label: string;
  type: string;
};

type State = {
  filters: Filter[];
  isBrowseByType: boolean;
  isFilterByFloorplans: boolean;
  makes: string[];
  pageCurrent: number;
  pagesTotal: number;
  types: string[];
};

export const useFilterStore = defineStore('filterStore', {
  actions: {
    setFilters() {
      const filters: Filter[] = [];

      this.makes.forEach((make) => {
        filters.push({
          callback: () => {
            this.toggleMake(make);
          },
          label: make,
          type: 'make',
        });
      });

      this.types.forEach((type) => {
        filters.push({
          callback: () => {
            this.toggleType(type);
          },
          label: type,
          type: 'type',
        });
      });

      this.filters = filters;
    },
    setIsBrowseByType(isBrowseByType: boolean) {
      this.isBrowseByType = isBrowseByType;
    },
    setPageCurrent(pageCurrent: number) {
      this.pageCurrent = pageCurrent;
    },
    setPageNext() {
      if (this.pageCurrent < this.pagesTotal) {
        this.pageCurrent += 1;
      }
    },
    setPagePrevious() {
      if (this.pageCurrent > 1) {
        this.pageCurrent -= 1;
      }
    },
    setPagesTotal(pagesTotal: number) {
      this.pagesTotal = pagesTotal;
    },
    toggleIsFilterByFloorplans() {
      this.isFilterByFloorplans = !this.isFilterByFloorplans;
    },
    toggleMake(make: string) {
      if (this.makes.includes(make)) {
        this.makes = this.makes.filter((makeNext) => makeNext !== make);
      } else {
        this.makes.push(make);
      }

      this.setFilters();
    },
    toggleType(type: string) {
      if (this.types.includes(type)) {
        this.types = this.types.filter((typeNext) => typeNext !== type);
      } else {
        this.types.push(type);
      }

      this.setFilters();
    },
  },
  state: (): State => ({
    filters: [],
    isBrowseByType: true,
    isFilterByFloorplans: false,
    makes: [],
    pageCurrent: 1,
    pagesTotal: 0,
    types: [],
  }),
});
