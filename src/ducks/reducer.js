const initialState = {
	bag: [],
	measurements: {
		Bust: '',
		Chest: '',
		Hip: '',
		Shoulder: '',
		Under_Bust: '',
		Upper_Arm: '',
		Waist: ''
	}
}

// action types
const UPDATE_BAG = 'UPDATE_BAG';
const UPDATE_MEASUREMENTS = 'UPDATE_MEASUREMENTS';
const REMOVE_GARMENT = 'REMOVE_GARMENT';

// action creators
export function removeGarment(i) {
	console.log('functions i=',i)
	return {
		type: REMOVE_GARMENT,
		index: i
	}
};

export function updateBag(garment) {
	return {
		type: UPDATE_BAG,
		payload: garment
	}
};

export function updateMeasurements(name, value) {

	return {
		type: UPDATE_MEASUREMENTS,
		name: name,
		payload: value
	}
};

// reducer function
export default function reducer(state = initialState, action) {
	// console.log('state',state)
	switch (action.type) {
		case 'UPDATE_BAG':
			let tempBag = [...state.bag, action.payload];
			// tempBag.push(action.payload)
			return Object.assign({}, state, { bag: tempBag })

		case 'UPDATE_MEASUREMENTS':

			let measures = Object.assign({}, state.measurements, { [action.name]: action.payload })
			// console.log('reducer measurements',measures)
			// console.log('state.measurements',state.measurements)
			return Object.assign({}, state, { measurements: measures })

		case 'REMOVE_GARMENT':
			
			// console.log('/reducer removing item index=', action.index)
			let tempGarment = state.bag.slice(0);
			tempGarment.splice( action.index,1);
			// console.log('garment after slice =',tempGarment)
			return Object.assign({}, state, { bag: tempGarment })

		default:
			return state;
	}
}