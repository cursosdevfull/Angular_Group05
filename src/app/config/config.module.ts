import { ModuleWithProviders, NgModule } from '@angular/core';
import { Config } from './layer.interface';
import { AMB_CONFIG } from './token';

@NgModule()
export class ConfigModule {
  static forRoot(config: Config): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [{ provide: AMB_CONFIG, useValue: config }],
    };
  }
}
