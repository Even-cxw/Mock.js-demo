

# 鸿蒙开发接口


## 原型图

[原型图地址](https://www.figma.com/design/i547nGtb8NiDHJSObPEOzG/%E9%B8%BF%E8%92%99%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1?node-id=0-1&t=WPwv9cFtX7pCWOfw-1)


## 接口文档

- /api/roomsInfo  获取房间所有列表信息
  1. 请求方式： get
  2. 请求参数：无
  3. 返回值：{rooms: Array<RoomInfo>}

- /api/room/:id/switch 调整房间开关
  1. 请求方式： get
  2. 请求参数：{id: number}
  3. 返回值：{status: roomInfo}

- /api/roomsInfo/getRoomById 获取当前房间信息
  1. 请求方式： post
  2. 请求参数：{id: number}
  3. 返回值：{room: RoomInfo}


- /api/room/update 调整房间温度
  1. 请求方式： post
  2. 请求参数：{id: number，num: number}
  3. 返回值：{room: RoomInfo}
# Mock.js-demo
