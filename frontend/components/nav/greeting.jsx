import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        const currentState = this.state.active
        this.setState( {active: !currentState } )
    }
 

    render() {

        const { logout, currentUser, openModal } = this.props

        const sessionLinks = () => (
            <nav className="login-signup">
                <div className="nav">
                    <button className="form-button" onClick={() => openModal('login')}>Login</button>

                    <button className="form-button" onClick={() => openModal('signup')}>Signup</button>
                </div>
            </nav>
        );

        const personalGreeting = () => (
            <div className="header-dropdown">
                <button className="header-name" onClick={this.toggleClass} >
                    {currentUser.first_name}
                    &nbsp;
                    <i className="fas fa-user-circle" />
                </button>
                <ul className={this.state.active ? "dropdown-menu-on" : "dropdown-menu-off"} >
                    <li className="dropdown-bolded">Messages</li>
                    <li className="dropdown-bolded">Trips</li>
                    <li className="dropdown-bolded">Saved</li>
                    <hr/>
                    <li>Manage Owned Hoops</li>
                    <li>Account</li>
                    <hr/>
                    <li>Help</li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="fixed-nav-bar">
                <div className="nav-left">
                    <Link to="/" className="logo">Hoopsbnb.</Link>
                </div>
                <div className="nav-right">
                    {whichUser}
                </div>
            </nav>
            
            </>
        );
    }
}

export default Greeting;

// import React from 'react';



// const Greeting = ( { logout, currentUser, openModal } ) => {
//     // debugger;
//     const sessionLinks = () => (
//         <div className="nav">
//             <nav className="login-signup">
//                 <button className="form-button" onClick={() => openModal('login')}>Login</button>
                
//                 <button className="form-button" onClick={() => openModal('signup')}>Signup</button>
//             </nav>
//         </div>
//     );
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <h2 className="header-name">Hi, {currentUser.firstName}!</h2>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );
//     // debugger;

//     return currentUser ? personalGreeting() : sessionLinks();
// };


// export default Greeting;
