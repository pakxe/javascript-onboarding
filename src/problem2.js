// 2:17 3:15
function problem2(cryptogram) {
  return deduplication(cryptogram);
}

const deduplication = (str) => {
  if (!isDuplication(str)) return str;

  let res = [str[0]];
  let duplicationChar = "";
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i] && duplicationChar !== str[i]) {
      duplicationChar = "";
      res.push(str[i]);
    } else if (res[res.length - 1] === str[i]) duplicationChar = res.pop();
  }

  return deduplication(res.join(""));
};

const isDuplication = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
};
console.log(deduplication("zzzyallllelyz"));
module.exports = problem2;

/**
 * 중복 감지 재귀
 * 그 재귀 안에서 문자열을 하나씩 읽어가며 중복이면 넘어가게..
 * 중복이 더이상 없으면 그 문자 반환
 */
