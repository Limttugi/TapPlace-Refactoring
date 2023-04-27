import Image from 'next/image';

import s from './Member.module.scss';

import { MemberList_I } from '@/types/member';

type MemberImage_T = Pick<MemberList_I, 'imgSrc' | 'memberName'>;

const MemberImage = ({ imgSrc, memberName }: MemberImage_T) => {
  return <Image src={imgSrc} alt={`${memberName} Image`} className={s.memberImage} />;
};

export default MemberImage;
