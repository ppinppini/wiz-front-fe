// number데이터 천단위마다 콤마를 붙이는 함수
export const numberWithCommas = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
