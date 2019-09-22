import avatar from './avatar.jpg'
import './index.css'
import './main.scss'

let img = new Image()
img.src = avatar
let root = document.getElementById('root')
root.appendChild(img)