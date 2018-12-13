export class Chatroom{
    private static _roomname: string;

    public static get Roomname() : string {
        return this._roomname;
    }

    public static set Roomname(value: string) {
        this._roomname = value;
    }
}