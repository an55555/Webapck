const MongoClient = rquire('mongodb').MongoClient
const dburl = 'mongodb://127.0.0.1:27017/test'

// 连接数据库

function _connectDB(callback) {
  MongoClient.connect(dburl, (err, db) =>{
    callback(err, db)
  })
}

// 插入数据

module.export.insertOne = function (collection, json, callback) {
  _connectDB((err, db) => {
    if(err){
      console.log('数据库连接失败')
      return
    }
    db.collection(collection).insertOne(json,(err,result)=>{
      callback(err,result)
      db.close()
    })
  })
}

//删除函数的封装
module.exports.deleteMany = function(collection,json,callback){
  _connectDB(function(err,db){
    if(err){
      console.log('数据库连接失败！')
      return
    }
    db.collection(collection).deleteMany(json,(err,result)=>{
      callback(err,result)
      db.close()
    })
  })
}
//修改函数的封装
module.exports.updateMany = function(collection,json1,json2,callback){
  _connectDB(function(err,db){
    if(err){
      console.log('数据库连接失败！')
      return
    }
    db.collection(collection).updateMany(json1,json2,(err,result)=>{
      callback(err,result)
      db.close()
    })
  })
}
//获取集合当中文档的总条数
module.exports.getAllCount = function(collection,callback){
  _connectDB(function(err,db){
    if(err){
      console.log('数据库连接失败！')
      return
    }
    db.collection(collection).count({}).then(function(count){
      callback(count)
      db.close()
    })
  })
}

//查找函数的封装
module.exports.find = function(collection,json,C,D){
  if(arguments.length == 3){
    var callback = C
    var skipnumber = 0
    var limit = 0
    var sort = {}
  }else if(arguments.length == 4){
    var callback = D
    var args = C
    var skipnumber = args.pageamount * args.page
    var limit = args.pageamount
    var sort = args.sort
  }else{
    throw new Error('find函数参数个数不正确！')
    return
  }
  var result = []
  _connectDB(function(err,db){
    if(err){
      console.log('数据库连接失败！')
      return
    }
    var cursor = db.collection(collection).find(json).sort(sort).limit(limit)
      .skip(skipnumber)
    cursor.each((err,doc)=>{
      if(err){
        callback(err,null)
        db.close()
        return
      }
      if(doc!=null){
        result.push(doc)
      }else{
        callback(null,result)
        db.close()
      }
    })
  })
}