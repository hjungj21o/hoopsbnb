import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        //this.props.processForm(user) returns a promise, so we can use .then on succession to invoke closeModal
        this.props.processForm(user)
            .then(() => this.props.closeModal());
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.loginDemoUser()
            .then(() => this.props.closeModal());
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleErrors() {
        let errors = this.props.errors.map((error, i) => {
            return <li key={`error-${i}`}>{error}</li>
        })
        return (
            <ul>
                {errors}
            </ul>
        );
    }

    render() {
        return (
            <div className="modal-form-container">
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <div className="modal-close-x">
                        <p onClick={this.props.closeModal} ><i class="fas fa-times"></i></p>
                    </div>
                    {this.handleErrors()}
                    <br></br>
                    <div className="modal-container">
                        <input
                            className="signup-form"
                            type="text"
                            placeholder='username'
                            value={this.state.username}
                            onChange={this.update('username')}
                            name="username"
                        />
                    </div>
                    <div className="modal-container">
                        <input
                            className="signup-form"
                            type="password"
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            name="password"
                        />
                    </div>
                    <input type="submit" value="Log in" className="modal-submit-button" />
                    <div className="session-link">
                            <p className="session-link-text">Don't have an account? {this.props.otherForm}</p>
                            <br />
                        <div className="hr-line">
                            <hr />
                                OR
                            <hr />
                        </div>
                        <div className="demo-login-button">
                            <button onClick={this.handleDemoLogin}>Demo Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}


export default LoginForm;