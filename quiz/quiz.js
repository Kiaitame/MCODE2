'use strict';
const startBtn = document.getElementById('start');
const headComment = document.getElementById('head_1');
const titleComment = document.getElementById('head_2');
const difficultyComment = document.getElementById('head_3');
const bodyComment = document.getElementById('comment');
const URL = 'https://opentdb.com/api.php?amount=10&type=multiple';
let answerCount = 0;

const getApidata = async (index) => {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        const quiz = new Quiz(data);
        nextQuiz(quiz,index);
    } catch(e) {
        console.error(e); 
    }
}

class Quiz{
    constructor(data) {
        this._results = data.results;
    }

    getquizCategory(index) {
        return this._results[index - 1].category;
    }

    getquizDifficulty(index) {
        return this._results[index - 1].difficulty;
    }

    getquizQuestion(index) {
        return this._results[index - 1].question;
    }

    getcorrectAnswer(index) {
        return this._results[index -1].correct_answer;
    }

    getincorrectAnswers(index) {
        return this._results[index -1].incorrect_answers;
    }

    getresultLength(){
        return this._results.length;
    }

}

const nextQuiz = (quiz,index) => {
    headComment.innerHTML = `問題 ${index}`;
    titleComment.innerHTML = `[ジャンル]  ${quiz.getquizCategory(index)}`;
    difficultyComment.innerHTML = `[難易度] ${quiz.getquizDifficulty(index)}`;
    bodyComment.innerHTML = `${quiz.getquizQuestion(index)}`;
    startBtn.style.display = 'none';
    creBtn(quiz,index);
}

startBtn.addEventListener('click', async () => {
    loading();
    getApidata(1);
});


const loading = () => {
    const headComment = document.getElementById('head_1');
    headComment.innerHTML = '取得中';
    const bodyComment = document.getElementById('comment');
    bodyComment.innerHTML = '少々お待ちください';
    startBtn.style.display = 'none';
};

const answerDisplay = () => {
    headComment.innerHTML = `あなたの正解数は${answerCount}です`;
    titleComment.style.display = 'none';
    difficultyComment.style.display = 'none';
    bodyComment.innerHTML = 'もう一度はじめから開始するには以下をクリックしてください';
    const endBtn = document.createElement('button');
    endBtn.setAttribute('id','end');
    endBtn.innerHTML = '戻る';
    const parent = document.getElementById('tbl');
    const element = document.createElement('tr');
    parent.innerHTML = '';
    element.appendChild(endBtn);
    parent.appendChild(element);

    endBtn.addEventListener('click', () => {
        location.reload();
    })
};


const creBtn = (quiz,index) => {
    const quizLength = quiz.getresultLength();
    const inCorrectA = quiz.getincorrectAnswers(index);
    const correctA = quiz.getcorrectAnswer(index);
    const formattedAnswer = [...inCorrectA,correctA]
    for (let i = formattedAnswer.length-1;i>=0;i--){
        const shuffle1 = Math.floor(Math.random()*(i+1));
        [formattedAnswer[i], formattedAnswer[shuffle1]] = [formattedAnswer[shuffle1], formattedAnswer[i]]
    }
    for(let h = 0; h < formattedAnswer.length; h++){
        const btn = document.createElement('button');
        btn.setAttribute('name','btn');
        btn.innerHTML = formattedAnswer[h];
        const parent = document.getElementById('tbl');
        const element = document.createElement('tr');
        element.appendChild(btn);
        parent.appendChild(element);

        btn.addEventListener('click', () => {
            if(index < quizLength){
                if(btn.innerHTML === correctA){
                    answerCount++; 
                }
                parent.innerHTML = '';
                index++;
                nextQuiz(quiz,index);
            } else {
                answerDisplay();
            }
        })
}}
