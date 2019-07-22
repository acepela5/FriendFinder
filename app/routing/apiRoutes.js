var friendData = require("../data/friend");

module.exports = function(app){
    app.get("/api/friend", function(require, response){
        response.json(friendData);
    });

    app.post("/api/friend", function(require, response){
        friendData.length = 0;

        response.json({ok:true});
    });
};

