import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// 指定当前类为 Nest 控制器
@Controller()
class AppController {

  // http://localhost:3000/hello
  @Get('/hello')
  getHello() {
    return 'Hello, nestjs'
  }
}

@Module({
  controllers: [
    AppController
  ]
})
class AppModule {}

async function bootstrap () {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => {
    console.log('server is running on 3000');
    
  })
}

bootstrap();