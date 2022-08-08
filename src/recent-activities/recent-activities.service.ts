import { Injectable } from '@nestjs/common';
import { CreateRecentActivityDto } from './dto/create-recent-activity.dto';
import { UpdateRecentActivityDto } from './dto/update-recent-activity.dto';

@Injectable()
export class RecentActivitiesService {
  create(createRecentActivityDto: CreateRecentActivityDto) {
    return 'This action adds a new recentActivity';
  }

  findAll() {
    return `This action returns all recentActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recentActivity`;
  }

  update(id: number, updateRecentActivityDto: UpdateRecentActivityDto) {
    return `This action updates a #${id} recentActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} recentActivity`;
  }
}
