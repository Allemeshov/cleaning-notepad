import {ApiRegions} from "../../types/api-regions.type";
import {environment} from "../../../../environments/environment";

export class ApiService {
  private readonly apiUrl: string;
  private readonly apiRegion: ApiRegions;
  private _url: string;

  constructor(apiRegion: ApiRegions) {
    this.apiUrl = environment.apiUrl;
    this.apiRegion = apiRegion;

    this._url = `${this.apiUrl}/${this.apiRegion}/`;
  }

  /**
   * Generates URL string with already defined {@link apiUrl}, {@link apiRegion}
   * and passed {@link endPoint}.
   *
   * @param endPoint Endpoint name in the generating URL.
   *
   * @return URL with defined params.
   *
   * @example
   * Possible URL is https://birdegop.ru/api/some-api-region/some-endpoin-name
   */
  protected url(endPoint: string): string {
    return this._url + endPoint;
  }
}

