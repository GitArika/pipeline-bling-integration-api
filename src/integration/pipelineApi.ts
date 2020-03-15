import { provide } from 'inversify-binding-decorators';
import TYPES from '../constant/types';
import axios from 'axios';

import {
  PIPELINE_API_HEADERS,
  PIPELINE_DEALS_URL,
} from '../config/requestConfig';

@provide(TYPES.PipelineApi)
export class PipelineApi {
  constructor() {}

  public async findWonOpportunities(): Promise<any> {
    try {
      const opportunities = await axios.get(PIPELINE_DEALS_URL, {
        headers: PIPELINE_API_HEADERS,
        params: { status: 'won' },
      });

      return opportunities.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
