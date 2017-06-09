import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from "./footer/footer.component";
import { SidebarmenuComponent } from "./sidebarmenu/sidebarmenu.component";
import { HeaderComponent } from './header/header.component';

@NgModule( {
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    declarations: [
        FooterComponent,
        SidebarmenuComponent,
        HeaderComponent],
    exports: [FooterComponent,
        SidebarmenuComponent,
        HeaderComponent]
} )
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
        if ( parentModule ) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only' );
        }
    }

}
