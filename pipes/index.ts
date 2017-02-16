import { NgModule }             from '@angular/core';

import { SearchModule }         from './search.js';
import { DumpModule }           from './dump.js';
import { getValueOfTypeModule } from './getValueOfType.js';
import { OrderByModule }        from './orderBy.js';
import { HighlightModule }      from './highlight.js';

@NgModule({
	imports: [ SearchModule, DumpModule, getValueOfTypeModule, OrderByModule, HighlightModule ],
	exports: [ SearchModule, DumpModule, getValueOfTypeModule, OrderByModule, HighlightModule ]
})
export class PipeModules {}