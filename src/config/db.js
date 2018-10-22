import mongoose from 'mongoose';
import { getConfig } from './config';
mongoose.Promise = global.Promise;
const config = getConfig(process.env.NODE_ENV);
export const connect = ( ) => mongoose.connect( "mongodb://root:root123@ds137763.mlab.com:37763/rkmusic_api",{ useNewUrlParser: true });