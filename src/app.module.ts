import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './providers/database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ItemsModule } from './items/items.module';
import { StatsModule } from './stats/stats.module';
import { HistoryController } from './history/history.controller';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, ClientsModule, InvoicesModule, ItemsModule, StatsModule, HistoryModule],
  controllers: [AppController, HistoryController],
  providers: [AppService],
})
export class AppModule {}
