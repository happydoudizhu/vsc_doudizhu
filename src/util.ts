export class ServerUtil {
    private serverState: boolean; // 服务器状态
    private playerState: boolean[]; // 玩家状态
    private playerId: string; // 玩家id
    private tableState: any; // 已出的牌
    constructor() {
        this.serverState = false;
        this.playerState = new Array<boolean>();
        this.playerId = this.createId();
    }
    public createServer() { } // 创建服务器
    public getReady() { }// 准备
    public startGame() { }// 开始游戏
    public outCards(contents: string) { }// 出牌
    public checkTableState() { }// 检查已出的牌
    public invateFriends(friendsId: string) { }// 邀请好友
    public createId() {// 创建玩家id
        return "";
    }
    public getMyId() {// 获取我的id
        return this.playerId;
    }
}

export class PlayInfo {
    public player: string;// 玩家ID
    public tableCard: string;// 桌面最上面的牌组
    public handCard: string;// 手牌
    public outCard: string;// 要出的牌
    constructor(playerId: string) {
        this.player = playerId;
        this.tableCard = "";
        this.handCard = "";
        this.outCard = "";
    }
}