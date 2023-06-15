import { showAppDownloadModalAtom } from '@/recoil/atoms/localstorage';
import { useSetRecoilState } from 'recoil';

const useLocalStorage = () => {
  const setShowAppDownloadModal = useSetRecoilState(showAppDownloadModalAtom);
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
    if (!objString) return setShowAppDownloadModal(true);

    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
      window.localStorage.removeItem(keyName);
      return setShowAppDownloadModal(true);
    }
    return setShowAppDownloadModal(false);
  };

  return { setItemWithExpireTime, getItemWithExpireTime };
};
export default useLocalStorage;
