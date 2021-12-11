// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {   
  //event 是调用云函数是输入的数据，是一个类对象。context 用于获取用户信息，也是一个类对象。
  try{
    return await db.collection('love_zan').add({
      data:{
        openid:event.openid,
        id:event.id,
        type:1
      }
    })
  }catch(e){

  }
}