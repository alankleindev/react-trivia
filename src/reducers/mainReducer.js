let initialState = {
    score: 0
};

let mainReducer = (state = initialState, action) => {
    if(action.type === 'CORRECT') {
        return {
            ...state,
            score: state.score + action.score
        }
    } else {
        return state;
    }
}

export default mainReducer;