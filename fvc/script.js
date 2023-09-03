/* 
french conjugation practice
v. 0.1
- practice conjugating all simple tenses present in french
- 5 difficulty levels to adjust what you need to practice
- over 5000 verbs available
to come:
- identify mode
- compound tenses
- unlimited mode
- timing
- theming
- unlockables
*/

// file management
let csvFilePath = 'common.csv';

// buttons
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const settingsButton = document.getElementById("settings-btn");
const menuButton = document.getElementById("menu-btn")
const advancedSettingsButton = document.getElementById("advanced-settings-btn")

// sections
const menuSection = document.querySelector(".menu");
const quizSection = document.querySelector(".quiz");
const settingsSection = document.querySelector(".settings");
const advancedSettingsSection = document.querySelector(".advanced-settings");

// selects
const difficultySelect = document.getElementById("difficulty-select");
const questionsSelect = document.getElementById("questions-select");
const typeSelect = document.getElementById("type-select")

// checkboxes
const ind1 = document.getElementById("indicatif-présent");
const ind2 = document.getElementById("indicatif-passé-composé");
const ind3 = document.getElementById("indicatif-imparfait");
const ind4 = document.getElementById("indicatif-plus-que-parfait");
const ind5 = document.getElementById("indicatif-passé-simple");
const ind6 = document.getElementById("indicatif-passé-antérieur");
const ind7 = document.getElementById("indicatif-futur-simple");
const ind8 = document.getElementById("indicatif-futur-antérieur");

const sob1 = document.getElementById("subjonctif-présent");
const sob2 = document.getElementById("subjonctif-passé");
const sob3 = document.getElementById("subjonctif-imparfait");
const sob4 = document.getElementById("subjonctif-plus-que-parfait");

const imp1 = document.getElementById("impératif-présent");
const imp2 = document.getElementById("impératif-passé");

const con1 = document.getElementById("conditionnel-présent");
const con2 = document.getElementById("conditionnel-passé");

const ger1 = document.getElementById("gérondif-présent");
const ger2 = document.getElementById("gérondif-passé");

const simpleCheckboxes = [
    { element: ind1, range: [5, 10] }, // ind2
    { element: ind3, range: [11, 16] }, // ind4
    { element: ind5, range: [17, 22] }, // ind6
    { element: ind7, range: [23, 28] }, // ind8
    { element: sob1, range: [35, 41] }, // sob2
    { element: sob3, range: [42, 46] }, // sob4
    { element: imp1, range: [47, 49] }, // imp2
    { element: con1, range: [29, 34] }, // con2
    { element: ger1, range: [1, 1]} // ger2
];  


// variables
let questionAmount = 5;
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let validIndexes = [5,6,7,8,9,10,11,12,13,14,15,16];

// menus
function showMenu(){
    menuSection.style.display = "block";

    quizSection.style.display = "none";
    settingsSection.style.display = "none";
    advancedSettingsSection.style.display = "none";

    nextButton.style.display = "none";
    menuButton.style.display = "none";
    startButton.addEventListener("click", startQuiz);
    settingsButton.addEventListener("click", showSettings);
}
function showSettings(){
    menuSection.style.display = "none";
    settingsSection.style.display = "block";
    menuButton.style.display = "block";

    advancedSettingsButton.addEventListener("click", showAdvancedSettings)

}
function showAdvancedSettings(){
    settingsSection.style.display = "none";
    advancedSettingsSection.style.display = "block";
}
function checkboxReset(){
      uncheckCheckbox(ind1);
      uncheckCheckbox(ind2);
      uncheckCheckbox(ind3);
      uncheckCheckbox(ind4);
      uncheckCheckbox(ind5);
      uncheckCheckbox(ind6);
      uncheckCheckbox(ind7);
      uncheckCheckbox(ind8);
      uncheckCheckbox(sob1);
      uncheckCheckbox(sob2);
      uncheckCheckbox(sob3);
      uncheckCheckbox(sob4);
      uncheckCheckbox(imp1);
      uncheckCheckbox(imp2);
      uncheckCheckbox(con1);
      uncheckCheckbox(con2);
      uncheckCheckbox(ger1);
      uncheckCheckbox(ger2);     
}

// quiz parameters
questionsSelect.addEventListener("change", function() {
    questionAmount = parseInt(questionsSelect.value);
    
    console.log("Selected question amount:", questionAmount);
});
difficultySelect.addEventListener("change", function() {
  const selectedOption = difficultySelect.value;

  if (selectedOption === "trivial") {
    console.log("Trivial option selected");
    checkboxReset();
    checkCheckbox(ind1);
    checkCheckbox(ind2);
    checkCheckbox(ind3);
    console.log(validIndexes);
  } else if (selectedOption === "easy") {
    console.log("Easy option selected");
    checkboxReset();
    checkCheckbox(ind1);
    checkCheckbox(ind2);
    checkCheckbox(ind3);
    checkCheckbox(con1);
    checkCheckbox(ind4);
    checkCheckbox(ind7);
    checkCheckbox(imp1);
    console.log(validIndexes);
  } else if (selectedOption === "moderate") {
    console.log("Moderate option selected");
    checkboxReset();
    checkCheckbox(ind1);
    checkCheckbox(ind2);
    checkCheckbox(ind3);
    checkCheckbox(con1);
    checkCheckbox(ind4);
    checkCheckbox(ind7);
    checkCheckbox(imp1);
    checkCheckbox(sob1);
    checkCheckbox(ger1);
    checkCheckbox(ind8);
    checkCheckbox(con2);
    console.log(validIndexes);
  } else if (selectedOption === "difficult") {
    console.log("Difficult option selected");
    checkboxReset();
    checkCheckbox(ind1);
    checkCheckbox(ind2);
    checkCheckbox(ind3);
    checkCheckbox(con1);
    checkCheckbox(ind4);
    checkCheckbox(ind7);
    checkCheckbox(imp1);
    checkCheckbox(sob1);
    checkCheckbox(ger1);
    checkCheckbox(ind8);
    checkCheckbox(con2);
    checkCheckbox(ind5);
    checkCheckbox(sob2);
    checkCheckbox(ger2);
    console.log(validIndexes);
  } else if (selectedOption === "useless") {
    console.log("Useless option selected");
    checkboxReset();
    checkCheckbox(ind1);
    checkCheckbox(ind2);
    checkCheckbox(ind3);
    checkCheckbox(con1);
    checkCheckbox(ind4);
    checkCheckbox(ind7);
    checkCheckbox(imp1);
    checkCheckbox(sob1);
    checkCheckbox(ger1);
    checkCheckbox(ind8);
    checkCheckbox(con2);
    checkCheckbox(ind5);
    checkCheckbox(sob2);
    checkCheckbox(ger2);
    checkCheckbox(ind6);
    checkCheckbox(sob3);
    checkCheckbox(sob4);
    checkCheckbox(imp2);
  }
});
typeSelect.addEventListener("change", function() {
    const selectedOption = typeSelect.value;
    if (selectedOption === "all") {
        csvFilePath = 'all.csv';
        console.log("chosen: all verbs");
    } else {
        csvFilePath = 'common.csv';
        console.log("chosen: common verbs");
    }
});

simpleCheckboxes.forEach(checkboxInfo => {
    const { element, range } = checkboxInfo;
    element.addEventListener("change", e => {
        if (e.target.checked) {
            console.log("Checkbox is checked");
            for (let i = range[0]; i <= range[1]; i++) {
                if (!validIndexes.includes(i)) {
                    validIndexes.push(i);
                }
            }
        } else {
            console.log("Checkbox is not checked");
            for (let i = range[0]; i <= range[1]; i++) {
                const indexToRemove = validIndexes.indexOf(i);
                if (indexToRemove !== -1) {
                    validIndexes.splice(indexToRemove, 1);
                }
            }
        }
      console.log(validIndexes);
    });
});
function checkCheckbox(myCheckbox) {
    myCheckbox.checked = true;
    const event = new Event("change", { bubbles: true });
    myCheckbox.dispatchEvent(event);
}
function uncheckCheckbox(myCheckbox) {
    myCheckbox.checked = false;
    const event = new Event("change", { bubbles: true });
    myCheckbox.dispatchEvent(event);
}

// quiz functionality
function startQuiz(){
    questions = [];
    menuButton.style.display = "none"
    menuSection.style.display = "none"; 
    quizSection.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    generateQuestions();
}
function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNo}: ${currentQuestion.question}`;

        currentQuestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
}
function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        menuButton.style.display = "block";
}
function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
}

// menu button and next button functionality
menuButton.addEventListener("click", showMenu);
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex !== undefined && questions !== undefined) {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    } else {
        showMenu();
    }
});

showMenu();

// csv parsing
async function fetchCSV() {
  try {
    const response = await fetch(csvFilePath);
    const csvText = await response.text();

    const rows = csvText.split('\n');
    const headers = rows[0].split(',');

    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      data.push(row);
    }

    return { headers, data };
  } catch (error) {
    console.error('Error fetching or parsing CSV:', error);
    return null;
  }
}

// question management
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
async function generateQuestion() {
    const csv = await fetchCSV();
    if (!csv) {
      return null;
    }
  
    // generate random number for header index
    let randomHeaderIndex = validIndexes[Math.floor(Math.random() * validIndexes.length)];
    let randomHeader = csv.headers[randomHeaderIndex];

    let headerParts = randomHeader.split('|');
    
    // select a random data row
    let randomDataRow = getRandomElement(csv.data);
    let firstLetter = randomDataRow[0].charAt(0);
    
    let mood = headerParts[0];
    let tense = headerParts[1];
    let subject = headerParts[2];
    
    if (subject === "second person plural") {
      subject = "vous";
    } else if (subject === "first person plural") {
      subject = "nous";
    } else if (subject === "second person singular") {
      subject = "tu";
    } else if (subject === "third person singular") {
      subject = "il/elle/on";
    } else if (subject === "first person singular") {
      if (['a', 'e', 'i', 'o', 'u', 'h', 'è', 'à', 'ì', 'ò'].includes(firstLetter.toLowerCase())) {
        subject = "j'";
      } else {
        subject = "je";
      }
    } else if (subject === "third person plural") {
      subject = "ils/elles";
    }
  

    let question = {
      question: `Conjugate the verb "${randomDataRow[0]}" in the ${mood} mood and the ${tense} tense: ${subject}`,
      answers: [],
    };
  
    let correctAnswer = randomDataRow[randomHeaderIndex];
    question.answers.push({ text: correctAnswer, correct: true });
  
    // randomise additional answer options
    let otherOptions = randomDataRow.filter((item, index) => validIndexes.includes(index) && item !== correctAnswer);

    let usedOptions = [];

    for (let i = 0; i < 3; i++) {
        let availableOptions = otherOptions.filter(option => !usedOptions.includes(option));
            
        if (availableOptions.length === 0) break;
            
        let randomOption = getRandomElement(availableOptions);
        usedOptions.push(randomOption);
        question.answers.push({ text: randomOption, correct: false });
    }
    question.answers.sort(() => Math.random() - 0.5);
  
    return question;
}
async function generateQuestions() {
  for (let i = 0; i < questionAmount; i++) {
    const question = await generateQuestion();
    if (question) {
      questions.push(question);
    }
  }
  console.log(questions);
  showQuestion();
}


/*
storage:
gamemode select option:
    <h3 id="gamemode">Gamemode</h3>
    <select id="gamemode-select">
        <option value="conjugate">Conjugate</option>
        <option value="identify">Identify</option>
    </select>

const gamemodeSelect = document.getElementById("gamemode-select");

*/