import React, { useCallback, useReducer } from 'react'

export const Context = React.createContext()

const initialState = {
  loader: false,
  modal: {isShow: false, text: ''},
  loadMoreBtn: true,
  user: {username: ''},
  cards: {
    total: 0,
    viewed: 0,
    page: 1,
    size: 3,
    items: []
  },
  loadingBar: 0
}

const reduceFunction = (state, action) => {
  const preparedData = {...state}

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
    case 'SET_LOADING_BAR':
      return {...state, loadingBar: action.payload}
    case 'SET_CARDS':
      preparedData.cards.total = action.payload.total
      preparedData.cards.viewed = preparedData.cards.page * preparedData.cards.size
      preparedData.cards.page = preparedData.cards.page + 1
      if(preparedData.cards.page * preparedData.cards.size > preparedData.cards.total){preparedData.loadMoreBtn = false}
      preparedData.cards.items = [...preparedData.cards.items, ...action.payload.cards]
      return preparedData
    case 'RESET_STATE':
      return {
        loader: false,
        modal: {isShow: false, text: ''},
        loadMoreBtn: true,
        user: {username: ''},
        cards: {
          total: 0,
          viewed: 0,
          page: 1,
          size: 3,
          items: []
        },
        loadingBar: 20
      }
    default:
      return state
  }
}

const ContextProvider = (props) => {

  const [state, dispatch] = useReducer(reduceFunction, initialState)

  const loaderHandler = useCallback((action) => {
    if(action){
      dispatch({type: 'SHOW_LOADER'})
    } else {
      dispatch({type: 'HIDE_LOADER'})
    }
  }, [])

  const modalHandler = useCallback((text) => {
    if(text){
      dispatch({type: 'SHOW_MODAL', payload: text})
    } else {
      dispatch({type: 'HIDE_MODAL'})
    }
  }, [])

  const usernameHandler = useCallback((data) => {
    dispatch({type: 'SET_USERNAME', payload: data})
  },[])

  const cardsHandler = useCallback((data) => {
    dispatch({type: 'SET_CARDS', payload: {total: data.total, cards: data.result}})
  }, [])

  const resetState = useCallback(() => {
    dispatch({type: 'RESET_STATE'})
  }, [])

  const loadingBarHandler = useCallback((percentage) => {
    dispatch({type: 'SET_LOADING_BAR', payload: percentage})
  }, [])

  const value = {
    state,
    loaderHandler,
    modalHandler,
    usernameHandler,
    cardsHandler,
    resetState,
    loadingBarHandler
  }

  return <Context.Provider value={value} >{props.children}</Context.Provider>
}

export default ContextProvider