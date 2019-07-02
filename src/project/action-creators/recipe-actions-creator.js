import  RECIPES_ACTION_TYPES from'../constants/action-types'
import {v4} from 'uuid'
const addRecipe=(recipeName,recipePhoto,recipeIngridient,recipeSteps,recipeCetegory,recipeDishCount,recipeTimeForDish)=>(
    {
        type:RECIPES_ACTION_TYPES.ADD_RECIPE,
        payload:{
            id:v4(),
            recipeName,
            recipePhoto,
            recipeIngridient,
            recipeSteps,
            recipeCetegory,
            recipeDishCount,
            recipeTimeForDish
        }
    }
)
const deleteRecipe=(recipeId)=>(
    {
        type:RECIPES_ACTION_TYPES.DELETE_RECIPE,
        payload:{id:recipeId}
    }
)
export {addRecipe,deleteRecipe}
