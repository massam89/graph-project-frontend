import React, { useReducer } from 'react'

export const Context = React.createContext()

const initialState = {
  loader: false,
  modal: {isShow: false, text: ''}
}

const reduceFunction = (state, action) => {
  switch(action.type){
    case 'SHOW_LOADER':
      return {...state, loader: true}
    case 'HIDE_LOADER':
      return {...state, loader: false}
    case 'SHOW_MODAL':
      return {...state, modal: {isShow: true, text: action.payload}}
    case 'HIDE_MODAL':
      return {...state, modal: {isShow: false, text: ''}}
    default:
      return state
  }
}

const ContextProvider = (props) => {

  const [state, dispatch] = useReducer(reduceFunction, initialState)

 const loaderHandler = (action) => {
    if(action){
      dispatch({type: 'SHOW_LOADER'})
    } else {
      dispatch({type: 'HIDE_LOADER'})
    }
  }

  const modalHandler = (text) => {
    if(text){
      dispatch({type: 'SHOW_MODAL', payload: text})
    } else {
      dispatch({type: 'HIDE_MODAL'})
    }
  }

  const value = {
    state,
    loaderHandler,
    modalHandler
  }

  return <Context.Provider value={value} >{props.children}</Context.Provider>
}

export default ContextProvider