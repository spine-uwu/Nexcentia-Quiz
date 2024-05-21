document.addEventListener('DOMContentLoaded', (event) => {
    function checkAnswers() {
        const answers = {
            q1: 'b',
            q2: 'b',
            q3: 'a',
            q4: 'c'
        };

        let score = 0;
        const form = document.getElementById('quizForm');
        const result = document.getElementById('result');

        for (const [question, correctAnswer] of Object.entries(answers)) {
            const userAnswer = form.elements[question].value;
            if (userAnswer === correctAnswer) {
                score++;
            }
        }

        result.textContent = `Tui ${score} paisos, out of ${Object.keys(answers).length}`;
    }

    const submitButton = document.querySelector('button');
    submitButton.addEventListener('click', checkAnswers);
});
