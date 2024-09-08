/** 경기 데이터 타입 */
export type GameInfo = { 
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
    visitScore?: number;
    visitStarter?: string;
}