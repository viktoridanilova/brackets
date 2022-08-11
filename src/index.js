module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (strArr[i] === bracketsConfig[j][0] && strArr[i+1] === bracketsConfig[j][1]) {
        stack.push(str[i], str[i+1]);
        strArr.splice(i,2)
        i = -1;
      } 
    }
  }
  return stack.length === str.length
}
