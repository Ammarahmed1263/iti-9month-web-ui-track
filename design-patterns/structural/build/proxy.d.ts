interface Country {
    getCountryInfo(country: string): string;
}
/**
 * Proxy class that implements the same interface as CountryService
 * and adds a caching mechanism to avoid extra calls
 */
export declare class CountryProxy implements Country {
    private countryService;
    private cache;
    getCountryInfo(country: string): string;
}
export {};
//# sourceMappingURL=proxy.d.ts.map