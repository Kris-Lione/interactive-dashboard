// Put your JavaScript code in this file
<<<<<<< HEAD
function displayAnswer() {
    // Possible answers for the 8 ball to display.
    // Added a interesting 8th answer.
    let answers = ["Outlook Good", "Without a doubt", "Yes", "Don't count on it", "My reply is no", "Very doubtful", "Ask again later", "Help me this is not a magic 8 ball I have been trapped in this spherical prison for months!"]
    // Generates a random index, used to pick a random answer from the array later.
    randomIndex = Math.floor(Math.random() * answers.length);

    result = answers[randomIndex]

    // Suppost to display the result from calculations in the function.
    document.getElementById("circle").innerHTML = result;
}

// Suppost to grab info from the magicEightBall being clicked, and checking the question the user inputs.
var m8Ball = document.getElementById("magicEightBall");
var magicQuestion = document.getElementById("question");

// Listens for mousedown, and checks if there if an answer is submitted.
m8Ball.addEventListener("mousedown", function(){
    
   if (magicQuestion = null){
    alert("Please enter a question!")
   }

   else{
    displayAnswer()
   };
});
=======

>>>>>>> development
