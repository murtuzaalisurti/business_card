const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const util = require('util');
const textParser = bodyParser.text();
const dotenv = require('dotenv');
dotenv.config();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_SECRET_KEY })
const databaseId = process.env.DATABASE_ID;


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({data: 'data'})
})

app.post('/analytics', textParser, (req, res) => {

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
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});