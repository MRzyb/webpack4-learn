// import _ from 'lodash'
//
// console.log(_.join(['a', 'b', 'c']))
// console.log(_.join(['a', 'b', 'c'], '***'))


import(/* webpackChunkName: 'a' */'./a').then(res => {
    console.log(res)
})
import(/* webpackChunkName: 'b' */'./b').then(res => {
    console.log(res)
})

import(/* webpackChunkName: 'use-lodash'*/ 'lodash').then(function(_) {
    console.log(_.join(['1', '2']))
})

// function getComponent() {
//     return import(/* webpackChunkName: 'lodash' */'lodash').then(({default: _}) => {
//         console.log(_)
//     })
// }
// getComponent().then(res => {
//     console.log(res)
// })