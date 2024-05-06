const path=require('path');
require('dotenv').config({path:`.env.${process.env.NODE_ENV}`});

module.exports={
    nodeenv: process.env.NODE_ENV,
    port: process.env.PORT

}