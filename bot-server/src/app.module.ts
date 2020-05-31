import { Module, HttpModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClimateModule } from './climate/climate.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [

    UsersModule, 
    ReportsModule,
    ClimateModule,
    
    HttpModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
