import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import './src/ioc/loader';
import { Container } from 'inversify';
import { IntegrationService } from './src/services/integrationService';
import TYPES from './src/constant/types';
import { BlingApi } from './src/integration/blingApi';
import { PipelineApi } from './src/integration/pipelineApi';

let container = new Container();
container
  .bind<IntegrationService>(TYPES.IntegrationService)
  .to(IntegrationService);
container.bind<BlingApi>(TYPES.BlingApi).to(BlingApi);
container.bind<PipelineApi>(TYPES.PipelineApi).to(PipelineApi);
// start the server
let server = new InversifyExpressServer(container);

server.setConfig(theApp => {
  theApp.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  theApp.use(bodyParser.json());
  theApp.use(helmet());
  theApp.use(cors());
});

let app = server.build();

app.listen(8081);
console.log('Server started on port 8081');

exports = module.exports = app;
