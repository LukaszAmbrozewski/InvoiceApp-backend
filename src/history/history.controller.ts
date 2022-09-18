import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.entity';
import { OneAction } from '../interfaces/history';
import { UserObj } from '../decorators/user-obj.decorator';

@Controller('history')
export class HistoryController {
  constructor(@Inject(HistoryService) private historyService: HistoryService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getHistory(@UserObj() user: User): Promise<OneAction[]> {
    return this.historyService.getHistory(user);
  }
}
