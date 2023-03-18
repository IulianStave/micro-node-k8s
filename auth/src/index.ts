import express from 'express';

import {json} from 'body-parser';

// use json as middleware
const app = express();
app.use(json());

const PORT = 3000;

app.listen(PORT, () => {
    // console.log('Listening on port 3000!');
    console.log(`Listening on port: ${PORT}`)
});