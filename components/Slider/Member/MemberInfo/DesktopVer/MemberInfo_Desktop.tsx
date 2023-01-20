import s from './MemberInfo_Desktop.module.scss';

import { MemberInfoI } from '../MemberInfo';
import HoverEvent from '@/utils/hoverEvent';
import SnsContainer from '../../SnsContainer/SnsContainer';

const MemberInfo_Desktop = ({ name, imgSrc, position }: MemberInfoI) => {
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

export default MemberInfo_Desktop;
