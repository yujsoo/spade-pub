// 자동 하이픈 포맷

// 사업자등록번호
export const formatBrn = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 10);

  if (raw.length >= 6) {
    return `${raw.slice(0, 3)}-${raw.slice(3, 5)}-${raw.slice(5)}`;
  } else if (raw.length >= 4) {
    return `${raw.slice(0, 3)}-${raw.slice(3)}`;
  }
  return raw;
};

// 주민등록번호
export const formatResidentNumber = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 13);

  if (raw.length >= 7) {
    return `${raw.slice(0, 6)}-${raw.slice(6)}`;
  }
  return raw;
};

// 연락처, 팩스번호
export const formatPhoneNumber = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 11);

  if (raw.startsWith('02')) {
    if (raw.length <= 5) return raw;
    if (raw.length <= 9)
      return `${raw.slice(0, 2)}-${raw.slice(2, 5)}-${raw.slice(5)}`;
    return `${raw.slice(0, 2)}-${raw.slice(2, 6)}-${raw.slice(6, 10)}`;
  } else if (raw.length <= 10) {
    if (raw.length <= 6) return raw;
    return `${raw.slice(0, 3)}-${raw.slice(3, 6)}-${raw.slice(6)}`;
  } else {
    return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
  }
};

// 금액
export const formatCurrency = (value: string | number): string => {
  const raw =
    typeof value === 'string' ? value.replace(/\D/g, '') : String(value);
  return Number(raw).toLocaleString('ko-KR');
};
