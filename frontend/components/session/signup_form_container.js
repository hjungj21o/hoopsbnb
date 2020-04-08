import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button className="session-link-button" onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);