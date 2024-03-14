import { createContext, useReducer } from 'react'

const ResourceContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      return {
        prerenderURL: action.prerenderURL,
        transition: action.transition,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const ResourceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { prerenderURL: null, transition: null })
  const value = {
    state,
    dispatch,
  }

  return <ResourceContext.Provider value={value}>{children}</ResourceContext.Provider>
}

export default ResourceContext
export { ResourceContextProvider }
