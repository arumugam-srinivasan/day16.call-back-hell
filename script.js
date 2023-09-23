(function countdown(number) {
    if (number > 0) {
      setTimeout(function () {
        document.getElementById("countdown").innerText = number;
        countdown(number - 1);
      }, 1000);
    } else {
      setTimeout(function () {
        document.getElementById("countdown").innerText = "Happy Independence Day!";
      }, 1000);
    }
  })(10);
  