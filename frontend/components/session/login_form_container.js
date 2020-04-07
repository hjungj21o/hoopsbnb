import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);