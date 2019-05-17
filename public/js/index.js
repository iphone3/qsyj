var oHTML = document.querySelector('html')
var aWidth = oHTML.clientWidth

// 设计稿: 375px 
// 默认字大小: 16px 
oHTML.style.fontSize = (aWidth / 375) * 16 + 'px'