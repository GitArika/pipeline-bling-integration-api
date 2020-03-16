import * as mongoose from 'mongoose';

const opportunitiesSchema = new mongoose.Schema({}, { strict: false });

const Opportunities = mongoose.model('Opportunities', opportunitiesSchema);

export default Opportunities;
