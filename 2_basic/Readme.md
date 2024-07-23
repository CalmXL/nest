### 手动搭建 NestJs 框架与环境

0. 先初始化 package.json
1. @nestjs/common - 包含了常规的 Nest 的函数和类封装
2. @nestjs/core   - Nest 的编译运行的核心库
3. @nestjs/platform-express - 底层 http 框架的平台安装
4. reflect-metadata - 装饰器的封装与功能的支持
5. typescript - Ts 语法支持
6. rxjs - 利用观察着模式处理 Nest 的事件

### tsconfig.json 的配置

1. module: commonjs
2. target: es2017
3. experimentalDecorators: true
4. emitDecoratorMetadata: true


### 服务启动

1. ts-node-dev
2. "scripts": {
  "dev": "ts-node-dev ./src/main.ts"
}


### NestJs 对请求的处理

1. Pipe -> 验证请求的数据
2. Guard -> 验证请求的权限
3. Controller -> 进入路由调用函数
4. Service -> 执行请求的业务逻辑
5. Repository -> 访问数据库进行操作


### NestJs 的框架设计

1. Controller -> 处理请求
2. Services -> 处理数据访问与业务逻辑
3. Modules -> 封装业务逻辑代码
4. Pipes -> 验证请求的数据
5. Filters -> 处理请求中的数据
6. Guards -> 处理身份验证
7. Interceptor -> 增加一些额外的请求与响应的拦截 
8. Respository -> 数据库操作