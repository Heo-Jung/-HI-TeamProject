"use strict";

const fs = require("fs").promises;

//User의 정보 저장된곳
//getUsers를 이용하여 user의 정보를 얻을 수 있다.
class UserStorage{
  static #getUserInfo(data,id){
    const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const userKeys = Object.keys(users);//users의 key값만 list로 만든다. ==> [id, psword, name] 형식
      const userInfo=userKeys.reduce((newUser,info)=>{
        newUser[info]=users[info][idx];
        return newUser;
      },{});
      //console.log(userInfo);
      return userInfo;
  }

  static #getUsers(data,isAll, fields){
    const users = JSON.parse(data);
    if (isAll)return users;
    const newUsers=fields.reduce((newUsers,field)=>{//reduce라는 메소드를 사용하면 fields에서 하나씩 빠져서 newUsers로 넣고 나머지가 field로 들어간다.
      //console.log(newUsers,field);
      if(users.hasOwnProperty(field)){
        newUsers[field]=users[field];
      }
      return newUsers;
    },{});
    return newUsers; 
  }
  static getUsers(isAll,...fields){
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{      //위의 로직이 성공했을때 실행
      return this.#getUsers(data,isAll,fields);
    })
    .catch(console.error);//위의 로직이 실패 했을때 실행    
    
  }
  //User.js에서 호출
  static getUserInfo(id){
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{      //위의 로직이 성공했을때 실행
      return this.#getUserInfo(data,id);
    })
    .catch(console.error);//위의 로직이 실패 했을때 실행    
  }
  
  
  
  static async save(userInfo){
    //const users=await this.getUsers("id","pw");//id와 pw의 데이터만 가져오기
    const users=await this.getUsers(true);//true 모든 데이터 가져오기
    if(users.id.includes(userInfo.id)){
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);
    fs.writeFile("./src/databases/users.json",JSON.stringify(users));
    return {success: true};
    
  }
}

module.exports=UserStorage;