import { Test, TestingModule } from '@nestjs/testing';
import { JtsController } from './jts.controller';

describe('JtsController', () => {
  let controller: JtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JtsController],
    }).compile();

    controller = module.get<JtsController>(JtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
