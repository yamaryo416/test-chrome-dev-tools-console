function log(message) {
  console.log(message);
  const output = document.getElementById('output');
}

function mainFunction() {
  log("mainFunction開始");
  let result = subFunction1(5);
  log("subFunction1の結果: " + result);
  subFunction2();
  log("mainFunction終了");
}

function subFunction1(num) {
  log("subFunction1開始");
  let result = num * 2;
  return result;
}

function subFunction2() {
  log("subFunction2開始");
  for (let i = 0; i < 3; i++) {
      log("ループ " + i);
      nestedFunction();
  }
  log("subFunction2終了");
}

function nestedFunction() {
  log("nestedFunction実行");
}

document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('output').innerHTML = ''; // Clear previous output
  mainFunction();
});
