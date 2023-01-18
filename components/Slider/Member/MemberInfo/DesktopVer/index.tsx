import s from './index.module.scss';

import { MemberInfoI } from '..';
import HoverEvent from '@/utils/hoverEvent';
import SnsContainer from '../../SnsContainer';

const DesktopMemberInfo = ({ name, imgSrc, position }: MemberInfoI) => {
  const { memberRef, hoverFlag, onMouseOver, onMouseOut } = HoverEvent();

  return (
    <li className={s.container}>
      <img className={s.memberImage} src={imgSrc} alt='memberImg' onMouseOver={onMouseOver} ref={memberRef} />
      <h1 className={s.line_0}>{name}</h1>
      <p className={s.line_1}>{position}</p>
      {hoverFlag && (
        <div className={s.hover} onMouseOut={onMouseOut}>
          <p className={s.line_2}>{position + ' ' + name}입니다</p>
          <SnsContainer />
        </div>
      )}
    </li>
  );
};

export default DesktopMemberInfo;
