import data from "./db.js"; // 引入 Mock.js 生成的数据
import jsonServer from "json-server";

// 返回express服务器
const server = jsonServer.create();
// 返回json服务器路由
// router中的参数可以是一个json文件地址，也可以是一个对象。即： （path | object)
const router = jsonServer.router(data());
// 返回JSON服务器使用的中间件（用来处理静态资源的-默认为public目录下的静态资源）
const middlewares = jsonServer.defaults();
// 使用请求体解析中间件，确保在路由之前使用
server.use(jsonServer.bodyParser);
// 使用中间件
server.use(middlewares);

// 新增接口：根据房间 ID 和开关状态更新房间的开关状态
server.get('/api/room/:id/switch', (req, res) => {
  const roomId = parseInt(req.params.id);
  const room = data().roomsInfo.find(room => room.id === roomId);
  if (room) {
      room.switch = !room.switch;
      // res.json(data());
      res.json({
        code: 200,
        res: {
          ...room
        }
      });
  } else {
      res.status(404).json({ error: 'Room not found' });
  }
});


server.post('/api/roomsInfo/getRoomById', (req, res) => {
  const { id } = req.body;
  const room = data().roomsInfo.find(room => room.id === id);
  if (room) {
      res.json({
        code: 200,
        res: {
          ...room
        }
      });
  } else {
      res.status(404).json({ error: 'Room not found' });
  }
});

// 调整温度
server.post('/api/room/update', (req, res) => {
  const { id, num } = req.body;
  const roomId = id;
  const room = data().roomsInfo.find(room => room.id === roomId);
  if (room) {
      room.temperature = num;
      // res.json(data());
      res.json({
        code: 200,
        res: {
          ...room
        }
      });
  } else {
      res.status(404).json({ error: 'Room not found' });
  }
});


server.use("/api", router);

// 配置自定义路由
server.use(router);
// 可以在路由前添加前缀，以下表示访问路由以/api开头

// 启动服务器
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
