import { Module, HttpModule } from '@nestjs/common';

import { ClimateService } from './climate.service';
import { ClimateController } from './climate.controller';

import { ReportsModule } from '../reports/reports.module';

@Module({
  imports: [

    ReportsModule,
    
    HttpModule
  ],
  providers: [ClimateService],
  controllers: [ClimateController]
})
export class ClimateModule {}
