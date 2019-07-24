$(document).ready(function(){

    console.log("JS linked");

    $("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
    
function runSurveyQuery(){
    $.ajax({ url: "/api/survey", method: "GET"})
.then(function(friendData){
console.log(`${friendData}
-------------------------------`);

})

};
runSurveyQuery();

$("#submitBtn").on("click", function(event){
    event.preventDefault;
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [],
    }
        $.post("/survey", newFriend).then(function(serverData){
            console.log(serverData);
            alert("added")
        })
    
})
});