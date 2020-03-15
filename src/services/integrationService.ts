import { provide } from 'inversify-binding-decorators';
import { inject } from 'inversify';
import { PipelineApi } from '../integration/pipelineApi';
import TYPES from '../constant/types';
import { BlingBuilder } from '../builder/blingBuilder';
import { BlingApi } from '../integration/blingApi';

@provide(TYPES.IntegrationService)
export class IntegrationService {
  constructor(
    @inject(TYPES.PipelineApi) private pipelineApi: PipelineApi,
    @inject(TYPES.BlingApi) private blingApi: BlingApi
  ) {}

  public async integrateWonOpportunitiesBling(): Promise<any> {
    const opportunities = await this.pipelineApi.findWonOpportunities();
    const blingSolicitation = await this.createBlingSolicitation(opportunities);

    return blingSolicitation;
  }

  public async createBlingSolicitation(opportunities: any) {
    const pedido = BlingBuilder.buildSome(opportunities);

    const response = await this.blingApi.createNewSolicitation(pedido);

    return response;
  }
}
