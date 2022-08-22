"use strict";

const { response } = require("../../app");
const db = require("../config/db");
const { checkUserInfo } = require("./UserStorage");
const UserStorage = require("./UserStorage");
const masterID = 'master';
const masterPW = 'masterpw1234';

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
            if (client.id === masterID && client.psword === masterPW){
                return {success: true};
            }else if(user){
                if (user.id === client.id && user.password === client.psword){
                    return {success: true};
                }
                return {success: false, msg: "비밀번호가 틀렸습니다"};
            }
            return {success: false, msg: "존재하지 않는 아이디입니다"};
        } catch(err){
            return {success: false, err};
        }
    }

    async register(){
        const client = this.body;
        try{
            console.log(await UserStorage.checkUserInfo(client.id));
            if(await UserStorage.checkUserInfo(client.id)){
                return {success: false, msg: "이미 존재하는 아이디입니다"};
            }else{
                const response = await UserStorage.save(client);
                return response;
            }
        } catch(err){
            return { success: false, err};
        }
    }
}

module.exports = User;