import { Test, TestingModule } from '@nestjs/testing';
import { RecentActivitiesController } from './recent-activities.controller';
import { RecentActivitiesService } from './recent-activities.service';

describe('RecentActivitiesController', () => {
  let controller: RecentActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecentActivitiesController],
      providers: [RecentActivitiesService],
    }).compile();

    controller = module.get<RecentActivitiesController>(RecentActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
