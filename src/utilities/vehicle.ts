import type { VehicleDetail } from '@/types/VehicleDetail';
import type { RvDetail } from '@/types/RvDetail';
import type { BreadCrumb } from '@/types/BreadCrumb';
import { formatPhone } from './format';
import dummyVehicleData from '@/data/dummy-vehicle-detail.json';

// hacky mapping of vehicle details into a VehicleDetail object.
// TODO: do a proper API call or something once we're able to dedicate time to it.
// we'll also want to add this to pinia
export const getVehicleDetail = () => {
  // eslint-disable-next-line no-constant-condition
  if (true) return dummyVehicleData as VehicleDetail;
  // eslint-enable no-constant-condition
  const adData = (window as any).adData || null;

  const mappedVehicle: VehicleDetail = {
    adUrl: adData.adUrl,
    breadcrumbs: adData.breadcrumbs ?? [],
    categoryName: adData.categoryName,
    className: adData.className,
    condition: adData.condition,
    customerId: adData.customerId,
    dealerId: adData.dealerId,
    dealerLink: adData.dealerLink,
    dealerLogo: adData.dealerLogo,
    dealerMapUrl: adData.dealerMapUrl,
    dealerName: adData.dealerName,
    dealerRepeatTag: adData?.emailForm?.data?.dealerRepeatTag,
    description: adData.description,
    details: adData.details,
    emailSellerUrl: adData.emailSellerUrl,
    factorySpecs: adData.factorySpecs,
    features: adData.features,
    formattedPhone: adData.formattedPhone,
    id: adData.id,
    isChatAvailable: adData.isChatAvailable,
    isDealerWebsiteAvailable: adData.isDealerWebsiteAvailable,
    isSmsAvailable: adData.isSmsAvailable,
    localDelivery: adData.localDelivery,
    location: adData.location,
    locationDistance: adData.locationDistance,
    makeAnOfferPrice: adData.makeAnOfferPrice,
    makeDisplayName: adData.makeDisplayName,
    miles: adData.miles,
    modelDisplayName: adData.modelDisplayName,
    phone: adData.phone,
    photos: adData.photos,
    price: adData.price,
    realmId: adData.realmId,
    realmName: adData.realmName,
    realmUrl: adData.realmUrl,
    state: adData.state,
    trimName: adData.trimName,
    vrUrl:
      'https://kuula.co/share/collection/7k6dZ?logo=1&amp;info=0&amp;logosize=200&amp;fs=1&amp;vr=1&amp;zoom=1&amp;initload=1&amp;thumbs=1&amp;iosfs=1',
    year: adData.year,
    zip: adData.zip,
  } as VehicleDetail;

  return mappedVehicle;
};

export const getVehicleTitle = (vehicle: VehicleDetail) => {
  return `${vehicle.year} ${vehicle.makeDisplayName} ${vehicle.modelDisplayName}`;
};

export const getSellerNameLocation = (vehicle: VehicleDetail) => {
  return [vehicle.dealerName, vehicle.location].join(' • ');
};

export const getVehiclePrice = (vehicle: VehicleDetail) => {
  return vehicle.price;
};

export const getVehiclePhone = (vehicle: VehicleDetail) => {
  return formatPhone(Number(vehicle.phone));
};

export const getVehicleThumbnail = (vehicle: VehicleDetail) => {
  return vehicle.photos[0].url;
};

export const getVehiclePhoneHref = (vehicle: VehicleDetail) => {
  return `tel:${formatPhone(Number(vehicle.phone))}`;
};

export const getDetailItems = (vehicle: VehicleDetail): RvDetail[] => {
  return Object.keys(vehicle.details).map((key) => {
    return {
      label: key,
      value: vehicle.details[key],
    };
  });
};

export const getSearchPills = (vehicle: VehicleDetail) => {
  return vehicle.breadcrumbs.map((breadcrumb) => {
    return {
      label: breadcrumb.text,
      url: breadcrumb.link,
    };
  });
};

export const getBreadcrumbs = (): BreadCrumb[] => {
  return [
    {
      label: 'Home',
      url: '#',
    },
    {
      label: 'Browse RVs',
      url: '#',
    },
    {
      label: 'Search results',
      url: '#',
    },
    {
      label: '2019 Airstream Flying Cloud 25R',
    },
  ];
};
