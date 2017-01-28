/**
	Usage set: | dump : 'key_saved_in_SysService'
	Usage get: SysService.dump.key_saved_in_SysService']
**/
import { NgModule, Pipe } from '@angular/core';

import { SysService }     from '@sys/services';


@Pipe({
    name: 'dump'
})
export class DumpPipe {
	constructor(
		private app: SysService
	){}

    transform( items: object[], obj: object ) {
		if( items && obj ) {
			obj.dump = items;
		}
        return items;
    }
}


@NgModule({
    declarations: [ DumpPipe ],
    exports: [ DumpPipe ]
})
export class DumpModule {}