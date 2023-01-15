import s from '@/styles/components/MemberSlide/MemberInfo.module.scss';

import { useAppSelector } from '@/redux/hooks';
import SNS from './SNS';
import { useRef, useState } from 'react';

interface MemberInfoI {
  name: string;
  imgSrc: string;
  position: string;
}

const MemberInfo = ({ name, imgSrc, position }: MemberInfoI) => {
  const { viewType } = useAppSelector(state => state.common);
  const [hoverFlag, setHoverFlag] = useState(false);
  const memberRef = useRef(null);

  const onMouseOver = () => {
    setHoverFlag(true);
  };

  const onMouseOut = () => {
    setHoverFlag(false);
  };

  return (
    <li className={s.container}>
      <img className={s.memberImage} src={imgSrc} alt='memberImg' onMouseOver={onMouseOver} ref={memberRef} />
      {viewType !== 'DESKTOP' ? (
        <div className={s.infoContainer}>
          <h1 className={s.line_0}>{name}</h1>
          <p className={s.line_1}>{position}</p>
          <p className={s.line_2}>{position + ' ' + name}입니다</p>
          <SNS />
        </div>
      ) : (
        <>
          <h1 className={s.line_0}>{name}</h1>
          <p className={s.line_1}>{position}</p>
          {hoverFlag && (
            <div className={s.hover} onMouseOut={onMouseOut}>
              <p className={s.line_2}>{position + ' ' + name}입니다</p>
              <SNS />
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default MemberInfo;
