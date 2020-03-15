import { provide } from 'inversify-binding-decorators';
import TYPES from '../constant/types';

@provide(TYPES.BlingApi)
export class BlingApi {
  constructor() {}

  public async createNewSolicitation(solicitation): Promise<any> {
    //TODO: entender estrutura de pedido Bling
    return {};
  }
}
