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
}

