const COUNTRIES: { [key: string]: string } = {
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

interface Country {
  getCountryInfo(country: string): string;
}

class CountryService implements Country {
  getCountryInfo(country: string) {
    console.log(`Fetching country info for ${country}...`);
    return COUNTRIES[country] || "Country not found";
  }
}

/**
 * Proxy class that implements the same interface as CountryService
 * and adds a caching mechanism to avoid extra calls
 */
export class CountryProxy implements Country {
  private countryService: CountryService = new CountryService();

  private cache = new Map<string, string>();

  getCountryInfo(country: string) {
    if (this.cache.has(country)) {
      console.log(`[Proxy] Cache hit for ${country}`);
      return this.cache.get(country)!;
    }

    const countryInfo = this.countryService.getCountryInfo(country);
    this.cache.set(country, countryInfo);
    return countryInfo;
  }
}
