import './index.css'
import count from './count'
import number from './number'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)
// btn.onclick = function () {
//     var div = document.createElement('div')
//     div.innerHTML = 'item'
//     document.body.appendChild(div)
// }

count()
number()
if (module.hot) {
    module.hot.accept('./number.js', function () {
        let numberEle = document.getElementById('number')
        document.body.removeChild(numberEle)
        number()
    })
}