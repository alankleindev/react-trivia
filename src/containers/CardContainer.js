import Card from '../components/Card';
import { connect } from 'react-redux';

let matchStatetoProps = (state) => {
    return state;
};

let matchDispatchtoProps = (dispatch) => {
    return {
        clickCard: () => dispatch({type: 'CLICK_CARD'})
    }
};


export default connect(matchStatetoProps, matchDispatchtoProps)(Card);