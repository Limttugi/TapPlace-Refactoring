import { instance } from '.';

export const getNotice = async (pageNum: number) => {
  return await instance.get(`/notice/qna/all/${pageNum}`);
};
