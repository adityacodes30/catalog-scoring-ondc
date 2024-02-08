import app from './server.js'
import dotenv from 'dotenv';
dotenv.config();

app.listen(5008 , ()=>
{
    console.log('on port 5001');
})
