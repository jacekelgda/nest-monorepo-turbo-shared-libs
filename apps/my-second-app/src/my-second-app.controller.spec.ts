import { Test, TestingModule } from '@nestjs/testing';
import { MySecondAppController } from './my-second-app.controller';
import { MySecondAppService } from './my-second-app.service';

describe('MySecondAppController', () => {
  let mySecondAppController: MySecondAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MySecondAppController],
      providers: [MySecondAppService],
    }).compile();

    mySecondAppController = app.get<MySecondAppController>(MySecondAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mySecondAppController.getHello()).toBe('Hello World!');
    });
  });
});
