import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { StatsService } from './stats.service';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { MonthStats, Period } from '../interfaces/stats';
import { AuthGuard } from '@nestjs/passport';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  async getStats(
    @UserObj() user: User,
    @Body() period: Period,
  ): Promise<MonthStats[]> {
    return this.statsService.getStats(user, period);
  }
}
