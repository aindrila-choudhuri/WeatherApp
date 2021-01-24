const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Main page")
})

app.get("/help", (req, res) => {
    res.send("Help page")
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/weather", (req, res) => {
    res.send("Weather page")
})

app.listen(4004, () => {
    console.log("Server is up at port 4004");
})

const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=ed432f6624849109ddfe24744089cf7b&query=23.2505,91.4676"

request({url}, (err, resp) => {
    const data = JSON.parse(resp.body);
    console.log(data.current);
})