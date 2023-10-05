import React, { useReducer } from 'react'

export const Context = React.createContext()

const initialState = {
  loader: false,
  modal: {isShow: false, text: ''},
  user: {username: ''},
  cards: {
    total: 0,
    viewed: 0,
    page: 1,
    size: 3,
    items: []
  }
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
    case 'SET_USERNAME':
      return {...state, username: action.payload}
    case 'SET_CARDS':
      const preparedData = {...state}
      preparedData.cards.total = action.payload.total
      preparedData.cards.viewed = preparedData.cards.page * preparedData.cards.size
      preparedData.cards.items = action.payload.cards
      return preparedData
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

  const usernameHandler = (data) => {
    dispatch({type: 'SET_USERNAME', payload: data})
  }

  const cardsHandler = (data) => {
    console.log(data);
    dispatch({type: 'SET_CARDS', payload: {total: data.total, cards: data.result}})
  }

  console.log(state);

  const value = {
    state,
    loaderHandler,
    modalHandler,
    usernameHandler,
    cardsHandler
  }

  return <Context.Provider value={value} >{props.children}</Context.Provider>
}

export default ContextProvider