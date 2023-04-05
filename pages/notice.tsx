import React, { useEffect, useState } from 'react';
import s from './notice.module.scss';

import { getNotice } from '@/api/faq';

const Notice = () => {
  // 현재 페이지
  const [listPage, setListPage] = useState<number>(1);
  // 총 페이지 개수
  const [noticeLength, setNoticeLength] = useState<number>(1);
  // 공지사항 리스트
  const [noticeList, setNoticeList] = useState([]);

  const handlePageChange = (pageNum: number) => {
    setListPage(pageNum);
  };

  const handleSetNoticeList = () => {
    getNotice(listPage)
      .then(res => {
        const NOTICE = res.data.notice.notice;
        setNoticeList(NOTICE);
        const NOTICE_LENGTH = NOTICE.length;
        console.log(NOTICE);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    handleSetNoticeList();
  }, [listPage]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>공지사항</h2>
      <ul className={s.listContainer}>
        {/* 공지사항 등록되면 코드 변경할 것 */}
        {/* {noticeList.map((notice, index) => {
          return <div key={index}></div>;
        })} */}
        <li className={s.list}>
          <h3>탭플레이스 새로운 공지사항 안내입니다.</h3>
          <time dateTime='2023.00.00'>2023.00.00</time>
        </li>
      </ul>

      <ul className={s.pageNationWrapper}>
        <div>&lt;</div>
        <li>
          <button className={s.active}>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>4</button>
        </li>
        <li>
          <button>5</button>
        </li>
        <div>&gt;</div>
      </ul>
    </div>
  );
};

export default Notice;
