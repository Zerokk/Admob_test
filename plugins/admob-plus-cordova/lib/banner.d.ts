import { AdSizeType, MobileAd, MobileAdOptions } from './shared';
declare type Position = 'top' | 'bottom';
export interface BannerAdOptions extends MobileAdOptions {
    position?: Position;
    size?: AdSizeType;
    offset?: number;
}
export default class BannerAd extends MobileAd<BannerAdOptions> {
    static cls: string;
    private _loaded;
    constructor(opts: BannerAdOptions);
    static config(opts: {
        backgroundColor?: string;
        marginTop?: number;
        marginBottom?: number;
    }): false | Promise<unknown>;
    load(): Promise<void>;
    show(): Promise<unknown>;
    hide(): Promise<unknown>;
}
export {};
