const textInBox = document.querySelector('#textInBox');
const answerInput = document.getElementById('answer');
const answerBox = document.getElementById('answerBox');
const submitButton = document.getElementById('submitButton');
let i = 0;
let n = 0;
let answers = [];

// Function to store the answer when the user submits
function storeAnswer() {
    if (answerInput && answerInput.value.trim()) {
        // Store the answer in lowercase
        const currentAnswer = answerInput.value.trim().toLowerCase();
        
        // Check the answer based on the current question number
        if (n === 0) {
            checkAnswer(currentAnswer);
        } else if (n === 1) {
            checkAnswer1(currentAnswer);
        }
        
        // Clear the input field after storing
        answerInput.value = '';
    } else {
        alert("Please enter an answer before submitting.");
    }
}

// Function to check the answer for the first quiz question
function checkAnswer(answer) {
    if (answer === '26') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = 'The atomic number is literally the number of protons in the nucleus. And as it is an atom, it must be neutrally charged, and thus the number of electrons is the same! Guess they like to keep life balanced eh? Anyways...';
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to check the answer for the second quiz question
function checkAnswer1(answer) {
    if (answer === '30') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = 'As both protons and neutrons have the relative mass of 1, and electrons have too little of a mass, Number of neutrons is just equal to atomic number - atomic mass!';
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to manage dialogue text changes
function changeText() {
    if (i === 0) {
        textInBox.innerHTML = "With a bang (obviously) Henrey Moseley’s X-ray machine explodes, obliterating all his notes on atomic numbers, his new way of classifying elements.";
        i++;
    } else if (i === 1) {
        textInBox.innerHTML = "Henry Moseley is the Scientist who gave our periodic table its modern periodicity. <br>He worked out that the thing responsible for the sorting of elements is the atomic number, and thus he made the hypothesis, well, atleast in the other timeline. Here, it's our job to remind him.";
        i++;
    } else if (i === 2) {
        textInBox.innerHTML = "Nothing too long, afterall it is a quick stop, we will just write out the sub-atomic particle amounts of one element and get going. Quick inspiration really.";
        i++;
    } else if (i === 3) {
        // Show the quiz question
        textInBox.innerHTML = "Take a good look at this element: <br> <img class='iron' src='https://www.chemistrylearner.com/wp-content/uploads/2018/08/Iron-Symbol-768x768.jpg'> Let's start simple, What is its number of protons equal to(Hint: It is also equal to the number of electrons)...";
        answerBox.style.opacity = 1; // Show answer box for the first question
        i++;
    } else if (i === 4) {
        textInBox.innerHTML = "Then accordingly: <br> <img class='iron' src='https://www.chemistrylearner.com/wp-content/uploads/2018/08/Iron-Symbol-768x768.jpg'> What is its number of neutrons equal to(rounding mass to nearest whole number)...";
        answerBox.style.opacity = 1; // Show answer box for the second question
        n = 1; // Set n to 1 to indicate we are on the second question
        i++; // Move to the next dialogue state
    } else if (i === 5) {
        textInBox.innerHTML = "Guess that should be it. Just cross your fingers and hope that when Moseley wakes up, he remembers what he was doing.";
        answerBox.style.opacity = 0; // Hide answer box after completing the quiz
        i++;
    } else if (i === 7) {
        textInBox.innerHTML = "Next Stop: End";
        document.querySelector('.nextStop').setAttribute("href", "../end/endIndex.html");
    } else if (i === 6){
        textInBox.innerHTML = "Then traveller, you have done a great job, and we have come a long way, through many challenges, and time storms, did not know that was a thing eh now did ya? Bet those Kadoosh Caliphates or whatever are having a great time. I heard uranium is a good metal to give as a gift to your cosmic colonisers. Allow tell the authorities I have a good sense of humour so I can move up. Anyways. So long, eh, comrade?? [Click for end screen]";
        document.querySelector('img').style.opacity = '0';
        textInBox.style.color = 'yellow';
        i++;
    }
}

// Start the dialogue by clicking on textInBox
textInBox.addEventListener('click', changeText);

// Add event listener to the submit button