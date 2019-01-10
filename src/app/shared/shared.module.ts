import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';

import { PresetFilterComponent } from './components/preset-filter/preset-filter.component';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        NgbModule,
        LayoutModule,
        ButtonsModule,
        DropDownsModule,
        InputsModule,
        GridModule
    ],
    exports: [
        FormsModule,
        MainMenuComponent,
        SideMenuComponent,
        PresetFilterComponent,
        NgbModule,
        LayoutModule,
        ButtonsModule,
        DropDownsModule,
        InputsModule,
        GridModule
    ],
    declarations: [
        MainMenuComponent,
        SideMenuComponent,
        PresetFilterComponent
    ],
    providers: [],
})
export class SharedModule { }
