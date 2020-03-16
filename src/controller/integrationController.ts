import { controller, httpPost, httpGet } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../constant/types';
import { IntegrationService } from '../services/integrationService';
import OpportunitiesDAO from '../dao/OpportunitiesDAO';

@controller('/pipeline-bling-integration-api')
export class IntegrationController {
  constructor(
    @inject(TYPES.IntegrationService)
    private integrationService: IntegrationService
  ) {}

  @httpGet('/aggregateOpportunities')
  public async aggregateOpportunities(): Promise<any> {
    return OpportunitiesDAO.aggregateOpportunities();
  }

  @httpPost('/integrate')
  public async integrate(): Promise<any> {
    const opportunities = await this.integrationService.integrateWonOpportunitiesBling();

    return opportunities;
  }
}
