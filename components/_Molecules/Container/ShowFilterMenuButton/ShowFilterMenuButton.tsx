import { useRecoilValue } from 'recoil';

import s from './ShowFilterMenuButton.module.scss';

import ShowFilterMenuButton from '@/components/_Atoms/Button/ShowFilterMenu/ShowFilterMenu';
import { categoryFilterAtom, paymentFilterAtom } from '@/recoil/atoms/filter';

const ShowFilterMenuButtonContainer = () => {
  const categoryFilterState = useRecoilValue(categoryFilterAtom);
  const paymentFilterState = useRecoilValue(paymentFilterAtom);
  return (
    <div className={s.container}>
      <ShowFilterMenuButton
        text='매장선택'
        active={categoryFilterState.clickedCategoryFilter}
        numberOfFilter={categoryFilterState.categoryFilter.length}
      />
      <ShowFilterMenuButton
        text='결제수단'
        active={paymentFilterState.clickedPaymentFilter}
        numberOfFilter={paymentFilterState.paymentFilter.length}
      />
    </div>
  );
};

export default ShowFilterMenuButtonContainer;
