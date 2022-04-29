const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const util = require('util');
const textParser = bodyParser.text();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_SECRET_KEY })
const databaseId = process.env.DATABASE_ID;


const PORT = process.env.PORT || 5000;

const app = express();

var corsOptions = {
  origin: false,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ['GET', 'POST', 'PUT']
}
app.use(express.json());

app.get('/', cors(corsOptions), (req, res) => {
  res.status(200).send(`<h1>server running</h1>`);
});

app.options('/analytics', cors(corsOptions))
app.post('/analytics', cors(corsOptions), textParser, (req, res) => {

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
        if(req.body === reference){
          visits += 1;
          await notion.pages.update({
            page_id: page.id,
            properties: {
              "Visits": {
                "number": visits
              }
            }
          })
        }
        console.log(reference, visits);
      })
    })()

    res.send({success: true});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app