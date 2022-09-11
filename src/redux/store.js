import { createStore } from "redux";

const initialState = {
	category: 123456,
	cats: []
}
function reducer(state = initialState, action) {
	switch (action.type) {
		case "GET_CATS":
			return {
				...state,
				cats: [...state.cats, ...action.payload]
			}
		case "GET_CATS_BY_CATEGORY":
			return {
				...state,
				cats: [...action.payload]
			}
		case "SHOW_MORE_CATS":
			return {
				...state,
				cats: [...state.cats, ...action.payload]
			}
		case "CATEGORY_BOXES":
			return {
				...state,
				category: action.payload.id
			}
		case "CATEGORY_ALL":
			return {
				category: action.payload.id,
				cats: []
			}
		case "CATEGORY_CLOTHES":
			return {
				...state,
				category: action.payload.id
			}
		case "CATEGORY_HATS":
			return {
				...state,
				category: action.payload.id
			}
		case "CATEGORY_SINKS":
			return {
				...state,
				category: action.payload.id
			}
		case "CATEGORY_SPACE":
			return {
				...state,
				category: action.payload.id
			}
		case "CATEGORY_SUNGLASSES":
			return {
				...state,
				category: action.payload.id
			}
		case "CATEGORY_TIES":
			return {
				...state,
				category: action.payload.id
			}

		default:
			return state;
	}
}


const store = createStore(reducer)

export default store