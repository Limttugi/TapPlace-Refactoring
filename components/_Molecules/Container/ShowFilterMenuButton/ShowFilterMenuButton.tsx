import s from './ShowFilterMenuButton.module.scss';

import ShowFilterMenuButton from '@/components/_Atoms/Button/ShowFilterMenu/ShowFilterMenu';

const ShowFilterMenuButtonContainer = () => {
  return (
    <div className={s.container}>
      <ShowFilterMenuButton text='매장선택' />
      <ShowFilterMenuButton text='결제수단' />
    </div>
  );
};

export default ShowFilterMenuButtonContainer;
