import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleErrors = this.handleErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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

    render() {
        // debugger;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <label>
                        Password
                        <input type="text"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <input type="submit" value={this.props.formType} />

                </form>
            </div>
        )
    }

}


export default LoginForm;