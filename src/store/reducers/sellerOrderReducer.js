import * as Types from "../types";

const initState = {
	isLoading: false,
	error: null,
	orders: []
};

const sellerOrdersReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case Types.LOAD_SELLER_ORDER_INIT:
			return {
				...state,
				isLoading: true
			};
		case Types.LOAD_SELLER_ORDER_ERROR:
			return {
				...state,
				isLoading: false,
				error: payload
			};
		case Types.LOAD_SELLER_ORDER_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				orders: payload
			};
		default:
			return state;
	}
};

export default sellerOrdersReducer;