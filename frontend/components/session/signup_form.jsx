import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        user.first_name = user.firstName
        user.last_name = user.lastName


        this.props.processForm(user)
            .then(() => this.props.closeModal());
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value } );
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

    render(){
        return (
            <div>
                {this.handleErrors()}
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="modal-close-x">X</div>
                    <br></br>
                            <label className="modal-container">
                                <input 
                                className="signup-form"
                                type="text"
                                placeholder='username' 
                                value={this.state.username} 
                                onChange={this.update('username')}
                                name="username"
                                />
                            </label>
                            <label className="modal-container">
                                <input 
                                className="signup-form"
                                type="text"
                                placeholder='password'
                                value={this.state.password} 
                                onChange={this.update('password')}
                                name="password"
                                />
                            </label>
                            <label className="modal-container">
                                <input 
                                className="signup-form"
                                type="email" 
                                placeholder='e-mail'
                                value={this.state.email} 
                                onChange={this.update('email')}
                                name="email"
                                />
                            </label>
                            <label className="modal-container">
                                <input 
                                className="signup-form"
                                type="text" 
                                placeholder='first name'
                                value={this.state.firstName} 
                                onChange={this.update('firstName')}
                                name="firstName"
                                />
                            </label>
                            <label className="modal-container">
                                <input 
                                className="signup-form"
                                type="text" 
                                value={this.state.lastName}
                                placeholder='last name' 
                                onChange={this.update('lastName')}
                                name="lastName"
                                />
                            </label>
                        <input type="submit" value={this.props.formType} className="modal-submit-button" />
                        <div className="session-link">
                            <p className="session-link-text">Already have a Hoopsbnb account? {this.props.otherForm}</p> 
                        </div>
                </form>
            </div>
        )
    }

}


export default SignUpForm;