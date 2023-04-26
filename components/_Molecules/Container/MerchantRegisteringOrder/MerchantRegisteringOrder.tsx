import s from './MerchantRegisteringOrder.module.scss';

const MerchantRegisteringOrderContainer = () => {
  return (
    <div className={s.container}>
      <ol className={s.orderNumber}>
        <li className={s.number}>1</li>
        <li className={s.number}>2</li>
        <li className={s.number}>3</li>
      </ol>
      <ol className={s.orderText}>
        <li className={s.text}>가맹점 검색</li>
        <li className={s.text}>결제수단 피드백</li>
        <li className={s.text}>등록완료</li>
      </ol>
    </div>
  );
};

export default MerchantRegisteringOrderContainer;
