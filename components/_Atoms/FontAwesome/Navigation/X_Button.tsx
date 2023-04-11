import s from './index.module.scss';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface X_Button_I {
  onClickEvent?: () => void;
}

const X_Button = ({ onClickEvent }: X_Button_I) => {
  return <FontAwesomeIcon className={s.button} icon={faXmark} onClick={onClickEvent} />;
};

export default X_Button;
