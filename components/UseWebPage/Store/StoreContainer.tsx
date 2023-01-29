import s from './StoreContainer.module.scss';

import StoreList from './StoreList/StoreList';
import { useAppSelector } from '@/redux/hooks';

const StoreContainer = () => {
  const { LOADING_MY_LOCATION } = useAppSelector(state => state.location);
  const { stores } = useAppSelector(state => state.store);

  console.log(stores[0]);

  return (
    <ul className={s.container}>
      {!LOADING_MY_LOCATION && stores.map((store, index) => <StoreList key={index} store={store} />)}
    </ul>
  );
};

export default StoreContainer;
