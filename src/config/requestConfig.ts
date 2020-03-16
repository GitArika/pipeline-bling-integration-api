import Constants from '../constant/constants';

const PIPELINE_API_URL = `https://${Constants.company_domain}.pipedrive.com/v1/`;
const PIPELINE_OPPORTUNITIES_URL = `${PIPELINE_API_URL}deals?api_token=${Constants.pipeline_token}`;
const PIPELINE_API_HEADERS = {};
const BLING_API_HEADERS = {};

export { PIPELINE_API_HEADERS, BLING_API_HEADERS, PIPELINE_OPPORTUNITIES_URL };
