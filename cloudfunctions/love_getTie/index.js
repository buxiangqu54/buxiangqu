// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
let db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    let page = event.page;//第几页
    let count = event.count;//每页加载个数
    let type = parseInt(event.type)
    let info1,info2
    if(type==0){
      info1 =  await db.collection("love_upload").aggregate().lookup({
        from:'love_user',
        localField: 'openid',
        foreignField: 'openid',
        as: 'result'
      }).match({
        view:true
      }).sort({
        time:-1,
      }).skip(page).limit(count).end();
      info2 = await db.collection('love_sort').get()
    }else{
      info1 =  await db.collection("love_upload").aggregate().lookup({
        from:'love_user',
        localField: 'openid',
        foreignField: 'openid',
        as: 'result'
      }).match({
        type:parseInt(event.type),
        view:true
      }).sort({
        time:-1,
      }).skip(page).limit(count).end();
      info2 = await db.collection('love_sort').get()
    } 
    return {info1,info2}
  }catch(e){
    console.log(e);
  }
}