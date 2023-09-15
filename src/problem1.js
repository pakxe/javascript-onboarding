const [START_PAGE, LAST_PAGE] = [1, 400];

const [POBI_WIN, CRONG_WIN] = [1, 2];
const DRAW = 0;
const EXCEPTION = -1;

function problem1(pobi, crong) {
	// 유효한 페이지가 아닌 경우 게임 종료
	if (!isValidPages(pobi) && !isValidPages(crong)) return EXCEPTION;

	// const [pobiLeft, pobiRight] = pobi;
	// const [crongLeft, crongRight] = crong;

	const pobiMax = getMax(pobi);
	const crongMax = getMax(crong);
}

const getMax = (pages) => {
	const pagesMax = pages.map(([left, right]) =>
		Math.max(totalSum(left), totalMul(right))
	);

	return Math.max(...pagesMax);
};

// 가독성이 안좋을 까봐 더이상 축약하지 않음.
const totalSum = (pageNum) => {
	const strPageNum = getNumToArr(pageNum);

	return strPageNum.reduce((sum, num) => sum + num, 0);
};

const totalMul = (pageNum) => {
	const strPageNum = getNumToArr(pageNum);

	return strPageNum.reduce((sum, num) => sum * num, 1);
};

const getNumToArr = (num) => num.toString().split('').map(Number);

const isValidPages = ([left, right]) => {
	if (left < START_PAGE) return false;
	if (right > LAST_PAGE) return false;
	return true;
};

module.exports = problem1;
