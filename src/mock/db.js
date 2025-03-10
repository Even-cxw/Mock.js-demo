import Mock from "mockjs";

const data = Mock.mock({
  // 模拟房间数量
  "roomsInfo": {
    'code': 200,
    'info': [
      {
        "id|+1": 1,
        name: "全部",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: true, // 开关状态
        temperature: 19,
        model: '制冷',
      },
      {
        "id|+1": 2,
        name: "地暖",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: true, // 开关状态
        temperature: 19,
        model: '制冷',
      },
      {
        "id|+1": 3,
        name: "客厅",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: true, // 开关状态
        temperature: 19,
        model: '制冷',
      },
      {
        "id|+1": 4,
        name: "餐厅",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: false, // 开关状态
        temperature: 29,
        model: '制热',
      },
      {
        "id|+1": 5,
        name: "厨房",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: false, // 开关状态
        temperature: 19,
        model: '冷风',
      },
      {
        "id|+1": 6,
        name: "主卧",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: true, // 开关状态
        temperature: 22,
        model: '制冷',
      },
      {
        "id|+1": 7,
        name: "次卧",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: false, // 开关状态
        temperature: 19,
        model: '制冷',
      },
      {
        "id|+1": 8,
        name: "儿童房",
        "status|1": ["available", "occupied"], // 随机生成房间状态
        switch: false, // 开关状态
        temperature: 19,
        model: '制冷',
      },
    ],
  }, 
  // 模拟用户数据
  "users|50": [
    {
      "id|+1": 1,
      name: "@name", // 随机生成名字
      age: "@integer(18, 60)", // 随机生成年龄
      email: "@email", // 随机生成邮箱
      address: "@city", // 随机生成城市
    },
  ],
  // 模拟文章数据
  // ｜后面为规则：在数组中，表示生成50个数组项
  "articles|50": [
    {
      "id|+1": 1,
      title: "@sentence(5, 10)", // 随机生成标题
      content: "@paragraph(2, 5)", // 随机生成内容
      author: "@name", // 随机生成作者名字
      "likes|0-100": 1, // 随机生成点赞数
    },
  ],
});

export default () => data;
