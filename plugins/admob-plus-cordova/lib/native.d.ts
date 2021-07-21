import { MobileAd, MobileAdOptions } from './shared';
declare type ShowOptions = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export default class NativeAd extends MobileAd<MobileAdOptions & {
    view?: string;
}> {
    static cls: string;
    isLoaded(): Promise<boolean>;
    hide(): Promise<unknown>;
    show(opts?: ShowOptions): Promise<unknown>;
    showWith(elm: HTMLElement): Promise<void>;
}
export {};
