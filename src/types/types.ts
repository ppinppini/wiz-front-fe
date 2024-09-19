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
  name: string
}