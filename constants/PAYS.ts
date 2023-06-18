export const PAYS: Array<string> = [
  'kakaopay',
  'naverpay',
  'payco',
  'zeropay',
  'apple_visa',
  'apple_master',
  'apple_jcb',
  'conless_visa',
  'conless_master',
  'conless_amex',
  'conless_union',
  'conless_jcb',
  'google_visa',
  'google_master',
  'google_maestro',
  'toss',
];

export const PAYS_KOR: Array<string> = ['카카오페이', '네이버페이', '제로페이', '페이코'];
export const PAYS_APPLE: Array<string> = ['VISA', 'MASTER CARD', 'JCB', 'AMEX'];
export const PAYS_GOOGLE: Array<string> = ['VISA', 'MASTER CARD', 'MAESTOR', 'AMEX'];
export const PAYS_CONTACTLESS: Array<string> = ['VISA', 'MASTER CARD', 'Union Pay', 'JCB', 'AMEX'];

interface FEEDBACK_PAYMENT_NAME_I {
  [key: string]: string;
}

export const FEEDBACK_PAY_NAME: FEEDBACK_PAYMENT_NAME_I = {
  kakaopay: '카카오페이',
  naverpay: '네이버페이',
  payco: '페이코',
  zeropay: '제로페이',
  apple_visa: '애플페이 - VISA',
  apple_master: '애플페이 - MASTER',
  apple_jcb: '애플페이 - JCB',
  apple_amex: '애플페이 - AMEX',
  google_visa: '구글페이 - VISA',
  google_master: '구글페이 - MASTER',
  google_maestro: '구글페이 - MAESTRO',
  google_amex: '구글페이 - AMEX',
  conless_visa: '컨택리스 - VISA',
  conless_master: '컨택리스 - MASTER',
  conless_union: '컨택리스 - UNION',
  conless_jcb: '컨택리스 - JCB',
  conless_amex: '컨택리스 - AMEX',
};
