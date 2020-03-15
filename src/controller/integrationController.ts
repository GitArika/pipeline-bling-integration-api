import { controller, httpPost } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../constant/types';
import { IntegrationService } from '../services/integrationService';

@controller('/pipeline-bling-integration-api')
export class IntegrationController {
  constructor(
    @inject(TYPES.IntegrationService)
    private integrationService: IntegrationService
  ) {}

  @httpPost('/integrate')
  public async integrate(): Promise<any> {
    const opportunities = await this.integrationService.integrateWonOpportunitiesBling();

    return opportunities;
  }
}
