import { Injectable } from '@nestjs/common';

import * as Highcharts from 'highcharts';

@Injectable()
export class ReportsService {

    createChart() { 

        console.log('Iniciando createChart');

        var chart = new Highcharts.Chart({
            yAxis: [{
                labels: {
                    formatter: function (): string {
                        return 'My Label';
                    }
                }
            }]
        });

        console.log('Finalizando createChart', chart);
    }
}
