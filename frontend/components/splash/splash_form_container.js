import { connect } from 'react-redux';
import Splash from './splash_form';
import { arenasSearch } from '../../actions/arena_actions';
import { withRouter } from 'react-router-dom';

const mdp = dispatch => {
    debugger
    return ({
        arenasSearch: (keyword) => dispatch(arenasSearch(keyword))
    })
}

export default withRouter(connect(null, mdp)(Splash));