import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';

import { ClimateService } from './climate.service';

@Controller('climate')
export class ClimateController {

    constructor(private climateService: ClimateService) {

    }

    @Get(':lat/:long')
    async getBook(@Param('lat') lat, @Param('long') long) {

        const initialDate = '2020-05-17T15:20:00Z'; // today - 15 dias
        const numDays = '30';
        const latLong = lat + ',' + long;

        console.log('Climate resume option request recevied for latLong: ' + latLong + '\n');

        const user = await this.climateService.resumeClimate(latLong, initialDate, latLong);

        console.log('\nReady - Sending answer data for Gaia ChatBot!');
        return user;
    }
}
