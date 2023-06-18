export interface MerchantInfo_I {
  x: string;
  y: string;
  store_id: string;
  place_name: string;
  category_group_name: string;
  phone: string;
  address_name: string;
  road_address_name: string;
  pays: Array<string>;
  distance: number;
  num: number;
}

export interface MerchantMarker_I {
  store_id: string;
  x: number;
  y: number;
}

export interface FeedbackInfo_I {
  exist: boolean;
  fail: number;
  success: number;
  last_state: string;
  last_time: string;
  num: number;
  pay: string;
  store_id: string;
}
