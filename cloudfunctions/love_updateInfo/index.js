// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection('love_user').where({
      openid:event.openid
    }).update({
      data:{
        name:event.name,
        yuan:event.yuan,
        telephone:event.telephone,
        sex:event.sex,
        shen:event.shen
      }
    })
  }catch(e){

  }
}