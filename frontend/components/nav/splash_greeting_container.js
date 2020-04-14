import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SplashGreeting from './splash_greeting';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: (() => dispatch(logout())),
    openModal: modal => dispatch(openModal(modal)) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashGreeting));
