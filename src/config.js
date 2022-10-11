import { config }  from "dotenv"

config();

export default{
    port: process.env.PORT||3001,
    dbUser:process.env.DB_USER || '',
    dbPassword:process.env.DB_PASSWROD||'',
    dbServer:process.env.DB_SERVER||'',
    dbDatabase:process.env.DB_DATABASE||'',
};