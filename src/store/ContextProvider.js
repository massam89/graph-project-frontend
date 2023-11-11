import React, { useCallback, useReducer } from 'react'

export const Context = React.createContext()

const initialState = {
  loadMoreBtn: true,
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
    case 'SET_CARDS':
      preparedData.cards.total = action.payload.total
      preparedData.cards.viewed = preparedData.cards.page * preparedData.cards.size
      preparedData.cards.page = preparedData.cards.page + 1
      if(preparedData.cards.page * preparedData.cards.size > preparedData.cards.total){preparedData.loadMoreBtn = false}
      preparedData.cards.items = [...preparedData.cards.items, ...action.payload.cards]
      return preparedData
    case 'RESET_STATE':
      return {
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

  const cardsHandler = useCallback((data) => {
    dispatch({type: 'SET_CARDS', payload: {total: data.total, cards: data.result}})
  }, [])

  const resetState = useCallback(() => {
    dispatch({type: 'RESET_STATE'})
  }, [])

  const value = {
    state,
    cardsHandler,
    resetState,
  }

  return <Context.Provider value={value} >{props.children}</Context.Provider>
}

export default ContextProvider