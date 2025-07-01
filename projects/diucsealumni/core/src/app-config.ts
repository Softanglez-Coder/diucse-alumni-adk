import { InjectionToken } from "@angular/core";

export class AppConfig {
    apiBaseUrl!: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');