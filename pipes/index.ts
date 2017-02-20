import { NgModule }             from '@angular/core';

import { SearchModule }         from './search.js';
import { DumpModule }           from './dump.js';
import { getValueOfTypeModule } from './getValueOfType.js';
import { OrderByModule }        from './orderBy.js';
import { HighlightModule }      from './highlight.js';
import { TranslateModule }      from './translate.js';

@NgModule({
	imports: [ SearchModule, DumpModule, getValueOfTypeModule, OrderByModule, HighlightModule, TranslateModule ],
	exports: [ SearchModule, DumpModule, getValueOfTypeModule, OrderByModule, HighlightModule, TranslateModule ]
})
export class PipeModules {}

