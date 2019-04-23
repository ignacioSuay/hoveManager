import { NgModule } from '@angular/core';

import { HoveManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HoveManagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HoveManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HoveManagerSharedCommonModule {}
