import { createStore } from 'redux'

const reducer = (preState={isShow: true}, action) => {
    switch (action.type) {
        case 'hide-tabbar':
            //深拷贝
            return { ...preState, isShow: false }
        case 'show-tabbar':
            return { ...preState, isShow: true }
        default:
            return preState
    }
}
const store = createStore(reducer)

export default store
