import Opportunities from '../models/opportunitiesSchema';
import * as moment from 'moment';

export default class OpportunitiesDAO {
  public static async saveOpportunities(opportunities: any) {
    for (let opportunity of opportunities) {
      const opportunityExistent = await Opportunities.find({
        originalId: opportunity.originalId,
      });

      if (opportunityExistent.length === 0) {
        opportunity.won_date = moment(opportunity.won_time).format(
          'YYYY-MM-DD'
        );

        opportunity.originalId = opportunity.id;

        Opportunities.create(opportunity);
      }
    }
  }

  public static async aggregateOpportunities() {
    return Opportunities.find();
  }
}
