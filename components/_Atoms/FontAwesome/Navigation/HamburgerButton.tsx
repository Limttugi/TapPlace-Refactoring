import s from './index.module.scss';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HamburgerButton_I {
  onClickEvent?: () => void;
}

const HamburgerButton = ({ onClickEvent }: HamburgerButton_I) => {
  return <FontAwesomeIcon className={s.button} icon={faBars} onClick={onClickEvent} />;
};

export default HamburgerButton;
