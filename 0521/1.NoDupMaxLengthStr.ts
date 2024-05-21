const hasDupChat = (subString: string) => {
  return new Set(subString.split("")).size !== subString.length;
};
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 1;
  let leftFlag = 0;
  let rightFlag = 1;
  while (rightFlag <= s.length) {
    const subStr = s.substring(leftFlag, rightFlag);
    if (!hasDupChat(subStr)) {
      maxLength = Math.max(maxLength, rightFlag - leftFlag);
      rightFlag++;
    } else {
      leftFlag++;
    }
    console.log("leftFlag, rightFlag : ", leftFlag, rightFlag);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("au"));
