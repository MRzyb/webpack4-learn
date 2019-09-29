import avatar from './avatar.jpg'
import './index.css'
import './main.scss'
import _ from 'lodash'


let img = new Image()
img.src = avatar
let root = document.getElementById('root')
root.appendChild(img)

console.log(new Promise(() => {}))
console.log(_.join(['a', 'b', 'c']))