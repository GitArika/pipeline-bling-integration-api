import { provide } from 'inversify-binding-decorators';
import TYPES from '../constant/types';
import axios from 'axios';

import {
  PIPELINE_API_HEADERS,
  PIPELINE_OPPORTUNITIES_URL,
} from '../config/requestConfig';

@provide(TYPES.PipelineApi)
export class PipelineApi {
  constructor() {}

  public async findWonOpportunities(): Promise<any> {
    try {
      const response = await axios.get(PIPELINE_OPPORTUNITIES_URL, {
        headers: PIPELINE_API_HEADERS,
        params: { status: 'won' },
      });

      return this.getResponseData(response);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  // FIXME: Refatorar método.
  private getResponseData(response: any) {
    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return [];
  }
}
