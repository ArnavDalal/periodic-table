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
        } else if (n === 2) {
            checkAnswer2(currentAnswer);
        }
        
        // Clear the input field after storing
        answerInput.value = '';
    } else {
        alert("Please enter an answer before submitting.");
    }
}

// Function to check the answer for the first quiz question
function checkAnswer(answer) {
    if (answer === 'atomic mass') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = 'Yes. NOT atomic number but atomic MASS. He did make a little oopsie. Anyways...';
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to check the answer for the second quiz question
function checkAnswer1(answer) {
    if (answer === 'elemental properties') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = "Yes. He 'unscientifically' shifted around Argon and Potassium. Guess he really did make it Argon-ised! Hehehe. *Coughs* Anyways...";
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to check the answer for the second quiz question
function checkAnswer2(answer) {
    if (answer === 'leaving gaps') {
        alert("Correct Answer!");
        answerBox.style.opacity = 0;
        textInBox.innerHTML = "Yes, he found a recurring pattern and hypothesised that there must be elements that fit there. Genius one!";
        n++; // Move to the next question
    } else {
        alert('Incorrect! Try again.');
        // Do not clear the answer; let the user try again
    }
}

// Function to manage dialogue text changes
function changeText() {
    if (i === 0) {
        textInBox.innerHTML = "Mendeleev woke up from his slumber, woken by a sudden flash of light. The windows are wide open, and the wind sweeps sheets of paper out.";
        i++;
    } else if (i === 1) {
        textInBox.innerHTML = "Mendeleev: 'Oh man! I had it! I just had it! The perfect table, I saw it, and just as the elements started to line up- I, I woke up...'";
        i++;
    } else if (i === 2) {
        textInBox.innerHTML = "Due to the alien intervention, Mendeleev never had the famous dream, and thus, he never wrote down anything. However, this is now our job. We must fill in the notes for him, and revolutionise the chemical world! [Click to start the quiz]";
        i++;
    } else if (i === 3) {
        // Show the quiz question
        document.querySelector('#start').style.background = "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('https://img.freepik.com/premium-photo/old-notebook-sheet-vintage-notebook-paper-paper-texture-abstract-background_1028938-291074.jpg')";
        textInBox.innerHTML = "The initial 'Periodic Table' was based on... 1)Atomic Number 2)Atomic Mass 3)Definitely their reaction with Bread";
        answerBox.style.opacity = 1; // Show answer box for the first question
        i++;
    } else if (i === 4) {
        textInBox.innerHTML = "However, Argon makes an entry. It has a higher atomic mass than Potassium, so it is IN THE HIGHLY REACTIVE COLUMN. Surely a mistake, which was fixed by Mendeleev as he prioritised... 1)Atomic Masses 2)Atomic Number 3)Elemental Properties";
        answerBox.style.opacity = 1; // Show answer box for the second question
        n = 1; // Set n to 1 to indicate we are on the second question
        i++; // Move to the next dialogue state
    } else if(i===5) {
        textInBox.innerHTML = 'Mendeleev did something unique about his periodic table that allowed it to incorporate future discoveries. This was... 1)Finding them himself 😎 2)Leaving gaps 3)Quitting science'
        answerBox.style.opacity = '1';
        n = 2;
        i++;
    } else if (i === 6) {
        document.querySelector('#start').style.background = "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('https://media.istockphoto.com/id/1269267277/photo/3d-rendering-of-classic-bedroom-apartment-in-the-moonlight.jpg?s=612x612&w=0&k=20&c=EPkgObdwfsdRDCpqdt9O1yjYRRdtwa3vb3Lp-QEOZYw=')";
        textInBox.innerHTML = "You drop a vase... SHATTER!";
        answerBox.style.opacity = '0'; // Hide answer box after completing the quiz
        i++;
    } else if (i === 7) {
        textInBox.innerHTML = "You hear grumbling in the other room. <br> Mendeleev: ‘Хм? Кто там?’ (Huh? Who's there?) <br> I guess it's time to... GET OUT OF HERE!";
        i++;
    } else if (i === 8) {
        textInBox.innerHTML = "As you get in your time capsule and leave, Mendeleev comes out and sees the paper. 'Eureka(he didn't say that irl), this is it, the table! Exactly what I dreamt of! This must be divine intervention'. Dmitri leaves, and so do we, to another, extra stop, 1913 HERE WE COME!";
        i++;
    }
    else if (i === 9) {
        textInBox.innerHTML = "Next Stop: 1867";
        document.querySelector('.nextStop').setAttribute("href", "../Moseley/moseley.html");
    }
}

// Start the dialogue by clicking on textInBox
textInBox.addEventListener('click', changeText);

// Add event listener to the submit button