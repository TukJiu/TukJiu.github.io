## mongoDB

```sql
# 该命令链接
mongo
# 该命令退出
exit
```

```sql
show dbs             查看所有的数据库
db                   查看当前的数据库
use db_name			 使用某数据库
```

## nodejs接入

`npm install -g mongodb`安装依赖

官方文档：

```js
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/dbs', { useMongoClient: true } )
mongoose.Promise = global.Promise

var Cat = mongoose.model('Cat', { name: String } )

var kitty = new Cat({ name: 'Zildjian' })
Kitty.save((err,ret)=>{
    err?
        console.log(err):
    console.log("ok")
})
```

解释：

```javascript
const mongoose = require("mongoose")

//链接数据库
mongoose.connect('mongodb://localhost/dbs', { useMongoClient: true } )
mongoose.Promise = global.Promise

//设计数据表 - mongodb底层不限制
const Cat = mongoose.model('Cat', { name: String } )

//整只猫保存
let kitty = new Cat({ name: 'Zildjian' })
Kitty.save((err,ret)=>{
    err?
        console.log(err):
    console.log("ok")
})
```

`db.db_name.find()`查询数据库

建立数据表

```javascript
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/i') //当插入第一条数据时创建

//设计表和约束
let 表 = new Schema({
    title: String,
    author: String,
    body: String,
    conmments: [
        {
            body: String,
            date: Date
        }
    ],
    date: {
        type: Date,
        default: Date.now
        required: true //必填
    },
    hidden: Boolean,
    meta: {
        botes: Number,
        favs: Number
    }
})

let User = mongoose.model('User', 表) //设计生效 - User表    在数据库中是users

//为所欲为（并不）
let 人 = new User(...)
人.save(...)
```

### 增删改查

增如上，查：

```javascript
User.find({
    name: '张三'
},(err,ret)=>{
    if(err){
        console.log("失败")
    }else{
        console.log(ret)
    }
})
```

删：

```javascript
User.remove({
    name: '张三'
},(err,ret)=>[
    err?console.log("失败"):coonsole.log("成功")
])
```

改：

根据id更新

```javascript
User.findByIdAndUpdate('查出来的默认id', {
    passwd: '114514'
},(err,ret)=>{
    err?c('失败'):c('成功')
})
```

根据条件更新：

```javascript
Model.findOneAndUpdate([条件], [更新], [选项], [回调])
```

全部更新：

```javascript
Model.update(条件, 更新, [选项], [回调])
```

## mysql对比

```javascript
const mysql = require('mysql') //创死他 买瑟口 等于 瑞块儿 买瑟口

//买个冰箱
let con = mysql.createConnection({
    host: 'localhost',
    user: 'z3',
    password: 'z3',
    datebase: 'dbs'
})

//打开冰箱门
con.connect()

//把大象放进冰箱
con.query('SELECT 1 + 1 AS solution', (err,res,fie)=>{
    err?throw error;
    console.log(res[0].solution)
})

//关闭冰箱门
con.end()
```

