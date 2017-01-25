"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AppComponent = (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        this.disabled = true;
        /** Code strings **/
        this.sample00ts = "\n<pre><code class=\"typescript\">characters: Array&lt;any&gt;;\n\nngOnInit() {\n    this.characters = [\n        {value: '0', label: 'Aech'},\n        {value: '1', label: 'Art3mis'},\n        {value: '2', label: 'Daito'},\n        {value: '3', label: 'Parzival'},\n        {value: '4', label: 'Shoto'}\n    ];\n}\n</code></pre>";
        this.sample00html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample01html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [multiple]=\"true\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample02html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [disabled]=\"disabled\"&gt;\n&lt;/ng-select&gt;\n&lt;button\n    [disabled]=\"disabled\"\n    (click)=\"onDisableClick()\"&gt;\n    Disable\n&lt;/button&gt;\n&lt;button\n    [disabled]=\"!disabled\"\n    (click)=\"onEnableClick()\"&gt;\n    Enable\n&lt;/button&gt;\n</code></pre>";
        this.sample02ts = "\n<pre><code class=\"typescript\">disabled: boolean = true;\n\nonDisableClick() {\n    this.disabled = true;\n}\n\nonEnableClick() {\n    this.disabled = false;\n}\n</code></pre>";
        this.sample03html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample04html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [allowClear]=\"true\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample05html = "\n<pre><code class=\"html\">&lt;ng-select\n    #clearSelectExample\n    [options]=\"characters\"\n    [multiple]=\"true\"&gt;\n&lt;/ng-select&gt;\n&lt;button\n    (click)=\"clearSelectExample.clear()\"&gt;\n    Clear selection\n&lt;/button&gt;\n</code></pre>";
        this.sample06html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [allowClear]=\"true\"\n    placeholder=\"Select one of the characters\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample07html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [multiple]=\"true\"\n    placeholder=\"Select characters\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample08html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    notFoundMsg=\"None of the characters match your search\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample09html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [ngStyle]=\"{'width': '300px'}\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample10html = "\n<pre><code class=\"html\">&lt;div&gt;\n    Value: &lt;strong&gt;{{selectedValues}}&lt;/strong&gt;\n&lt;/div&gt;\n&lt;ng-select\n    [options]=\"characters\"\n    [multiple]=\"true\"\n    [(ngModel)]=\"selectedValues\"&gt;\n&lt;/ng-select&gt;\n&lt;button\n    (click)=\"selectedValues=['1','3']\"&gt;\n    Select values 1 and 3\n&lt;/button&gt;\n</code></pre>";
        this.sample11html = "\n<pre><code class=\"html\">&lt;div&gt;\n    Last event: &lt;strong&gt;{{lastEvent}}&lt;/strong&gt;\n&lt;/div&gt;\n&lt;ng-select\n    [options]=\"characters\"\n    [multiple]=\"true\"\n    (selected)=\"lastEvent='selected ' + $event.label\"\n    (deselected)=\"lastEvent='deselected ' + $event.label\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample12html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample12ts = "\n<pre><code class=\"typescript\">disabled: boolean = true;\n\nonDisableClick() {\n    this.disabled = true;\n}\n\nonEnableClick() {\n    this.disabled = false;\n}\n</code></pre>";
        this.sample13html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [multiple]=\"true\"\n    highlightColor=\"#B39DDB\"\n    highlightTextColor=\"#4527A0\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample14html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [noFilter]=\"10\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample15html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"characters\"\n    [multiple]=\"true\"\n    [noFilter]=\"10\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample16html = "\n<pre><code class=\"html\">&lt;ng-select\n    [options]=\"delayedCharacters\"&gt;\n&lt;/ng-select&gt;\n</code></pre>";
        this.sample16ts = "\n<pre><code class=\"typescript\">delayedCharacters: Array<any>;\n\nonInit() {\n    setTimeout(() => {\n        this.delayedCharacters = [\n            {value: '0', label: 'Aech'},\n            {value: '1', label: 'Art3mis'},\n            {value: '2', label: 'Daito'},\n            {value: '3', label: 'Parzival'},\n            {value: '4', label: 'Shoto'}\n        ];\n    }, 5000);\n}\n</code></pre>";
        this.sample17html = "\n<pre><code class=\"html\">&lt;div class=\"value-bar\"&gt;\n    &lt;div&gt;Value: &lt;strong&gt;{{updatedOptionsValue}}&lt;/strong&gt;&lt;/div&gt;\n&lt;/div&gt;\n&lt;ng-select\n    [options]=\"updatedCharacters\"\n    [multiple]=\"true\"\n    [(ngModel)]=\"updatedOptionsValue\"&gt;\n&lt;/ng-select&gt;\n&lt;button\n    (click)=\"updatedCharacters=characters\"&gt;\n    All options\n&lt;/button&gt;\n&lt;button\n    (click)=\"updatedCharacters=characters.slice(0, 2)\"&gt;\n    First two options\n&lt;/button&gt;\n</code></pre>";
        this.sample17ts = "\n<pre><code class=\"typescript\">updatedCharacters: Array<any>;\ncharacters: Array<any> = [\n    {value: '0', label: 'Aech'},\n    {value: '1', label: 'Art3mis'},\n    {value: '2', label: 'Daito'},\n    {value: '3', label: 'Parzival'},\n    {value: '4', label: 'Shoto'}\n];\n\nonInit() {\n    this.updatedCharacters = this.characters;\n}\n</code></pre>";
        this.sample18html = "\n<pre><code class=\"html\">&lt;div&gt;Value: &lt;strong&gt;{{form.value.select}}&lt;/strong&gt;&lt;/div&gt;\n&lt;div&gt;Control touched: &lt;strong&gt;{{form.controls['select'].touched}}&lt;/strong&gt;&lt;/div&gt;\n&lt;div&gt;Form valid: &lt;strong&gt;{{form.valid}}&lt;/strong&gt;&lt;/div&gt;\n&lt;form&gt;\n    &lt;ng-select\n        formControlName=\"select\"\n        [options]=\"characters\"\n        [multiple]=\"true\"&gt;\n    &lt;/ng-select&gt;\n&lt;/form&gt;\n</code></pre>";
        this.sample18ts = "\n<pre><code class=\"typescript\">form: FormGroup;\n\nngOnInit() {\n    this.form = new FormGroup({});\n    let c: FormControl = new FormControl('', Validators.required);\n    this.form.addControl('select', c);\n}\n</code></pre>";
        /** Sample data **/
        this.OPTIONS_BASIC = [
            { value: '0', label: 'Aech' },
            { value: '1', label: 'Art3mis' },
            { value: '2', label: 'Daito' },
            { value: '3', label: 'Parzival' },
            { value: '4', label: 'Shoto' }
        ];
        this.OPTIONS_BASIC_FIRST_TWO = [
            { value: '0', label: 'Aech' },
            { value: '1', label: 'Art3mis' }
        ];
        this.OPTIONS_BASIC_WITH_DISABLED = [
            { value: '0', label: 'Aech' },
            { value: '1', label: 'Art3mis' },
            { value: '2', label: 'Daito', disabled: true },
            { value: '3', label: 'Parzival', disabled: true },
            { value: '4', label: 'Shoto' }
        ];
        this.OPTIONS_MANY = [
            { label: 'Agrajag', value: '0' },
            { label: 'Mrs Alice Beeblebrox', value: '1' },
            { label: 'The Allitnils', value: '2' },
            { label: 'Almighty Bob', value: '3' },
            { label: 'Anjie', value: '4' },
            { label: 'Arcturan Megafreighter crew', value: '5' },
            { label: 'Aseed', value: '6' },
            { label: 'Barmen', value: '7' },
            { label: 'Barman of the Horse and Groom', value: '8' },
            { label: 'Barman in Old Pink Dog Bar', value: '9' },
            { label: 'Barman in the Domain of the King', value: '10' },
            { label: 'BBC department head', value: '11' },
            { label: 'Blart Versenwald III', value: '12' },
            { label: 'Bodyguard', value: '13' },
            { label: 'Caveman', value: '14' },
            { label: 'Colin', value: '15' },
            { label: 'Constant Mown', value: '16' },
            { label: 'Dr. Dan Streetmentioner', value: '17' },
            { label: 'Deep Thought', value: '18' },
            { label: 'Dionah Carlinton Housney', value: '19' },
            { label: 'Disaster Area\'s chief research accountant', value: '20' },
            { label: 'Dish of the Day', value: '21' },
            { label: 'East River Creature', value: '22' },
            { label: 'Eccentrica Gallumbits', value: '23' },
            { label: 'Eddie', value: '24' },
            { label: 'Effrafax of Wug', value: '25' },
            { label: 'Elders of Krikkit', value: '26' },
            { label: 'Elvis Presley', value: '27' },
            { label: 'Emily Saunders', value: '28' },
            { label: 'Emperor of the Galaxy', value: '29' },
            { label: 'Mrs Enid Kapelsen', value: '30' },
            { label: 'Eric Bartlett', value: '31' },
            { label: 'Fenchurch', value: '32' },
            { label: 'Frankie and Benjy Mouse', value: '33' },
            { label: 'Frat Gadz', value: '34' },
            { label: 'Frogstar Prisoner Relations Officer', value: '35' },
            { label: 'Gag Halfrunt', value: '36' },
            { label: 'Gail Andrews', value: '37' },
            { label: 'Gargravarr', value: '38' },
            { label: 'Garkbit', value: '39' },
            { label: 'Genghis Temüjin Khan', value: '40' },
            { label: 'Girl with a Master\'s degree', value: '41' },
            { label: 'God', value: '42' },
            { label: 'Gogrilla Mincefriend', value: '43' },
            { label: 'Golgafrinchans', value: '44' },
            { label: 'Agda and Mella', value: '45' },
            { label: 'Captain', value: '46' },
            { label: 'Great Circling Poets of Arium', value: '47' },
            { label: 'Hairdresser', value: '48' },
            { label: 'Management consultant', value: '49' },
            { label: 'Marketing girl', value: '50' },
            { label: 'Number One', value: '51' },
            { label: 'Number Two', value: '52' },
            { label: 'Telephone Sanitizer', value: '53' },
            { label: 'Googleplex Starthinker', value: '54' },
            { label: 'Great Green Arkleseizure', value: '55' },
            { label: 'Great Hyperlobic Omnicognate Neutron Wrangler', value: '56' },
            { label: 'Grunthos the Flatulent', value: '57' },
            { label: 'Guide Mark II', value: '58' },
            { label: 'Hactar', value: '59' },
            { label: 'Haggunenon Underfleet Commander', value: '60' },
            { label: 'Heimdall', value: '61' },
            { label: 'Hig Hurtenflurst', value: '62' },
            { label: 'Hillman Hunter', value: '63' },
            { label: 'Hotblack Desiato', value: '64' },
            { label: 'Humma Kavula', value: '65' },
            { label: 'Hurling Frootmig', value: '66' },
            { label: 'Ix', value: '67' },
            { label: 'Judiciary Pag', value: '68' },
            { label: 'Karl Mueller', value: '69' },
            { label: 'Know-Nothing Bozo the Non-Wonder Dog', value: '70' },
            { label: 'Krikkiters', value: '71' },
            { label: 'Kwaltz', value: '72' },
            { label: 'Lady Cynthia Fitzmelton', value: '73' },
            { label: 'The Lajestic Vantrashell of Lob', value: '74' },
            { label: 'Lallafa', value: '75' },
            { label: 'Lazlar Lyricon', value: '76' },
            { label: 'Lig Lury, Jr', value: '77' },
            { label: 'Lintilla', value: '78' },
            { label: 'Loonquawl and Phouchg', value: '79' },
            { label: 'The Lord', value: '80' },
            { label: 'Lord High Sanvalvwag of Hollop', value: '81' },
            { label: 'Lunkwill and Fook', value: '82' },
            { label: 'Magician', value: '83' },
            { label: 'Majikthise and Vroomfondel', value: '84' },
            { label: 'Max Quordlepleen', value: '85' },
            { label: 'Mo Minetti', value: '86' },
            { label: 'Murray Bost Henson', value: '87' },
            { label: 'Old Man on the Poles', value: '88' },
            { label: 'Old Thrashbarg', value: '89' },
            { label: 'Old Woman in the Cave', value: '90' },
            { label: 'Oolon Colluphid', value: '91' },
            { label: 'Paul Neil Milne Johnstone', value: '92' },
            { label: 'Phouchg and Loonquawl', value: '93' },
            { label: 'Poodoo', value: '94' },
            { label: 'Prak', value: '95' },
            { label: 'Pralite monks', value: '96' },
            { label: 'President Hudson', value: '97' },
            { label: 'Princess Hooli', value: '98' },
            { label: 'Mr Prosser', value: '99' },
            { label: 'Prostetnic Vogon Jeltz', value: '100' },
            { label: 'Questular Rontok', value: '101' },
            { label: 'Raffle ticket woman', value: '102' },
            { label: 'Random Dent', value: '103' },
            { label: 'Receptionists', value: '104' },
            { label: 'New York Hotel receptionist', value: '105' },
            { label: 'Megadodo receptionist', value: '106' },
            { label: 'Reg Nullify', value: '107' },
            { label: 'Rob McKenna', value: '108' },
            { label: 'Roosta', value: '109' },
            { label: 'The Ruler of the Universe', value: '110' },
            { label: 'Russell', value: '111' },
            { label: 'Safety and Civil Reassurance Administration Officials', value: '112' },
            { label: 'Sheila Steafel', value: '113' },
            { label: 'Shooty and Bang Bang', value: '114' },
            { label: 'Six Men', value: '115' },
            { label: 'Slartibartfast', value: '116' },
            { label: 'Sperm Whale', value: '117' },
            { label: 'Stavro Mueller', value: '118' },
            { label: 'Strinder the Tool Maker', value: '119' },
            { label: 'Sulijoo', value: '120' },
            { label: 'Thor', value: '121' },
            { label: 'Tribesmen of the Cold Hillsides', value: '122' },
            { label: 'Trin Tragula', value: '123' },
            { label: 'Varntvar The Priest', value: '124' },
            { label: 'Veet Voojagig', value: '125' },
            { label: 'Vroomfondel and Majikthise', value: '126' },
            { label: 'War Command Krikkiters', value: '127' },
            { label: 'Will Smithers', value: '128' },
            { label: 'The Wise Old Bird', value: '129' },
            { label: 'Werdle Sneng', value: '130' },
            { label: 'Wonko the Sane', value: '131' },
            { label: 'Wowbagger, the Infinitely Prolonged', value: '132' },
            { label: 'Yooden Vranx', value: '133' },
            { label: 'Zaphod Beeblebrox the Fourth', value: '134' },
            { label: 'Zarniwoop [Vann Harl]', value: '135' },
            { label: 'Zarquon', value: '136' },
            { label: 'Zem', value: '137' }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new forms_1.FormGroup({});
        var c = new forms_1.FormControl('', forms_1.Validators.required);
        this.form.addControl('select', c);
        this.updatedOptions = this.OPTIONS_BASIC;
        setTimeout(function () {
            _this.delayedOptions = _this.OPTIONS_BASIC;
        }, 5000);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        hljs.initHighlighting();
        var nodes = this.elementRef
            .nativeElement
            .querySelectorAll('.typescript, .html, .css');
        for (var i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    };
    AppComponent.prototype.onDisableClick = function () {
        this.disabled = true;
    };
    AppComponent.prototype.onEnableClick = function () {
        this.disabled = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
