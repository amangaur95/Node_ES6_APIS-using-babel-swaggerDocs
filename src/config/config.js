 const config = {
    production:{
        secret: process.env.secret,
        MONGO_URI:process.env.MONGO_URI,
        port: process.env.PORT  
     },
     devlopment:{
         secret:'I_AM_Rajneesh',
         MONGO_URI:'mongodb://localhost/rkmusic_api',
         port:8000,  
     },
};
export const getConfig = env => config[env] ||  config.development;