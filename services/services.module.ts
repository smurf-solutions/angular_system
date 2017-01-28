import { NgModule }           from '@angular/core';

import { SysService }         from './sys.service.js';
import { CollectionsService } from './collections.service.js';


@NgModule({
	providers: [
		SysService,
		CollectionsService
	]
})
export class SysServicesModule {}