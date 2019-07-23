$(document).ready(function(){

    console.log("JS linked");

var questionArr = [
    {
        question: "When you need an afternoon pick-me-up, you reach for",
        answers: [
            "Mocha Latte",
            "Decaf Coffe",
            "Green Tea",
            "Cappucino",
            "Non-fat Cappucino",
            "Black Coffee"
        ],
        assignedValue: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    }
];

var index = 0;

function showQuestion(questionArr, index){
    // event.preventDefault();

    $('#questionDisplay').html(questionArr[index].question);

    var answerBoxes = $(`
    <label>
    <input type="checkbox" id="userResponse"/>
    <span>${questionArr[index].answers}</span><br>
    </label>`);

    $('#answerDisplay').html(answerBoxes)

};

showQuestion();

$('#submitBtn').on('click', function(){
    console.log("clicked");

    // var userResponse = $('#userResponse');

    // index++;
});

});