
import './assets/style/base.scss'
import './assets/fonts/iconfont.css' // 引入字体文件


// 发送跨域请求
$.get(
    '/comments/hotflow',
    {
        id: '4263554020904293',
        mid: '4263554020904293',
        max_id_type: '0'
    },
    function(data) {
        console.log(data)
    }
)