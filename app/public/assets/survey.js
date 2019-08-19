//$(document).ready(function () {

    console.log("JS linked");

 

    function runSurveyQuery() {
        $.ajax({ url: "/api/survey", method: "GET" })
            .then(function (friendData) {
                console.log(`${friendData}-------------------------------`);

            })

    };
//    runSurveyQuery();

    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        console.log("submit clicked")
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: $("#")
        }
        console.log(newFriend)
        $.post("/api/survey", newFriend).then(function (serverData) {
            console.log(serverData);
            console.log("added")
        })

    })
//});
