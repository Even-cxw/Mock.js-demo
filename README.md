

# 鸿蒙开发接口
鸿蒙不支持访问 localhost、172.0.0.1 等本地地址，需要使用真实的 IP 地址访问。

```bash
ipconfig // 查看本机IP地址 ipv4地址
```


## 参考项目

[github地址](https://github.com/iotjin/JhHarmonyDemo)

## 原型图

[原型图地址](https://www.figma.com/design/i547nGtb8NiDHJSObPEOzG/%E9%B8%BF%E8%92%99%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1?node-id=0-1&t=WPwv9cFtX7pCWOfw-1)


## 接口文档

==http://127.0.0.1:3000/==

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


03-10 16:45:00.914   6537-6537     A03d00/JSAPP                    com.jh.jhharmonydemo  I     Request err: {"message":"{\"code\":2300007,\"message\":\"Couldn't connect to server\"}","name":"AxiosError","stack":"    at AxiosError (oh_modules/.ohpm/@ohos+axios@2.2.4/oh_modules/@ohos/axios/src/main/ets/components/lib/core/AxiosError.js:22:1)\n    at anonymous (oh_modules/.ohpm/@ohos+axios@2.2.4/oh_modules/@ohos/axios/src/main/ets/components/lib/adapters/ohos/http.js:57:1)\n","config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"adapter":["ohos"],"transformRequest":[null],"transformResponse":[null],"timeout":50000,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{"Blob":null},"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},"baseURL":"http://127.0.0.1:3000/api/","url":"/mock/login","method":"post","params":null,"data":"{\"userName\":\"jin\",\"pwd\":\"123123123\"}"},"code":2300007,"status":null}
03-10 16:45:00.914   6537-6537     C0390d/AceOverlay               com.jh.jhharmonydemo  I     [(100000:100000:scope)] Dialog IsCurrentUseNewPipeline.