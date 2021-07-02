let listlevel1=[
    {
        quizz:'1+1=?',
        answer:[
            {
                name:'A',
                title:'4',
                isCorrect:false
            },
            {
                name:'B',
                title:'2',
                isCorrect:true
            },
            {
                name:'C',
                title:'5',
                isCorrect:false
            },
            {
                name:'D',
                title:'3',
                isCorrect:false
            },
        ]
    },
    {
        quizz:'con gi to nhat',
        answer:[
            {
                name:'A',
                title:'chuot',
                isCorrect:false
            },
            {
                name:'B',
                title:'voi',
                isCorrect:true
            },
            {
                name:'C',
                title:'bao',
                isCorrect:false
            },
            {
                name:'D',
                title:'ho',
                isCorrect:false
            },
        ]
    },


]
let level = 1
let timer = 10
let gameOver = false
let currentQuizz=0
let point=0
let checkAnwer=false
let arrAnswer=[]
let currenAnwerName= 'A'
const checklevel = (value) =>{
    level = value
}

const checkAnswer = (evt) =>{
    console.log('evt :>> ', evt);
    checkAnwer = evt.value
    currenAnwerName=evt.dataset.name
}

const showAnswer = (answer) =>{
    let str=''
    for(i=0;i<answer.length;i++){
        str += `<div><label><input onclick="checkAnswer(this)" type="radio" data-name="${answer[i].name}" class='cb' name="the-answer" value="${answer[i].isCorrect}" $(i==0 ? 'checked' :'')><span> ${answer[i].name}: ${answer[i].title}</span></label></div>`
    }
    return str
}

const printQuizz=() =>{
// append cau hoi vao dom id=quiz
    let domQuiz = $('#quiz')
    domQuiz.html('')
    domQuiz.append(`
    <li> 
    <div>Question ${currentQuizz + 1}: ${listlevel1[currentQuizz].quizz}</div>
        ${showAnswer(listlevel1[currentQuizz].answer)}
    </li>
    `)}
    printQuizz()

    $('#next').click(() => {
        if(checkAnwer==1){
            point++
        }
        arrAnswer.push(currenAnwerName)
        currentQuizz++
        printQuizz()
    })
