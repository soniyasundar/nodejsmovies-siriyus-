var express = require('express');
var router = express.Router();
var movies = require('express');
var mongoClient=require('mongodb').MongoClient
var db;

mongoClient.connect("mongodb://127.0.0.1:27017",function(err,connection){
    db=connection.db("projector");
})
/* GET users listing. */
router.get('/all', function(req, res, next) {
    var moviesCollection=db.collection("movies")
    moviesCollection.find().toArray(function(err,data){
        res.json(data);
    })
});

router.get('/:movieName', function(req, res, next) {
    var p=req.params.movieName;
    console.log(p);
    var moviesCollection=db.collection("movies")
    moviesCollection.find({"name":p}).toArray(function(err,data){
        res.json(data);
        });
    });

router.post('/addmovie', function(req, res, next) {
    var q=req.body;
    console.log(q);
    var moviesCollection=db.collection("movies")
    moviesCollection.insert(movie,function(err,data){
        if(!err){
            return res.json({
                isSucess : true
            });
        }
        else{
            return res.json({
                isSucess : false
            });
        }
    })
});


module.exports = router;
