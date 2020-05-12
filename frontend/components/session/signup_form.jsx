import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            birthDate: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleErrors = this.handleErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const birthDateArr = this.state.birthDate.split("/");
        const birthDate = birthDateArr[1] + "-" + birthDateArr[0] + "-" + birthDateArr[2]
        let user = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            birth_date: birthDate
        };

        this.props.processForm(user)
            .then(() => this.props.closeModal());
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value } )
    }

    // handleErrors() {
    //     let errors = this.props.errors.map((error, i) => {
    //         return <li key={`error-${i}`}>{error}</li>
    //     })
    //     return (
    //         <ul>
    //             {errors}
    //         </ul>
    //     );
    // }

    render(){
        let birthdayErrors = <div className="birthday message">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Hoopsbnb.</div>;
        let emailErrors = <div className="email message">We'll email you hoops confirmations and receipts.</div>;
        let firstNameErrors = <div className="email message">Make sure it matches the name on your government ID.</div>;
        let lastNameErrors = <div></div>;
        let passwordErrors = <div></div>;

        let firstNameErrorClass
        let lastNameErrorClass
        let birthdayErrorClass
        let passwordErrorClass
        let emailErrorClass


        this.props.errors.forEach((error, index) => {
            if (error.includes("First")) {
                firstNameErrors = (<div key={index} className="signup-error"><i className="fas fa-exclamation-circle"></i> {error} </div>);
                firstNameErrorClass = "rederrorclass";
            }
            else if (error.includes("Last")) {
                lastNameErrors = (<div key={index} className="signup-error"><i className="fas fa-exclamation-circle"></i> {error} </div>);
                lastNameErrorClass = "rederrorclass";
            }
            else if (error.includes("Email") || error.includes("email")) {
                emailErrors = (<div key={index} className="signup-error"><i className="fas fa-exclamation-circle"></i> {error} </div>);
                emailErrorClass = "rederrorclass";
            }
            else if (error.includes("Password") || error.includes("password")) {
                passwordErrors = (<div key={index} className="signup-error"><i className="fas fa-exclamation-circle"></i> {error} </div>);
                passwordErrorClass = "rederrorclass";
            }
            else if (error.includes("birth date") || error.includes("18")) {
                birthdayErrors = <div className="signup-error"> <i className="fas fa-exclamation-circle"></i> {error} </div>;
                birthdayErrorClass = "rederrorclass";
            }
        });

        return (
            <div className="modal-form-container">
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <div className="modal-close-x">
                        <div onClick={this.props.closeModal} ><i className="fas fa-times"></i></div>
                        <div className="sign-up-header">Sign up</div>
                    </div>
                    <br></br>
                            <div className="modal-container firstname-container">
                                <input 
                                className={`signup-form firstname ${firstNameErrorClass}`}
                                type="text" 
                                placeholder='first name'
                                value={this.state.firstName} 
                                onChange={this.update('firstName')}
                                name="firstName"
                                />
                            </div>
                            <div className="modal-container lastname-container">
                                <input 
                                className={`signup-form lastname ${lastNameErrorClass}`}
                                type="text" 
                                value={this.state.lastName}
                                placeholder='last name' 
                                onChange={this.update('lastName')}
                                name="lastName"
                                />
                                {firstNameErrors}
                                {lastNameErrors}
                            </div>
                            <div className="modal-container">
                                <input 
                                className={`signup-form ${emailErrorClass}`}
                                type="text"
                                placeholder='email' 
                                value={this.state.email} 
                                onChange={this.update('email')}
                                name="email"
                                />
                                {emailErrors}
                            </div>
                            <div className="modal-container">
                                <input 
                                className={`signup-form ${passwordErrorClass}`}
                                type="password"
                                placeholder='password'
                                value={this.state.password} 
                                onChange={this.update('password')}
                                name="password"
                                />
                                {passwordErrors}
                            </div>
                            <div className="modal-container">
                                {/* <div className="birthdate">Birthdate</div> */}
                                <input
                                    className={`signup-form ${birthdayErrorClass}`}
                                    type="text"
                                    placeholder='birthdate mm/dd/yyyy'
                                    value={this.state.birthDate}
                                    onChange={this.update('birthDate')}
                                    name="birthDate"
                                />
                                {birthdayErrors}
                                </div>
                                <div className="policy">
                                    By selecting Agree and Signup below, I 
                                    agree to Hoopsbnb’s Terms of Service, 
                                    Payments Terms of Service, Privacy Policy, 
                                    and Nondiscrimination Policy.
                                </div>
                        <input type="submit" value="Agree and Sign up" className="modal-submit-button" />
                        <div className="session-link">
                            <p className="session-link-text">Already have a Hoopsbnb account? {this.props.otherForm}</p> 
                        </div>
                </form>
            </div>
        )
    }

}


export default SignUpForm;