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
// Player 페이지의 투수 카드 컴포넌트의 타입들
export type TPlayerPitcherProps = {
  backnum: string;
  energybar: number;
  energybarName: string;
  gyear: string;
  hasFanpage: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  position: string;
  rank: number;
  rankName: string;
  teamName: string;
};
// Player 페이지의 코칭스탭 컴포넌트의 타입들
export type TPlayerCoachProps = {
  backnum: string;
  birth: string;
  career: string;
  gyear: string;
  height: string;
  heightWeight: string;
  hittype: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  orderSeq: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  position: string;
  teamCode: string;
  teamName: string;
  weight: string;
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
// 정규리그 순위기록 / 투수 순위
export type TGamePitcherRank = {
  ab: number;
  bb: number;
  bb9: number;
  bf: number;
  bk: number;
  bs: number;
  cba: string;
  cg: number;
  cs: number;
  dpp: string;
  er: number;
  era: string;
  err: number;
  fo: number;
  gamenum: number;
  go: number;
  gofo: string;
  gyear: string;
  h1: number;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inBa: string;
  inFlag: string;
  inn: number;
  inn2: number;
  iso: string;
  kk: number;
  kk9: number;
  kkbb: string;
  l: number;
  lCg: number;
  lba: string;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  outBa: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  qs: number;
  qsPlus: number;
  quit: number;
  quitInn2: number;
  r: number;
  rba: string;
  sb: number;
  sbTryCn: number;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  startInn2: number;
  sv: number;
  svo: number;
  teamName: string;
  tugucount: number;
  tugucountinn: number;
  w: number;
  wCg: number;
  whip: string;
  wp: number;
  wra: string;
}[];
// 정규리그 순위기록 / 타자순위
export type TGameBatterRank = {
  ab: number;
  babip: string;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cba: string;
  cgopo: string;
  cs: number;
  fl: number;
  gamenum: number;
  gd: number;
  gofo: string;
  gr: number;
  gyear: string;
  h1: number;
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
  lba: string;
  lgopo: string;
  nppa: number;
  ops: string;
  opsPlus: string;
  pa: number;
  paFlag: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  rba: string;
  rbi: number;
  rgopo: string;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  spHra: string;
  startCn: number;
  subCn: number;
  teamName: string;
  wrHit: string;
}[];
// 정규리그 순위기록 / 타자순위
export type TGameCrowdStatus = {
  crowd: number;
  game: number;
  teamCode: string;
  teamName: string;
}[];
// 정규리그 순위기록 / 투수기록 테이블
export type TPitcherRecordRank = {
  ab: number;
  bb: number;
  bb9: number;
  bf: number;
  bk: number;
  bs: number;
  cba: string;
  cg: number;
  cs: number;
  dpp: string;
  er: number;
  era: string;
  err: number;
  fo: number;
  gamenum: number;
  go: number;
  gofo: string;
  gyear: string;
  h1: number;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inBa: string;
  inFlag: string;
  inn: number;
  inn2: number;
  iso: string;
  kk: number;
  kk9: number;
  kkbb: string;
  l: number;
  lCg: number;
  lba: string;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  outBa: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  qs: number;
  qsPlus: number;
  quit: number;
  quitInn2: number;
  r: number;
  rba: string;
  sb: number;
  sbTryCn: number;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  startInn2: number;
  sv: number;
  svo: number;
  teamName: string;
  tugucount: number;
  tugucountinn: number;
  w: number;
  wCg: number;
  whip: string;
  wp: number;
  wra: string;
}[];
// 정규리그 순위기록 / 타자기록 테이블
export type TBatterRecordRank = {
  ab: number;
  babip: string;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cba: string;
  cgopo: string;
  cs: number;
  fl: number;
  gamenum: 5;
  gd: number;
  gofo: string;
  gr: number;
  gyear: string;
  h1: number;
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
  lba: string;
  lgopo: string;
  nppa: number;
  ops: string;
  opsPlus: string;
  pa: number;
  paFlag: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  rba: string;
  rbi: number;
  rgopo: string;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  spHra: string;
  startCn: number;
  subCn: number;
  teamName: string;
  wrHit: string;
}[];

//박스스코어의 타자 기록 타입
export interface BatterRecord {
  name: string;
  position: string;
  ab: number;
  hit: number;
  rbi: number;
  run: number;
  avg: number;
  inn1: string;
  inn2: string;
  inn3: string;
  inn4: string;
  inn5: string;
  inn6: string;
  inn7: string;
  inn8: string;
  inn9: string;
  inn10?: string;
  inn11?: string;
  inn12?: string;
}
//박스스코어의 타자 기록 타입
export interface GameBoxScoreBatterRecordProps {
  batters: BatterRecord[];
  name: string;
}

// 박스스코어의 경기기록을 보여주는 타입
export interface EtcGameRecord {
  how: string;
  result: string;
}
// 박스스코어의 경기기록을 보여주는 타입
export interface GameBoxScoreMainRecordProps {
  etcgames: EtcGameRecord[];
}

export interface GameInfo {
  gameDate: string;
  gmkey: string;
  home: string;
  homeLogo?: string;
  visit: string;
  visitLogo?: string;
  hscore?: number;
  vscore?: number;
  gtime?: string;
  stadium?: string;
  crowdCn?: number;
}
//박스스코어의 경기일정 타입

export interface TeamScore {
  bhomeName: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
  score10?: string;
  score11?: string;
  score12?: string;
  run: string;
  hit: string;
  error: string;
  ballfour: string;
}

//박스스코어의 경기일정 타입
export interface Schedule {
  prev?: GameInfo | undefined;
  current: GameInfo;
  next?: GameInfo | undefined;
}
//박스스코어의 경기일정 타입
export interface TableRow {
  team: string;
  [inning: string]: string | number;
}
//박스스코어의 경기일정 타입
export interface GameBoxScoreScheduleProps {
  scoreBoard: TeamScore[];
  schedule: Schedule;
}

// 박스스코어의 투수기록 타입
export interface PitcherRecord {
  name: string;
  result: string;
  inn: string;
  w: number;
  l: number;
  s: number;
  ab: number;
  bf: number;
  hit: number;
  hr: number;
  bb: number;
  kk: number;
  r: number;
  er: number;
  era: number;
}

export interface GameBoxScorePitcherRecordProps {
  pitchers: PitcherRecord[]; // pitchers로 props 이름 변경
  name: string;
}

// wiz 뉴스 리스트
export interface NewsList {
  artcContents: string;
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
  delYn: string;
  imgFilePath: string;
  maxArticlePerPage: number;
  regDttm: number;
  regr: string;
  totalPage: number;
  updDttm: number;
  updr: string;
  useYn: string;
  viewCnt: number;
}
//wiz 뉴스 상세
export interface NewsDetail {
  artcContents: string;
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
  delYn: string;
  imgFilePath?: string;
  maxArticlePerPage: number;
  regDttm: number;
  regr: string;
  updDttm: number;
  updr: string;
  useYn: string;
  viewCnt: number;
}
