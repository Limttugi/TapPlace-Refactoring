import s from './StoreContainer.module.scss';

import StoreList from './StoreList/StoreList';

const StoreContainer = () => {
  return (
    <ul className={s.container}>
      <StoreList />
      <StoreList />
      <StoreList />
      <StoreList />
      <StoreList />
      <StoreList />
      <StoreList />
      <StoreList />
    </ul>
  );
};

export default StoreContainer;
