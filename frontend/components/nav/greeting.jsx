// import React from 'react';
// import { Link } from 'react-router-dom';

// debugger;
// class Greeting extends React.Component {
//     sessionLinks() {
//         <nav className="login-signup">
//             <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//             <Link to="/signup">Sign up!</Link>
//         </nav>
//     }

//     greetings() {
//         <div>
//             <h2>Welcome back, {this.props.currentUser.name}</h2>
//             <button onClick={this.props.logout}>Log Out</button>
//         </div>
//     }

//     render() {
//         debugger;
//         const whichUser = this.props.currentUser ? this.greetings() : this.sessionLinks()

//         return (
//             <div>
//                 {whichUser}
//             </div>
//         )
//     }
// }

// export default Greeting;

import React from 'react';



const Greeting = ( { logout, currentUser, openModal } ) => {
    // debugger;
    const sessionLinks = () => (
        <div className="nav">
            <nav className="login-signup">
                <button className="form-button" onClick={() => openModal('login')}>Login</button>
                
                <button className="form-button" onClick={() => openModal('signup')}>Signup</button>
            </nav>
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    // debugger;

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
