import s from './MemberInfo.module.scss';

import { useAppSelector } from '@/redux/hooks';
import SnsContainer from '../SnsContainer/SnsContainer';
import HoverEvent from '@/utils/hoverEvent';
import DesktopMemberInfo from './DesktopVer/MemberInfo_Desktop';

export interface MemberInfoI {
  name: string;
  imgSrc: string;
  position: string;
}

const MemberInfo = ({ name, imgSrc, position }: MemberInfoI) => {
  const { viewType } = useAppSelector(state => state.viewType);
  const { memberRef, onMouseOver } = HoverEvent();

  return (
    <>
      {viewType === 'DESKTOP' ? (
        <DesktopMemberInfo name={name} imgSrc={imgSrc} position={position} />
      ) : (
        <li className={s.container}>
          <img className={s.memberImage} src={imgSrc} alt='memberImg' onMouseOver={onMouseOver} ref={memberRef} />
          <div className={s.infoContainer}>
            <h1 className={s.line_0}>{name}</h1>
            <p className={s.line_1}>{position}</p>
            <p className={s.line_2}>{position + ' ' + name}입니다</p>
            <SnsContainer />
          </div>
        </li>
      )}
    </>
  );
};

export default MemberInfo;
