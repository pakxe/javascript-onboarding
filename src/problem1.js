const [START_PAGE, LAST_PAGE] = [1, 400];

const [POBI_WIN, CRONG_WIN] = [1, 2];
const DRAW = 0;
const EXCEPTION = -1;

const getResult = (costA, costB) => {
	if (costA > costB) return POBI_WIN;
	if (costA < costB) return CRONG_WIN;
	if (costA === costB) return DRAW;
};

const getMax = (pages) => {
	const pagesMax = pages.map((page) =>
		Math.max(totalSum(page), totalMul(page))
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

const isImPossiblePage = ([left, right]) => {
	if (left < START_PAGE) return true;
	if (right > LAST_PAGE) return true;
	return false;
};

const isContinuousPage = ([left, right]) => {
	if (right - left === 1) return true;
	return false;
};

const validation = (book) => {
	if (isImPossiblePage(book)) return false;
	if (!isContinuousPage(book)) return false;

	return true;
};

function problem1(pobi, crong) {
	// 유효한 페이지가 아닌 경우 게임 종료
	if (!validation(pobi) || !validation(crong)) return EXCEPTION;

	const pobiMax = getMax(pobi);
	const crongMax = getMax(crong);

	return getResult(pobiMax, crongMax);
}

module.exports = problem1;
