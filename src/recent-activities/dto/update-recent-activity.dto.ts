import { PartialType } from '@nestjs/mapped-types';
import { CreateRecentActivityDto } from './create-recent-activity.dto';

export class UpdateRecentActivityDto extends PartialType(CreateRecentActivityDto) {}
