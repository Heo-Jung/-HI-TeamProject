"use strict";

const db = require("../config/db");

class UserStorage{

  static #getUsers(data, isALL, field){
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers=fields.reduce((newUsers,field)=>{//reduce라는 메소드를 사용하면 fields에서 하나씩 빠져서 newUsers로 넣고 나머지가 field로 들어간다.
      //console.log(newUsers,field);
      if(users.hasOwnProperty(field)){
        newUsers[field]=users[field];
      }
      return newUsers;
    },{});
    return newUsers; 
  }

  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});

    return userInfo;
  }

  static getUsers(isALL, ...fields){}

  static getUserInfo(id){
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM user WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if(err) reject('${err}');
        else resolve(data[0]);
      });
    });
  }

  static async checkUserInfo(id){
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM user WHERE id = ?;"
      db.query(query, [id], (err, data) => {
        if(err) reject('${err}');
        else if(data.length>0) resolve(1);
        else resolve(0);
      });
    });
  }
  static async save(userInfo){
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO user (id, password) VALUES (?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.psword], 
        (err) => {
          if (err) reject('${err}');
          else resolve({success: true});
      });
    });
  }
}

module.exports=UserStorage;