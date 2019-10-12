let initialState = {
    completed: false,
    view: "points"
};

let mainReducer = (state = initialState, action) => {
    if(action.type === 'CLICK_CARD') {
        if (state.view === 'points' && state.completed === false){
            return {
                ...state,
                view: "question",
                flipping: false
            }
        } else if (state.view ==='question' && state.completed === false ){
            return {
                ...state,
                view: "answer",
            }
        } else {
            return {
                ...state,
                completed: true,
                view: "points"
            }
        }
    } else {
        return state;
    }
}

export default mainReducer;