import { InjectionToken, Provider, inject } from '@angular/core';

export interface NgIconConfig {
  /** Define the default size of icons */
  size: string;
  /** Define the default color of icons */
  color?: string;
}

export const NgIconConfigToken = new InjectionToken<NgIconConfig>(
  'Ng Icon Config',
);

const defaultConfig: NgIconConfig = {
  size: '1em',
};

/**
 * Provide the configuration for the icons
 * @param config The configuration to use
 */
export function provideNgIconsConfig(config: Partial<NgIconConfig>): Provider {
  return {
    provide: NgIconConfigToken,
    useValue: { ...defaultConfig, ...config },
  };
}

/**
 * Inject the configuration for the icons
 * @returns The configuration to use
 * @internal
 */
export function injectNgIconConfig(): NgIconConfig {
  return inject(NgIconConfigToken, { optional: true }) ?? defaultConfig;
}
