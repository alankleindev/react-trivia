import Card from '../components/Card';
import { connect } from 'react-redux';

let matchStatetoProps = (state) => {
    return state;
};

let matchDispatchtoProps = (dispatch) => {
    return {
        onFinish: (score) => dispatch({type: 'CORRECT', score: score})
    }
};


export default connect(matchStatetoProps, matchDispatchtoProps)(Card);