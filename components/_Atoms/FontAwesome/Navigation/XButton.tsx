import s from './index.module.scss';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface XButton_I {
  onClickEvent?: () => void;
}

const XButton = ({ onClickEvent }: XButton_I) => {
  return <FontAwesomeIcon className={s.button} icon={faXmark} onClick={onClickEvent} />;
};

export default XButton;
