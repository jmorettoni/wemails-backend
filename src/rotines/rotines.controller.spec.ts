import { Test, TestingModule } from '@nestjs/testing';
import { RotineController } from './rotines.controller';

describe('RotineController', () => {
  let controller: RotineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RotineController],
    }).compile();

    controller = module.get<RotineController>(RotineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
 