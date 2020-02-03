import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusTrapDirective } from './focus-trap.directive';
import { FocusTrapFactory } from './focus-trap.factory';
import { FocusTrapManager } from './focus-trap-manager';
import { InteractivityChecker } from './interactivity-checker';
import { NgxPlatform } from './platform';

@NgModule({
  imports: [CommonModule],
  declarations: [FocusTrapDirective],
  exports: [FocusTrapDirective]
})
export class FocusTrapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FocusTrapModule,
      providers: [
        FocusTrapFactory,
        FocusTrapManager,
        InteractivityChecker,
        NgxPlatform
      ]
    };
  }
}