'use strict';
const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const util = require('util');
const textParser = bodyParser.text();
const cors = require('cors');
const serverless = require('serverless-http')
const dotenv = require('dotenv');
dotenv.config();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_SECRET_KEY })
const databaseId = process.env.DATABASE_ID;


const app = express();

var corsOptions = {
  origin: '',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ['GET', 'POST', 'PUT']
}
app.use(express.json());

// app.options('/', cors(corsOptions))
router.post('/', textParser, (req, res) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    async function datafetch(){
      const data = await notion.databases.query({ 
        database_id: databaseId
      });
      return data;
    }

    (async() => {
      const db = await datafetch();
      db.results.forEach(async(page) => {
        let reference = page.properties.Name.title[0].text.content;
        let visits = page.properties.Visits.number;
        if(req.body == reference){
          visits += 1;
          await notion.pages.update({
            page_id: page.id,
            properties: {
              "Visits": {
                "number": visits
              }
            }
          })
          res.status(200).json({success: true, reference: reference, visits: visits, payload: req.body});
        } else {
          res.status(200).json({message: 'data not inserted'})
        }
      })
    })()

})

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.status(200).sendFile('index.html', {root: './src'});
});

app.use(`/.netlify/functions/api`, router);

module.exports = app
module.exports.handler = serverless(app)