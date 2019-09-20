var list = [
  'enter.png',
  'test.png',
  'music.png',
  'volume.png',
  'logo.png',
]
var imgList = []
list.forEach((item, index) => {
  imgList[item.slice(0, item.indexOf('.'))] = require('./img/' + item)
})
export {
  imgList
}