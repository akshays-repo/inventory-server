import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecentActivitiesService } from './recent-activities.service';
import { CreateRecentActivityDto } from './dto/create-recent-activity.dto';
import { UpdateRecentActivityDto } from './dto/update-recent-activity.dto';

@Controller('recent-activities')
export class RecentActivitiesController {
  constructor(private readonly recentActivitiesService: RecentActivitiesService) {}

  @Post()
  create(@Body() createRecentActivityDto: CreateRecentActivityDto) {
    return this.recentActivitiesService.create(createRecentActivityDto);
  }

  @Get()
  findAll() {
    return this.recentActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recentActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecentActivityDto: UpdateRecentActivityDto) {
    return this.recentActivitiesService.update(+id, updateRecentActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recentActivitiesService.remove(+id);
  }
}
