const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { mongourl } = require("./config/key")
const items = require("./model/item")
const Curl = require("curl");


// mongoose.connect(mongourl, { useNewUrlParser: true , useUnifiedTopology:true});
module.exports = (app) => {
    //data type(object)
    const data = {
        name: "Anurag",
        post: "FES",
        company: "readyGo"
    }
    //wish type(array)
    var wish = ["Create", "Read", "insert", "Delete"];
    // CIRD (this is location in LH) render the file in server file name is "CIRD", server only check in views folder and pass the array
    app.get("/CIRD", (req, res) => {
        res.render("CIRD", { CIRD: wish });
    });
    app.get("/data", (req, res) => {
        items.find({}).then(data => {
            //console.log(data);
            res.send(data);
        })
    })

    app.get("/", (req, res) => {//static file send the server request
        res.render("index", { data: data });//res.sendFile(__dirname+"/index.html");
    });//(this is home location) reader the file name index pass the obj with help os res

    app.get("/profile", (req, res) => {
        res.render("profile");
    })//this is profile routes only file has render

    app.get("/id/:id", (req, res) => {
        data = {
            id: req.params.id
        }
        res.render("index", { data: data }) //data is pass the value into page
    });// this dynamic data can pass in server :id (id is like variable which is store any type of data int, char, floaty, string) 

    app.post("/sent", (req, res) => {
        // console.log("this sent post")
        // wish.push(req.body.item)
        // res.send(wish)
        const value = new items({
            item: req.body.item,
            last: req.body.last
        })
        value.save().then(data => {
            console.log("data get");
            res.send(data)
        }).catch(err => {
            throw err;
        })
    })//this post request , which is get req form client


    app.delete("/remove/:id", (req, res) => {
        // wish = wish.map(item => {
        //         if (item != req.params.id) {
        //             return item
        //         }
        //     })
        // console.log("delete item " + req.params.id)
        // res.send(wish)
        items.findOneAndRemove({ _id: req.params.id })
            .then(data => {
                console.log("deleted..")
                res.send(data);
            })
    })
    app.post("/", (req, res) => {
        
    })
}