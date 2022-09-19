import { Injectable } from '@nestjs/common';
import { MonthStats, Period } from 'src/interfaces/stats';
import { User } from '../user/user.entity';
import { stats } from '../utils/get-stats';

@Injectable()
export class StatsService {
  async getStats(user: User, period: Period): Promise<MonthStats[]> {
    console.log(user);
    return stats(user, period.startingDate, period.endingDate);
  }
}
