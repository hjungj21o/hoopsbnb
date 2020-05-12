import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            return <li className="message login-error" key={`error-${i}`}><i className="fas fa-exclamation-circle"></i> {error}</li>
        })
        return (
            <ul>
                {errors}
            </ul>
        );
    }

    render() {


        let loginErrorClass


        this.props.errors.forEach(error => {
            if (error.includes("and/or")) {
                loginErrorClass = "rederrorclass";
            }
        });

        return (
            <div className="modal-form-container">
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <div className="modal-close-x">
                        <div onClick={this.props.closeModal} ><i className="fas fa-times"></i></div>
                        <div className="sign-up-header">Log in</div>
                    </div>
                    <br></br>
                    {this.handleErrors()}
                    <div className="modal-container">
                        <input
                            className={`signup-form login-form ${loginErrorClass}`}
                            type="text"
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.update('email')}
                            name="email"
                        />
                    </div>
                    <div className="modal-container">
                        <input
                            className={`signup-form login-form ${loginErrorClass}`}
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