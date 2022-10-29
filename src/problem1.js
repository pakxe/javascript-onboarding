function problem1(pobi, crong) {
  if (!isValidPage(pobi, crong)) return -1;

  let maxPobi = maxNum(pobi);
  let maxCrong = maxNum(crong);
  if (maxPobi > maxCrong) return 1;
  if (maxPobi < maxCrong) return 2;
  if (maxPobi === maxCrong) return 0;
}

//페이지 유효성 검사
function isValidPage(book1, book2) {
  if (book1[0] <= 1 || book1[1] >= 400 || book2[0] <= 1 || book2[1] >= 400)
    return false;
  else if (book1[1] - book1[0] !== 1) return false;
  else if (book2[1] - book2[0] !== 1) return false;
  else return true;
}

// 2, 3번의 최대 값을 반환하는 함수
function maxNum(book) {
  let max = 0;

  book.forEach((page) => {
    let sumResult = sum(page);
    let mulResult = mul(page);
    max = Math.max(sumResult, mulResult);
  });

  return max;
}

// 각 자리수를 더해서 반환하는 함수
function sum(num) {
  const numToString = num.toString().split("");
  let sum = numToString.reduce((m, n) => m + Number(n), 0);

  return sum;
}

// 각 자리수를 곱해서 반환하는 함수
function mul(num) {
  const numToString = num.toString().split("");
  let mul = numToString.reduce((m, n) => m * Number(n), 1);

  return mul;
}

module.exports = problem1;
