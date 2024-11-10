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
    if (answer === 'octaves') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = 'Oh yeah! That rings a bell. Thanks, eh weirdly-dressed man?? Well, anyways, here is another question...';
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to check the answer for the second quiz question
function checkAnswer1(answer) {
    if (answer === 'elemental masses') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = 'Wait! It has all come back to me now! Thank you very much sir!';
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to manage dialogue text changes
function changeText() {
    if (i === 0) {
        textInBox.innerHTML = "'Ugh, what a mess! I give up from this chemistry business! Those green freaks!'";
        i++;
    } else if (i === 1) {
        textInBox.innerHTML = "'Rule of ‘something’', he recalls. 'Eh, it wasn’t important.'";
        i++;
    } else if (i === 2) {
        textInBox.innerHTML = "'Can you help me remember what I had in my mind?' [Click me to start quiz]";
        i++;
    } else if (i === 3) {
        // Show the quiz question
        textInBox.innerHTML = "'I, John Newlands, recently attempted to reorganise the periodic table of elements, and I have noticed that there is an interesting rule of... 1) Triads 2) Alchemy 3) Octaves'";
        answerBox.style.opacity = 1; // Show answer box for the first question
        i++;
    } else if (i === 4) {
        textInBox.innerHTML = "‘These octaves were based on a pattern based on... 1) The Alkali Metals 2) Elemental Masses 3) The elements' reaction with Bread'";
        answerBox.style.opacity = 1; // Show answer box for the second question
        n = 1; // Set n to 1 to indicate we are on the second question
        i++; // Move to the next dialogue state
    } else if (i === 5) {
        textInBox.innerHTML = "Newlands, suddenly rediscovering his notes in the ruins, remembering everything now, went on to finish his 1884 work.";
        answerBox.style.opacity = 0; // Hide answer box after completing the quiz
        i++;
    } else if (i === 7) {
        textInBox.innerHTML = "Next Stop: 1867";
        document.querySelector('.nextStop').setAttribute("href", "../Mendeleev/mendeleev.html");
    } else if (i===6){
        textInBox.innerHTML = " We have succeeded in the first part of our mission. Good job traveller. Click here to go to the Next Stop: 1867...";
        document.querySelector('img').style.opacity = '0';
        textInBox.style.color = 'red';
        i++;
    }
}

// Start the dialogue by clicking on textInBox
textInBox.addEventListener('click', changeText);

// Add event listener to the submit button