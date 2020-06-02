/**
 * 查找字符串中出现最多的项
 * 返回{ a: 3 }
 */

function getItemOfString(str) {
  if (!str || typeof str !== 'string') return

  let obj = Object.create(null)
  let itemCount = 0
  let itemStr

  for (const item of str) {
    obj[item] ? obj[item]++ : obj[item] = 1
  }
  
  Object.keys(obj).forEach(item => {
    if (obj[item] > itemCount) {
      itemStr = item
      itemCount = obj[item]
    }
  })

  return {
    [itemStr]: itemCount 
  } 
}

const s = 'aswfswawbswdaawdaw'
console.log(getItemOfString(s));