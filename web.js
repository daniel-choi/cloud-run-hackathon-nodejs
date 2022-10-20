const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("Let the battle begin!");
});

const shootOrTurn = () => {};

let count = 0;

app.post("/", function (req, res) {
    console.log(JSON.stringify(req.body));
    const moves = ["F", "T", "L", "R"];

    // const dims = req.body.arena.dims;
    // const states = req.body.arena.state;
    // const me =
    //     states["https://cloud-run-hackathon-nodejs-nnwktxrvja-uc.a.run.app"];
    // console.log("ME");
    // console.log(me);
    // delete states["https://cloud-run-hackathon-nodejs-nnwktxrvja-uc.a.run.app"];

    // console.log(states);

    // const stateArr = Object.values(states);

    // console.log(stateArr);
    // let xmap = [];
    // let ymap = [];
    // if (me.direction == "N" || me.direction == "S") {
    //     for (let i = 0; i < stateArr.length; i++) {
    //         const state = stateArr[i];
    //         if (me.y == state.y) {
    //             xmap.push(state.x - me.x);
    //         }
    //         if (me.x == state.x) {
    //             ymap.push(state.y - me.y);
    //         }
    //     }
    // } else {
    //     for (let i = 0; i < stateArr.length; i++) {
    //         const state = stateArr[i];
    //         if (me.y == state.y) {
    //             xmap.push(state.x - me.x);
    //         }
    //         if (me.x == state.x) {
    //             ymap.push(state.y - me.y);
    //         }
    //     }
    // }

    // const xs = stateArr.map((state) => state.x);
    // const ys = stateArr.map((state) => state.y);

    // console.log(xs.sort());
    // console.log(ys.sort());

    // const state = getShortestState(states);

    // TODO add your implementation here to replace the random response

    if (count < 5) {
        count++;
        res.send("T");
    } else {
        count = 0;
        res.send("R");
    }
});

app.listen(process.env.PORT || 8080);
