import {legacy_createStore as createStore} from 'redux'
import { lightTheme, darkTheme } from '../feature/theme'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../service/localStorage'
const initState = {
    currentTheme: getLocalStorage("theme") || lightTheme,
    num: getLocalStorage("num") || 0,
    isCheck: getLocalStorage("statusTheme") || false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_THEME':
            if (state.currentTheme === lightTheme) {
                setLocalStorage("theme", darkTheme)
                setLocalStorage("statusTheme", true)
                return { 
                    currentTheme: darkTheme,
                    num: state.num,
                    isCheck: true
                }
            }
            else {
                setLocalStorage("theme", lightTheme)
                setLocalStorage("statusTheme", false)
                return { 
                    currentTheme: lightTheme,
                    num: state.num,
                    isCheck: false
                }
            }
            
        case 'ADD_CORRECT':
            let cr = state.num + 1
            setLocalStorage("num", cr)
            return {
                currentTheme: state.currentTheme,
                num: cr ,
                isCheck: state.isCheck
            }
        case 'DELETE_NUM':
            removeLocalStorage("num")
            return {
                currentTheme: state.currentTheme,
                num: 0,
                isCheck: state.isCheck
            }
        default:
            return state
    }
}

let store = createStore(reducer)

export default store