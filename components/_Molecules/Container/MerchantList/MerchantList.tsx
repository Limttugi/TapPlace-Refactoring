import MerchantList from '@/components/_Atoms/List/Merchant/Merchant';
import s from './MerchantList.module.scss';

const MerchantListContainer = () => {
  return (
    <ul className={s.container}>
      <MerchantList />
      <MerchantList />
      <MerchantList />
      <MerchantList />
      <MerchantList />
      <MerchantList />
    </ul>
  );
};

export default MerchantListContainer;
