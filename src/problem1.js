// 1:12 -> 1:30

function problem1(pobi, crong) {
  if (!isValidPages(pobi) || !isValidPages(crong)) return -1; //하나라도 false면 걸리게..
  const maxPobi = maxNum(pobi);
  const maxCrong = maxNum(crong);

  if (maxPobi > maxCrong) return 1;
  if (maxPobi < maxCrong) return 2;
  if (maxPobi === maxCrong) return 0;
}

const maxNum = (pages) => {
  const calculatedPages = pages.reduce((numArr, page) => {
    numArr.push(sumNum(page));
    numArr.push(mulNum(page));
    return numArr;
  }, []);

  return Math.max(...calculatedPages);
};

const sumNum = (num) => {
  const numArr = changeToNumArr(num);
  return numArr.reduce((sum, number) => sum + number, 0);
};

const mulNum = (num) => {
  const numArr = changeToNumArr(num);
  return numArr.reduce((mul, number) => mul * number, 1);
};

const isValidPages = (pages) => {
  const [leftPage, rightPage] = pages;
  if (pages.length !== 2) return false;
  if (leftPage < 1 || rightPage > 400) return false;
  if (rightPage - leftPage !== 1) return false;
  if (rightPage % 2 !== 0) return false;
  else return true;
};

const changeToNumArr = (num) => num.toString().split("").map(Number);
module.exports = problem1;

// reduce 메서드를 잘 활용할 것, 다중 메서드가 동일한 곳에서 반복된다면 따로 뗴어내서 함수로 만들자
