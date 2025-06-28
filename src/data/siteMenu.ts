import type { SiteMenu } from '@/types/siteMenu';

export const siteMenuTree: SiteMenu[] = [
  {
    id: 1,
    title: '전표입력',
    level: 1,
    parentId: null,
    children: [
      { id: 11, title: '일반전표입력', level: 2, parentId: 1 },
      {
        id: 12,
        title: '매입매출전표입력',
        level: 2,
        parentId: 1,
        disabled: true,
      },
      {
        id: 13,
        title: '시산표입력',
        level: 2,
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    title: '기초정보등록',
    level: 1,
    parentId: null,
    children: [
      { id: 21, title: '회사등록', level: 2, parentId: 2 },
      { id: 22, title: '거래처등록', level: 2, parentId: 2 },
      { id: 23, title: '계정과목 및 적요등록', level: 2, parentId: 2 },
    ],
  },
  {
    id: 3,
    title: '장부관리',
    level: 1,
    parentId: null,
    children: [
      { id: 31, title: '거래처원장', level: 2, parentId: 3 },
      { id: 32, title: '계정별원장', level: 2, parentId: 3 },
      { id: 33, title: '현금출납장', level: 2, parentId: 3 },
    ],
  },
  {
    id: 4,
    title: '전기분재무제표등',
    level: 1,
    parentId: null,
    children: [
      { id: 41, title: '전기분재무상태표', level: 2, parentId: 4 },
      { id: 42, title: '전기분손익계산서', level: 2, parentId: 4 },
      { id: 43, title: '전기분원가명세서', level: 2, parentId: 4 },
    ],
  },
];
