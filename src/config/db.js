import mongoose from 'mongoose';
import { getConfig } from './config';
mongoose.Promise = global.Promise;
const config = getConfig(process.env.NODE_ENV);
export const connect = ( ) => mongoose.connect(config.MONGO_URI,{ useNewUrlParser: true });