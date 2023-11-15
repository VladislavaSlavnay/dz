
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById('captchaExample').innerText = `${num1} + ${num2} = ?`;
  }

  function checkCaptcha() {
    const userAnswer = document.getElementById('captcha').value;
    const [num1, num2] = document.getElementById('captchaExample').innerText
      .split('+')
      .map(num => parseInt(num));

    if (userAnswer == num1 + num2) {
      displayResult(true);
    } else {
      displayResult(false);
    }
  }

  function displayResult(success) {
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('feedbackForm');

    if (success) {
      resultDiv.innerText = `Уважаемый ${form.name.value}, ваш номер телефона ${form.phone.value} и почта ${form.email.value} приняты! В ближайшее время мы с вами свяжемся!!`;
    } else {
      resultDiv.innerText = 'Упс, вы где-то допустили ошибку. Повторите попытку еще раз';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();
  });
    