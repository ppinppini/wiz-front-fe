/** 경기 데이터 타입 */
export type TGameInfo = {
  displayDate: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeDecision?: string;
  homeDecisionPitcher?: string;
  homeFullname: string;
  homeKey: string;
  homeLogo: string;
  homeScore?: number;
  homeStarter?: string;
  matchTeamCode: string;
  matchTeamName: string;
  outcome?: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitDecision?: string;
  visitDecisionPitcher?: string;
  visitFullname: string;
  visitKey: string;
  visitLogo: string;
  visitScore?: number;
  visitStarter?: string;
};
export type TMainHighlightVideo = {
  artcTitle: string;
  imgFilePath: string;
  videoLink: string;
  viewCnt: number;
};
//KT Wiz란? 페이지의 구단 연혁 카드를 보여주는 컴포넌트의 타입
export type THistoryDataType = {
  id: number;
  title: string;
  text: string;
};
// 메인페이지의 하이라이트 비디오리스트 컴포넌트의 타입들
export type TMainHighlightsVideoListType = {
  imgFilePath: string;
  contentsDate: string;
  artcTitle: string;
};
// 정규리그 순위기록 / 팀순위 컴포넌트의 타입들
export type TGameSeasonTeamRank = {
  date: string;
  rank: number;
}[];
// 정규리그 순위기록 / 팀기록 컴포넌트 타입들
export type TGameSeasonTeamRecord = {
  ab: number;
  bra: string;
  continue1: string;
  drawn: number;
  er: number;
  era: string;
  game: number;
  gameFlag: number;
  gb: string;
  gyear: string;
  hr: number;
  hra: string;
  lastrank: number;
  lose: number;
  lra: string;
  r: number;
  rank: number;
  run: number;
  sb: number;
  teamCode: string;
  teamName: string;
  teamNameEng: string;
  win: number;
  wra: string;
}[];
// 정규리그 순위기록 / 투수순위 컴포넌트 타입
export type TGameSeasonTeamPitcherRank = {
  ab: number;
  bb: number;
  bb9: number;
  bbhp: number;
  bk: number;
  bs: number;
  cg: number;
  cs: number;
  er: number;
  era: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn: number;
  iso: string;
  kk: number;
}[];
// 정규리그 순위기록 / 타자순위 컴포넌트 타입
export type TGameSeasonTeamBatterRank = {
  ab: number;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cs: number;
  der: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  kkab: number;
  ops: string;
  pa: number;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  teamCode: string;
  teamName: string;
}[];
// 정규리그 순위기록 / 팀상대 컴포넌트 타입
export type TGameSeasonTeamvsRecord = {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}[];
