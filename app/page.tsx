import React from 'react';
import useSWR from 'swr';
import Header from '@/app/Header/page';
// import Footer from './footer';

// fetcher 함수 정의
const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

// Layout 컴포넌트
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <>
      <main>
        {/* 메뉴가 선택되지 않았을 때 */}
        인기 많은 여행지
        {/* 메뉴가 선택되어 plan 또는 history/page.tsx 로 넘어갔을때 */}
        {children}
        </main>
    </>
  );
};

export default Layout;
