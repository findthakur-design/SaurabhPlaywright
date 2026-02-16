import * as dotenv from 'dotenv';

export const getenv = ()=>{
    dotenv.config({ override: true, path: `./resources/.env.${process.env.ENV}` });
}
