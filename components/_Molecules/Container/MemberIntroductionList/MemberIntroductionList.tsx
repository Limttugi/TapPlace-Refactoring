import s from './MemberIntroductionList.module.scss';

import MemberIntroductionList from '@/components/_Atoms/List/MemberIntroduction/MemberIntroduction';
import MemberList from '@/constants/Member';

const MemberIntroductionListContainer = () => {
  return (
    <ul className={s.container}>
      {MemberList.map(member => {
        const { memberName, memberPosition, imgSrc } = member;
        return (
          <MemberIntroductionList
            key={memberName}
            memberName={memberName}
            memberPosition={memberPosition}
            imgSrc={imgSrc}
          />
        );
      })}
    </ul>
  );
};

export default MemberIntroductionListContainer;
