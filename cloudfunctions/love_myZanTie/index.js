// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection('love_zan').aggregate().lookup({
      from:'love_upload',
      localField: 'id',
      foreignField: '_id',
      as: 'result'
    }).match({
      openid:event.openid
    }).end()
  }catch(e){

  }
}