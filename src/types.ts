export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  category: 'notary' | 'consultation' | 'litigation' | 'corporate';
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  detailsAr: string[];
  detailsEn: string[];
  durationAr: string;
  durationEn: string;
  isImmediate?: boolean;
}

export interface ReviewItem {
  id: string;
  authorAr: string;
  authorEn: string;
  rating: number;
  dateAr: string;
  dateEn: string;
  commentAr: string;
  commentEn: string;
  verified: boolean;
}

export interface FunnelState {
  track: 'notary' | 'consultation' | 'litigation' | 'corporate';
  clientType: 'individual' | 'company';
  deliveryMode: 'office' | 'remote';
  fullName: string;
  phone: string;
  summary: string;
}
