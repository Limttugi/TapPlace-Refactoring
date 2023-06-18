import s from './MemberIntroduction.module.scss';

import MemberImage from '../../Image/Member/Member';
import { MemberList_I } from '@/types/member';

const MemberIntroductionList = ({ memberName, memberPosition, imgSrc }: MemberList_I) => {
  return (
    <li className={s.memberContainer}>
      <MemberImage imgSrc={imgSrc} memberName={memberName} />
      <h3 className={s.memberName}>{memberName}</h3>
      <div className={s.memberPosition}>{memberPosition}</div>
    </li>
  );
};

export default MemberIntroductionList;
