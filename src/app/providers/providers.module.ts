import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeService } from './office.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule
  ], 
})

export class ProvidersModule {

 constructor(@Optional() @SkipSelf() parentModule?: ProvidersModule) {
    if (parentModule) {
      throw new Error(
        'ProvidersModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<ProvidersModule> {
    return {
      ngModule: ProvidersModule,
      providers: [
        { provide: OfficeService }
      ]
    };
  }
  
}
