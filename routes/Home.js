const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({ extended: true }));
const db = require('../db/conn.js');
// console.log(db);

routes.get('/', async (req, res) => {
    var data = {};
    try {
        let TopMovers = await db.collection("topmovers");
        let Trending = await db.collection("trending");
        let NewPlayers = await db.collection("newplayers");
        let tmdata = await TopMovers.find({})
        tmdata = await tmdata.toArray();
        let trndata = await Trending.find({})
        trndata = await trndata.toArray();
        let npdata = await NewPlayers.find({})
        npdata = await npdata.toArray();
        data = { "topmovers": tmdata, "newplayers": npdata, "trending": trndata }
    } catch (error) {
        console.error("Error retrieving blogs:", error);
    }
    res.render('HomePage', { data: data });
})



// I have used this below code to make a post request so that i can save some test data in my database
// and then get that data back and render it on the home page

// routes.post("/", async (req, res) => {
//     let newUsers = [{
//         name: "David Miller",
//         type: "Batsman",
//         team: "GT",
//         rate: "37.81",
//         change: "-16.33%",
//     }, {
//         name: "Kagiso Rabada",
//         type: "Batsman",
//         team: "NZ",
//         rate: "16.56",
//         change: "-0.50%",
//     }, {
//         name: "Hardik Pandya",
//         type: "Batsman Bowler",
//         team: "GT",
//         rate: "32.47",
//         change: "-14.64%",
//     }];
//     let collection = await db.collection("trending");
//     for (let index = 0; index < newUsers.length; index++) {
//         const element = newUsers[index];
//         let result = await collection.insertOne(element);
//         console.log(result);
//     }
//     newUsers = [{
//         name: "Player 1",
//         type: "Batsman",
//         team: "GT",
//         rate: "37.81",
//         change: "-16.33%",
//     }, {
//         name: "Player 2",
//         type: "Batsman",
//         team: "NZ",
//         rate: "16.56",
//         change: "-0.50%",
//     }, {
//         name: "Player 3",
//         type: "Batsman",
//         team: "GT",
//         rate: "32.47",
//         change: "-14.64%",
//     }];
//     collection = await db.collection("newplayers");
//     for (let index = 0; index < newUsers.length; index++) {
//         const element = newUsers[index];
//         let result = await collection.insertOne(element);
//         console.log(result);
//     }
//     newUsers = [{
//         name: "Rishabh Pant",
//         type: "Bowler",
//         country: "IND",
//         rate: "43.04",
//         change: "(+72.64%)",
//     }, {
//         name: "Venkatesh Iyer",
//         type: "Batsman",
//         country: "KKR",
//         rate: "28.51",
//         change: "(+69.80%)",
//     }, {
//         name: "Sourav",
//         type: "Batsman",
//         country: "IND",
//         rate: "100.2",
//         change: "(+100%)",
//     }];
//     collection = await db.collection("topmovers");
//     for (let index = 0; index < newUsers.length; index++) {
//         const element = newUsers[index];
//         let result = await collection.insertOne(element);
//         console.log(result);
//     }
//     res.sendStatus(201);
// });

module.exports = routes