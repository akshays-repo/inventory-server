import { Module } from '@nestjs/common';
import { RecentActivitiesService } from './recent-activities.service';
import { RecentActivitiesController } from './recent-activities.controller';

@Module({
  controllers: [RecentActivitiesController],
  providers: [RecentActivitiesService]
})
export class RecentActivitiesModule {}
