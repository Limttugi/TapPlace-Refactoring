import { StaticImageData } from 'next/image';

import Web_FE_Image from '@/img/Memoji/web_front.webp';
import BE_Image from '@/img/Memoji/web_back.webp';
import IOS_Image_1 from '@/img/Memoji/ios1.webp';
import IOS_Image_2 from '@/img/Memoji/ios2.webp';
import Android_Image_1 from '@/img/Memoji/android1.webp';
import Android_Image_2 from '@/img/Memoji/android2.webp';
import UIUX_Image from '@/img/Memoji/uiux.webp';
import { MemberList_I } from '@/types/member';

const MEMBER_LIST: Array<MemberList_I> = [
  { memberName: '박상현', memberPosition: 'IOS', imgSrc: IOS_Image_1 },
  { memberName: '이상준', memberPosition: 'IOS', imgSrc: IOS_Image_2 },
  { memberName: '임준혁', memberPosition: 'Web FrontEnd', imgSrc: Web_FE_Image },
  { memberName: '김지훈', memberPosition: 'BackEnd', imgSrc: BE_Image },
  { memberName: '고은혜', memberPosition: 'UIUX', imgSrc: UIUX_Image },
  { memberName: '지경희', memberPosition: 'Android', imgSrc: Android_Image_1 },
  { memberName: '김진욱', memberPosition: 'Android', imgSrc: Android_Image_2 },
];

export default MEMBER_LIST;
