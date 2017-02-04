import { NgModule }             from '@angular/core';

import { SearchModule }         from './search.js';
import { DumpModule }           from './dump.js';
import { getValueOfTypeModule } from './getValueOfType.js';
import { OrderByModule }        from './orderBy.js';

@NgModule({
	imports: [ SearchModule, DumpModule, getValueOfTypeModule, OrderByModule ],
	exports: [ SearchModule, DumpModule, getValueOfTypeModule, OrderByModule ]
})
export class PipeModules {}