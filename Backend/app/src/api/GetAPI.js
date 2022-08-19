import fetch from 'node-fetch';

var bi_info={
  
};
var member_seq ;
var member_phone_num;
var member_email;
var token;
var info_time;
const get_token_url="http://210.104.190.229:8381/login";
fetch(get_token_url ,{
  method : "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body:JSON.stringify({
    "compSeq": 47, 
    "id": "dothebestmoon1016@gmail.com",
    "lang": "ko_KR",
    "pw": "Hustar1016!",
    "sns" : "O"
  })
}).then((response) => response.json())
.then((data) => {
    member_seq=JSON.stringify(data.profile.memberSeq);
    member_phone_num=JSON.stringify(data.profile.phone);
    member_email=JSON.stringify(data.profile.email);
    token=JSON.stringify(data.token);
    console.log("member_seq : ",member_seq);
    console.log("member_seq type: ",typeof(member_seq) );

    console.log("member_phone_num : ",member_phone_num);
    console.log("member_email : ",member_email);
    console.log("token : ",token);
})
.catch((error) => {
    console.error('실패:', error);
});

const Bp_url = "http://210.104.190.229:8381/v19blood/list?";

fetch(Bp_url + new URLSearchParams({
  "memberSeq":parseFloat("2345")  ,
  "startDay": 1660618500000,
    "endDay": 1660618800000
}),
{
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzM5IiwiZXhwIjoxNjYzMzMxMDg0fQ.QOf-gLZuySGR8MygYUZ6aiEr9xpCTvGZweVaobvw5ObpeB4TYfWD5FbCT4esWKrcPnjNbC6J1ztHkQ8JKa00qw"
    },
}).then((response) => response.json())
.then((data) => {
  console.log('bp성공',data);
  bi_info.member_diastolic_blood_pressure=JSON.stringify(data.min[0].diastolic);
  bi_info.member_systolic_blood_pressure=JSON.stringify(data.max[0].systolic)
  console.log("diastolic : ",bi_info.member_systolic_blood_pressure);
  console.log("systolic : ",bi_info.member_diastolic_blood_pressure);
})
.catch((error) => {
  console.error('실패:', error);
});

const Bpm_url = "http://210.104.190.229:8381/v19heart/list?";

fetch(Bpm_url + new URLSearchParams({
  "memberSeq": 2345,
  "startDay": 1660610500000,
  "endDay": 1660618800000
}),
{
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzM5IiwiZXhwIjoxNjYzMzMxMDg0fQ.QOf-gLZuySGR8MygYUZ6aiEr9xpCTvGZweVaobvw5ObpeB4TYfWD5FbCT4esWKrcPnjNbC6J1ztHkQ8JKa00qw"
    },
}).then((response) => response.json())
.then((data) => {
  console.log('bpm 성공');
  bi_info.member_bpm=JSON.stringify(data.list[0].bpm);
  console.log("bpm : ",bi_info.member_bpm);
})
.catch((error) => {
  console.error('실패:', error);
});

const Stress_url = "http://210.104.190.229:8381/v19Stress/list?";

fetch(Stress_url + new URLSearchParams({
  "memberSeq": member_seq,
  "dte": 1660575600000
}),
{
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzM5IiwiZXhwIjoxNjYzMzMxMDg0fQ.QOf-gLZuySGR8MygYUZ6aiEr9xpCTvGZweVaobvw5ObpeB4TYfWD5FbCT4esWKrcPnjNbC6J1ztHkQ8JKa00qw"
    },
}).then((response) => response.json())
.then((data) => {
  console.log('stress 성공:');
  bi_info.member_stress_level=JSON.stringify(data.list[0].stressLevel);
  bi_info.member_stress_value=JSON.stringify(data.list[0].stressValue);
  console.log("stress_level : ",bi_info.member_stress_level);
  console.log("stress_value : ",bi_info.member_stress_value);
})
.catch((error) => {
  console.error('실패:', error);
});