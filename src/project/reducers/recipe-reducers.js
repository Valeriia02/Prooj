import  {RECIPES_ACTION_TYPES} from  '../constants/action-types'
const initialState={}
const recipesReducers = (state=initialState, action) => {
    switch (action.type) {
        case RECIPES_ACTION_TYPES.ADD_RECIPE:
            return {
                    ...state,
                    [action.payload.id]: action.payload
            }
        case RECIPES_ACTION_TYPES.DELETE_RECIPE:
            let recipes = {...state}
            delete recipes[action.payload.id]
            return recipes

        default:
            return state
    }
}
export default recipesReducers
