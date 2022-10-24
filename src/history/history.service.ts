import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { OneAction } from '../interfaces';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
  async getHistory(user: User): Promise<OneAction[] | null> {
    const history = await History.find({
      where: {
        userId: user.id,
      },
    });

    return history ? history : null;
  }
}
