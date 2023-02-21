import { useAppDispatch } from 'redux/hooks';
import { SET_SHOW_VISIT_MODAL_FLAG } from '@/redux/slices/showMenu';

const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  // localStorage에 저장
  const setItemWithExpireTime = (keyName: string, keyValue: string, tts: number) => {
    const obj = {
      value: keyValue,
      expire: Date.now() + tts,
    };
    const objString = JSON.stringify(obj);
    window.localStorage.setItem(keyName, objString);
  };

  // localStorage 읽고 24시간 지났는지 체크
  const getItemWithExpireTime = (keyName: string) => {
    const objString = window.localStorage.getItem(keyName);
    if (!objString) return dispatch(SET_SHOW_VISIT_MODAL_FLAG(true));
    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
      window.localStorage.removeItem(keyName);
      return dispatch(SET_SHOW_VISIT_MODAL_FLAG(true));
    }
    return dispatch(SET_SHOW_VISIT_MODAL_FLAG(false));
  };

  return { setItemWithExpireTime, getItemWithExpireTime };
};
export default useLocalStorage;
