const express = require("express");
const path = require("path");
const { config } = require("./server/config/index");
const frameguard = require("frameguard");
const app = express();

app.use(frameguard({ action: "deny" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    console.log(`__dirname: ${__dirname}`);

    res.sendFile(__dirname + "/public/");
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando por el puerto http://localhost:${process.env.PORT}`);
});