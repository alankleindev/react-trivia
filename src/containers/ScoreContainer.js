import Score from '../components/Score.js';
import { connect } from 'react-redux';

let matchStatetoProps = (state) => {
    return state;
};

// let matchDispatchtoProps = (dispatch) => {
//     return null
// };

export default connect(matchStatetoProps, null)(Score);