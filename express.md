## 创建一个简单的 Express 应用

假定你已经在系统中安装了 Node.js (>=5.4.1)

### 创建应用目录

首先创建课程案例目录 react-express-api-demo, 然后在案例目录中新建 server 目录，存放实现后端 API 服务的代码，

```
mkdir react-express-api-demo && cd react-express-api-demo && mkdir server
```

接下来，生成应用需要的 package.json 文件：

```
npm init -y
```

参考 npm init 命令的用法

### 安装 express 包

```
npm install --save express
```

- Express 是一个轻便灵活的 Node.js 应用开发框架，本应用将构建一个提供 API 服务的 Express 应用

### 添加应用入口文件

新建文件 index.js

```
touch index.js
```

然后打开index.js 文件，先添加下面两行代码：

```
var express = require('express');
var app = express();
```

上面两行代码的功能是：导入 express 功能模块，创建一个 Express 应用实例名为 app

继续添加代码：

```
app.get('/', function(req, res) {
  res.send('Hello world!');
})
```

app.get() 接口会响应 HTTP GET 请求，当访问路径与 / 相匹配的时候，则执行上述代码，并通过 res.send() 接口向客户端发送 Hello world! 字符串。

```
app.listen(3000, function() {
  console.log('Your server is running on port 3000');
});
```

app.listen() 方法会创建一个 HTTP server 实例，用来监听来自本地3000端口的所有请求。

保存 index.js 文件并退出，在命令行中运行命令：

```
node index.js
```

让刚创建好的 Express 应用运行起来。打开 Chrome 浏览器，在地址栏中输入网址 http://localhost:3000，网页中会显示 Hello World! 字样。

至此一个最简单的 Express 应用就搭建好了，在后面的课程中，我们会逐步完善它的功能，让它提供 API 服务。

### 使用 nodemon 提高开发效率

这时候，你可以试着修改一下代码，比如把 Hello World 改成 Hello Wild World，然后刷新页面，会发现没有变化。解决这个问题，需要先关闭刚才已经启动的应用，然后再运行命令：

```
node index.js
```

让应用重新启动之后，我们所做的修改才能生效。若在应用开发过程中每次修改代码都要重启应用，那就太不方便了！莫担忧，可以借助工具 nodemon 排除烦恼。这个 nodemon 工具可以助力 node 应用的开发效率，因为它能监测 node 应用目录中的各个文件，若文件有改动，nodemon 会自动重启你的 node 应用，再也不用手动重启了。

```
npm install -g nodemon
```

上面命令中用到了 -g 选项，说明要全局安装 nodemon 包，这样新创建的 node.js 应用都能使用 nodemon 运行起来了。

尽然 nodemon 已经安装好了，那如何使用呢？非常简单，在应用根目录下，先终止运行 node index.js 命令，然后在命令行中输入一个新的命令：

```
nodemon index.js
```

通过 nodemon 命令启动应用之后，应用中的各个文件就被 nodemon 监测了。即使应用中要安装新的 npm 包，nodemon 也会重启应用。


## MongoDB 数据库简单操作

### 安装 MongoDB 数据库

```
sudo apt-get install mongodb
```

### 运行 MongoDB

在启动 MongoDB 数据库之前，我们需要创建一个用来存储 MongoDB 数据的目录，MongoDB 数据的默认存放位置是 /data/db （也需要手动创建）目录下，也可以更改为其它地方，比如说当前用户目录下，新建一个 data/db 目录用来存放 MongoDB 的数据：

```
cd ~
mkdir -p data/db
```

目录 data 创建成功之后，就可以启动 MongoDB 数据库了：

```
mongod --dbpath ~/data/db
```

若上述命令执行之后不会退出，一直处于运行状态，说明 MongoDB 数据库可以使用了。查看 mongod 命令的帮助文档，可以在命令行中输入命令：

```
mongod -h
```

则在终端中打印出 mongod 命令各个选项的用法， 其中 --dbpath 选项就是指定数据存储路径

### 使用 MongoDB

通过 MongoDB 提供的 mongo shell 工具，可以很方便的和 MongoDB 数据库进行通信。

首先确保在 MongoDB 数据库运行的状态下，才能启动 mongo shell，在命令行中输入命令：

```
mongo
```

进入一个 shell 运行环境，在这里面可以调用 MongoDB 提供的接口操作数据库中存储的数据。下面先学几个简单的操作命令：

- 列出所有的数据库名称

```
show dbs
```

- 创建新的数据库，比如本项目用的数据库名为 react-express-api ：

```
use react-express-api
```

但是， react-express-api 数据库并不存在，只有当数据存入数据库时候才会真正的创建数据库

- 在 react-express-api 数据库中创建一个新的 collection, 比如本项目用到的集合名为 posts:

```
db.createCollection('posts')
```

- 往 posts 集合中存入数据，posts 集合包含 category、title 和 content 三个字段

```
db.posts.insert({category: 'db', title: 'learning mongodb', content: 'mongodb is a nosql database'})
```

- 查找 posts 集合中的所有记录

```
db.posts.find()
```

- 更新 posts 集合中的一条记录

```
db.posts.update({_id: ObjectId('xxx')}, {$set: {title: 'mongodb'}})
```

- 删除 posts 集合中的一条记录

```
db.posts.remove({_id: ObjectId('xxx')})
```

- 删除 posts 集合中的所有记录

```
db.posts.remove({})
```

- 删除数据库 react-express-api

```
use react-express-api
db.dropDatabase()
```

## Express 对话 MongoDB

在 Express 应用和 MongoDB 数据库之间进行通信。

### 安装 Mongoose 包

通过 mongoose npm 包，让 Express 应用和 MongoDB 建立连接

```
npm install --save mongoose
```

### 连接 MongoDB 数据库

打开 index.js 文件，首先添加一行：

```
var mongoose = require('mongoose');
```

导入 mongoose 功能模块，然后添加一行代码：

```
mongoose.connect('mongodb://localhost:27017/react-express-api');
```

通过 Mongoose 提供的connect() 方法连接到运行在本地的 react-express-api MongoDB 数据库。

然后，加入如下代码，判断连接是否成功：

```
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
```

这里的 mongoose.connection 会映射到数据库 react-express-api，若此时 MongoDB 数据库没有启动，则运行本项目的话，在命令行中会报告错误信息：

```
{ [MongoError: failed to connect to server [localhost:27017] on first connect]
  name: 'MongoError',
  message: 'failed to connect to server [localhost:27017] on first connect' }
```

### 构建 Post Model

新建一个文件 models/post.js，首先添加两行代码：

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
```

导入 mongoose 功能模块以及调用它提供的 Schema() 接口创建一个新的 schema，每个 schema 会映射为 MongoDB 数据库中的一个 collection（集合），同时还能定义所映射集合包含的字段，以及字段的类型等规范。下面代码就创建了一个名为 PostSchema 的 schema, 并规定所映射的集合将包含三个字段：category、title 和 content，并且每个字段只能存储字符串类型的数据，其中 title 字段中存储的数据不能为空。

```
const PostSchema = new Schema(
  {
    category: { type: String },
    title: { type: String, required: true },
    content: { type: String }
  },
  { timestamps: true }
);
```

选项 timestamps 的值设置为 true，则自动给所映射集合添加 createdAt 和 updatedAt 两个字段。

虽然定义了一个 schema，但是 Mongoose 还不知道这个 schema 到底映射成数据库中的哪个集合，所以还得把一个 schema 转换成一个 model 之后，根据 model 的名字，Mongoose 会自动查找到这个 schema 在数据库中对应的集合。

最后再添加一行代码：

```
module.exports = mongoose.model('Post', PostSchema);
```

通过 Mongoose 的 model() 方法把一个 schema 编译成一个 model，一个 model 实例会对应映射集合中的一条记录，这个 model() 方法的第一个参数 Post 则是映射集合名字的单数形式，所以 PostSchema 映射集合的名字是 posts。上述代码还把构建成的 Post Model 导出供外部其它文件使用。

现在 posts 数据集合虽然已经有模有样了，但是若没有数据存入 posts 数据集合中的话，本项目所使用的数据库 react-express-api 中是不存在 posts 集合的，所以我们接下来要做的工作就是构建一条 post 记录并存入数据库，这样 posts 集合就会真正存在了。

### 构建一条记录

打开文件 index.js, 添加代码：

```
var Post = require('./models/post');

db.once('open', function() {
  var post = new Post({title: 'mongoose usage'});
  post.save(function(err){
    if(err) console.log(err);
  })
  console.log('success!');
});
```

首先导入 Post model，然后创建一个新的 model 实例 post，其对应 posts 集合中的一条记录，最后数据保存到数据库。

注意：因为使用了异步操作方法 save()，导致在终端报告警告信息：

```
Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library
```

解决办法是在连接 MongoDB 数据库 mongoose.connect(...); 之前，添加一行代码：

```
mongoose.Promise = global.Promise;
```
