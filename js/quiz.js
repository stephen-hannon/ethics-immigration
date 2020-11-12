(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<span class="ans">
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </span>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {question: "What is the main non-immigration visa that is currently used by the majority of the tech industry?",
     answers: {
       a: "H-1B",
       b: "DS-160",
       c: "Form I-94"
     },
     correctAnswer: 'a'},
     {question: "Which of the following is not necessary for a position to qualify for H-1B Specialty Occupation?",
      answers: {
        a: "A degree requirement is common to the industry in parallel positions among similar organizations",
        b: "The position pays at least two times mimimum wage",
        c: "Bachelor's or a higher degree required as the minimum education level"
      },
      correctAnswer: 'b'},
      {question: "What is the limit of H-1B per fiscal year?",
       answers: {
         a: "150,000",
         b: "65,000",
         c: "500,000"
       },
       correctAnswer: 'b'},
       {question: "What act was made trying to prevent more H-1B visas being provided?",
        answers: {
          a: "Proclamation 10014",
          b: "Executive Order 7",
          c: "MAKE SOMETHING ELSE UP"
        },
        correctAnswer: 'a'},
        {question: "The Proclamation above would have prevented how many people from filing for jobs?",
         answers: {
           a: "125,000",
           b: "1.25 Million",
           c: "525,000"
         },
         correctAnswer: 'c'},
         {question: "How many employees are on H-1B visas at Okta?",
          answers: {
            a: "2,500",
            b: "500",
            c: "1,000"
          },
          correctAnswer: 'a'},
          {question: "What does U.S. Code 1101 of the Immigration and Nationality Act state?",
           answers: {
             a: "Any immigrant working in the U.S. in the technology industry must be from Europe or Asia",
             b: "Non-immigrants coming to the U.S. must perform a specialty occupation or as a fashion model",
             c: "H-1B visas should be limited to a field that requires an advanced degree"
           },
           correctAnswer: "b"}
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
