import s from './index.module.scss';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Hamburger_Button_I {
  onClickEvent?: () => void;
}

const Hamburger_Button = ({ onClickEvent }: Hamburger_Button_I) => {
  return <FontAwesomeIcon className={s.button} icon={faBars} onClick={onClickEvent} />;
};

export default Hamburger_Button;
