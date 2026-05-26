const COUNTRIES = {
    USA: "United States of America",
    CAN: "Canada",
    MEX: "Mexico",
    FRA: "France",
    GER: "Germany",
    ITA: "Italy",
    ESP: "Spain",
    RUS: "Russia",
    CHN: "China",
    JPN: "Japan",
};
class CountryService {
    getCountryInfo(country) {
        console.log(`Fetching country info for ${country}...`);
        return COUNTRIES[country] || "Country not found";
    }
}
/**
 * Proxy class that implements the same interface as CountryService
 * and adds a caching mechanism to avoid extra calls
 */
export class CountryProxy {
    countryService = new CountryService();
    cache = new Map();
    getCountryInfo(country) {
        if (this.cache.has(country)) {
            console.log(`[Proxy] Cache hit for ${country}`);
            return this.cache.get(country);
        }
        const countryInfo = this.countryService.getCountryInfo(country);
        this.cache.set(country, countryInfo);
        return countryInfo;
    }
}
//# sourceMappingURL=proxy.js.map