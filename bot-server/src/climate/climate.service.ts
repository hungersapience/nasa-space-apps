import { Injectable, HttpService } from '@nestjs/common';

import { CLIMATE_RESUME_30_DAYS } from './mocks/climate-resume.mock';

import { ReportsService } from '../reports/reports.service';

@Injectable()
export class ClimateService {

    constructor(
        private httpService: HttpService,
        private reportsService: ReportsService) {


    }


    resumeClimate(latLong, initialDate, numDays): Promise<any> {

        const url = 'https://sapience_hunger:AolwzFet92lT@api.meteomatics.com/' + initialDate + 'P' + numDays + 'D:PT3H/t_2m:C,relative_humidity_2m:p/' + latLong + '/json';
        console.log('\tGetting climate data Meteomatics API...', 'api.meteomatics.com');

        return new Promise(resolve => {

            // console.log(CLIMATE_RESUME_30_DAYS);

            console.log('\tData receved!');
            if (CLIMATE_RESUME_30_DAYS.data) {

                const t_2mC = [];
                const relative_humidity_2mP = [];
                const datesAxisX = [];

                console.log('\tTreating data...');
                CLIMATE_RESUME_30_DAYS.data.forEach(infoType => {
                    
                    if (infoType.parameter === 't_2m:C') {

                        infoType.coordinates[0].dates.forEach(dateItem => {
                            
                            datesAxisX.push('\"' + dateItem.date + '\"');
                            t_2mC.push(dateItem.value);
                        });

                    } else if (infoType.parameter === 'relative_humidity_2m:p') {

                        infoType.coordinates[0].dates.forEach(dateItem => {
                            
                            relative_humidity_2mP.push(dateItem.value);
                        });
                    }
                });

                // console.log(relative_humidity_2mP);
                // console.log(t_2mC);
                // console.log(datesAxisX);

                console.log('\tGenerating reports Charts...');
                //this.reportsService.createChart();
                console.log('\tReport Charts Done.');

                console.log('\tGenerating reports text...');
                //this.reportsService.createChart();
                console.log('\tReport Text Done.');

                console.log('\tReport Done. Sending answer!');

              resolve(relative_humidity_2mP + '<br><br>' + t_2mC + '<br><br>' + datesAxisX);
            } 

          });
      /*  
        return this.httpService.post(url, data).toPromise()
            .then(response => {

                console.log(response);

            }).catch(error => {
                
                concole.error(error);
            });*/
    }
}
