import { Test, TestingModule } from '@nestjs/testing';
import { RecentActivitiesService } from './recent-activities.service';

describe('RecentActivitiesService', () => {
  let service: RecentActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecentActivitiesService],
    }).compile();

    service = module.get<RecentActivitiesService>(RecentActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
