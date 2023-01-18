import s from './index.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { useRef, useState } from 'react';
import SnsContainer from '../SnsContainer';

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
          <SnsContainer />
        </div>
      ) : (
        <>
          <h1 className={s.line_0}>{name}</h1>
          <p className={s.line_1}>{position}</p>
          {hoverFlag && (
            <div className={s.hover} onMouseOut={onMouseOut}>
              <p className={s.line_2}>{position + ' ' + name}입니다</p>
              <SnsContainer />
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default MemberInfo;
