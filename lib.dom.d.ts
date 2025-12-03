/* eslint-disable */
// @ts-nocheck
declare type Recordable<T = any> = Record<string, T>;
declare global {
  interface Window {
    readonly DATAV_MINI3D_DEBUG?: boolean;
    readonly __APP_INFO__: {
      vd?: string;
      [k: string]: any;
    };
    [k: string]: any;
  }
}

export {};
