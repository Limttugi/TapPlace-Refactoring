import { StaticImageData } from 'next/image';

export type imgSrc = StaticImageData;

export interface MemberList_I {
  memberName: '박상현' | '이상준' | '지경희' | '김진욱' | '김지훈' | '임준혁' | '고은혜';
  memberPosition: 'Web FrontEnd' | 'BackEnd' | 'Android' | 'IOS' | 'UIUX';
  imgSrc: imgSrc;
}
