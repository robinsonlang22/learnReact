import { createStore } from 'redux'

const reducer = (preState = { isShow: true }, action) => {
    switch (action.type) {
        case 'hide-tabbar':
            //必须深拷贝
            return { ...preState, isShow: false }
        case 'show-tabbar':
            return { ...preState, isShow: true }
        default:
            return preState
    }
}

const store = createStore(reducer)

//Redux 源码
function createSelbstStore(reducer) {
    let list = []
    let state = reducer()

    function subscribe(callback) {
        list.push(callback)
    }

    function dispatch(action) {
        state = reducer(state, action)
        list.forEach(callback => {
            callback && callback()
        })
    }

    function getState() {
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}

export default store
