var express = require("express");
var router = express.Router();
var path = require("path");
 router.get("/",function(req,res){
     //when the router get "/", it will visit a file named"index.html"
     //this file is at the place of "__dirname" means the current location
     //"../../public" means that to go above to the upper location and then find the folder named
     //"pulic", res.sendFile is a method provided by the express library.
     res.sendFile("index.html",{root: path.join(__dirname, '../../public/')});
 });
 module.exports = router;