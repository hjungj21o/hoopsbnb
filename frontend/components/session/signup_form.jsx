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
        // this.handleErrors = this.handleErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        user.first_name = user.firstName
        user.last_name = user.lastName

        debugger;
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value } );
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
        debugger;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.update('username')}
                        name="username"
                        />
                    </label>
                    <label>
                        Password
                        <input type="text" 
                        value={this.state.password} 
                        onChange={this.update('password')}
                        name="password"
                        />
                    </label>
                    <label>
                        E-mail
                        <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.update('email')}
                        name="email"
                        />
                    </label>
                    <label>
                        First Name
                        <input 
                        type="text" 
                        value={this.state.firstName} 
                        onChange={this.update('firstName')}
                        name="firstName"
                        />
                    </label>
                    <label>
                        Last Name
                        <input 
                        type="text" 
                        value={this.state.lastName} 
                        onChange={this.update('lastName')}
                        name="lastName"
                        />
                    </label>
                    <input type="submit" value={this.props.formType} />

                </form>
            </div>
        )
    }

}


export default SignUpForm;