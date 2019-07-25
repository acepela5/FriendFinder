var friendData = require("../data/friend.js");

module.exports = function(app){
    app.get("/api/survey", function(request, response){
        response.json(friendData);
    });

    app.post("/api/survey", function(request, response){
        console.log("post survey back", request.body)
       // friendData.length = 0;

        //response.json({ok:true});

        var userInputMessageBodyObject = request.body;
        var totalDifference = 0;
        var result = 0;

        var newArrayWithTotalDifference = [];
        
        for(var i = 0; i < friendData.length; i++){
            totalDifference = 0;
            for(var j = 0; j < userInputMessageBodyObject; j++){
                result = Math.abs(friendData[i].scores[j] - userInputMessageBodyObject.scores[j])
                // totalDifference += Math.abs(result)
            }
            newArrayWithTotalDifference.push({
                friendData: friendData[i].name,
                totalDifference: totalDifference,
                photo: friendData[i].photo
            })
        }

        friendData.push(userInputMessageBodyObject);

        newArrayWithTotalDifference.sort(function(a, b){
            return a.totalDifference - b.totalDifference
        })

        console.log(newArrayWithTotalDifference)

        response.json(newArrayWithTotalDifference[0]);
    });
};

