$(document).ready(() => {
    let questions;
    fetch("./question.json")
        .then(res => res.json())
        .then(data => questions = data);

    const questionEl = $("#question");
    const ansBtns = $(".ans-btn");
    const nextBtn = $("#next-btn");

    let qIndex = 0,
        score = 0,
        answerIndex = -1;
    
    function startQuiz() {
        qIndex = 0;
        score = 0;
        $(nextBtn).html("Next");
        questions = shuffleArray(questions);
        showQuestion();
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function showQuestion() {
        let question = questions[qIndex];
        let questionNo = qIndex + 1;
        $(ansBtns).removeClass("correct");
        $(ansBtns).removeClass("incorrect");
        $(nextBtn).css("transform", "scale(0)");
        $(questionEl).html(questionNo + ". " + question.question);
        question.options = shuffleArray(question.options);
        $.each(question.options, function (index, option) {
            if (option === question.answer) answerIndex = index;
            $($(ansBtns)[index]).text(option);
        });
    }

    function selectAnswer(e) {
        const selBtn = e.target;
        $(ansBtns).removeClass("selected");
        $(selBtn).addClass("selected");
        $(nextBtn).css("transform", "scale(1)");
        if (qIndex === questions.length - 1) $(nextBtn).text("Complete");
    }

    function showResult() {
        $(".app h1").html(`You scored ${score}/${questions.length}`);
        score = 0;
        qIndex = -1;
        answerIndex = -1;
        $(nextBtn).text("Retry");
    }

    $(ansBtns).click(selectAnswer);

    $(nextBtn).click(() => {
        const selBtn = $(".ans-btn.selected");
        const btnText = $(selBtn).text();
        const isCorrect = questions[qIndex].answer === btnText;
        $(selBtn).removeClass("selected");
        if (isCorrect) {
            score++;
            $(selBtn).addClass("correct");
        } else {
            $(selBtn).addClass("incorrect");
            $(ansBtns[answerIndex]).addClass("correct");
        }
        qIndex++;
        if (qIndex < questions.length) setTimeout(showQuestion, 1000);
        else {
            showResult();
        }
    })

    setTimeout(startQuiz, 1000);
});
