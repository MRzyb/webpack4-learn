// import _ from 'lodash'
//
// console.log(_.join(['a', 'b', 'c']))
// console.log(_.join(['a', 'b', 'c'], '***'))

function getComponent() {
    return import('lodash').then(({default: _}) => {
        console.log(_)
        return 123
    })
}
getComponent().then(res => {
    console.log(res)
})