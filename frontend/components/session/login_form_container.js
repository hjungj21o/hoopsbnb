import { connect } from 'react-redux';
import LoginForm from './login_form';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    otherForm: (
        <button className="session-link-button" onClick={() => dispatch(openModal('signup'))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);