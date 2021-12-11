// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('love_upload').aggregate().lookup({
    from:'love_user',
      localField: 'openid',
      foreignField: 'openid',
      as: 'result'
  }).match({
    title:{
      $regex:'.*'+ event.data,
      $options: 'i'
    }
  }).end()
}