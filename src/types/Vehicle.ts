export type Vehicle = {
  adAttribs: {
    itemUrl: string;
    makeAnOffer: string;
    priceDisclaimer: string;
    requestAPrice: string;
    videoBorchueNarationStyle: string;
  };
  adDetailUrl: string;
  adFeatures: {
    buyNow: boolean;
    featuredHomepage: boolean;
    featuredSearch: boolean;
    hideFloorPlans: boolean;
    oneYearPackage: boolean;
    paaVideo: boolean;
    premium: boolean;
    topPremium: boolean;
  };
  adId: number;
  adListingPosition: number;
  categoryName: string[];
  city: string;
  cityStateFacet: string;
  classId: string;
  className: string;
  companyName: string;
  condition: string;
  createDate: string;
  createDateFormatted: string;
  customerId: string;
  dealerFeatures: {
    deactivateContactDealer: boolean;
    hasAccessIndustryAero: boolean;
    hasAccessIndustryBoatline: boolean;
    hasAccessIndustryCycle: boolean;
    hasAccessIndustryEquipment: boolean;
    hasAccessIndustryNextruck: boolean;
    hasAccessIndustryRV: boolean;
    hasAccessIndustryRentalsCycle: boolean;
    hasAccessIndustryRentalsRv: boolean;
    hasAccessIndustryRockAndDirt: boolean;
    hasAccessIndustryTradeAPlane: boolean;
    hasAccessIndustryTradeEquip: boolean;
    hasAccessIndustryTrailer: boolean;
    hasAccessIndustryTruck: boolean;
    hasAdLocationLockdown: boolean;
    hasAdPearance: boolean;
    hasAutoSelectUnusedBundle: boolean;
    hasClickToCall: boolean;
    hasClickToWeb: boolean;
    hasContactAtOnce: boolean;
    hasContactAtOnceTexting: boolean;
    hasCoreLite: boolean;
    hasDealDesignation: boolean;
    hasDealerCoreLeadManager: boolean;
    hasDigitalRetailingBuyNow: boolean;
    hasDigitalRetailingEnhancedLead: boolean;
    hasFacebookRetargeting: boolean;
    hasGreenFlag: boolean;
    hasHideDealerWebsiteLink: boolean;
    hasHideFactorySpecs: boolean;
    hasHideFinance: boolean;
    hasHideInspection: boolean;
    hasHideLoanCalculator: boolean;
    hasHideShipping: boolean;
    hasHideStandardFeatures: boolean;
    hasHideTaglines: boolean;
    hasInternetAdvertising: boolean;
    hasMakeAnOffer: boolean;
    hasMakeAnOfferPrice: boolean;
    hasMapIt: boolean;
    hasOctaneFinance: boolean;
    hasOptOutDealerGroupLeaderboard: boolean;
    hasOptOutDealerGroupRollup: boolean;
    hasOptOutDealerGroupSharedLogin: boolean;
    hasOptOutDealerGroupWebsite: boolean;
    hasRemoveLoanCalcDealerFinancing: boolean;
    hasRemoveVinFromDisplay: boolean;
    hasRental: boolean;
    hasRequestBestPrice: boolean;
    hasRequestPrice: boolean;
    hasRequestQuotePreorder: boolean;
    hasRequestQuoteWeBuy: boolean;
    hasRequestTradeIn: boolean;
    hasShiftDigital: boolean;
    hasShowListingAddress: boolean;
    hasShutOffAdvertising: boolean;
    hasShutOffDigitRetailVDP: boolean;
    hasSuggestedTrucks: boolean;
    hasTalkingBrochure: boolean;
    hasTiChat: boolean;
    hasTiChatGuestDisabled: boolean;
    hasTiChatManaged: boolean;
    hasTradeIn: boolean;
    hasTradeInFeature: boolean;
    hasTradertraxxCombinedExperience: boolean;
    hasVideo: boolean;
    hasVideoChatRequest: boolean;
    hasVr: boolean;
    isHibernate: boolean;
    removeRequestPhotoVideo: boolean;
  };
  dealerGroupDealerCount: string;
  dealerGroupId: string;
  dealerGroupName: string;
  dealerId: string;
  dealerPhone: string[];
  dealerWebsiteUrl: string;
  description: string;
  isBuynow: string;
  isFeatured: string;
  isPremium: string;
  isToppremium: string;
  latitude: string;
  longitude: string;
  makeFacet: string[];
  makeId: string[];
  makeName: string[];
  meta: {
    engine: string;
    id: string;
    score: number;
  };
  mfrSerialNum: null;
  modelFacet: string[];
  modelName: string[];
  msrp: null;
  phone: string;
  photoCount: number;
  photoIds: string[];
  price: number;
  rebate: null;
  schemeCode: string;
  sellerType: string;
  stateCode: string;
  trimName: string[];
  websiteUrl: null;
  year: number;
};
