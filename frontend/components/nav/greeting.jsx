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
    
    componentDidUpdate() {
        if (!this.props.currentUser && this.state.active) {
            this.state.active = false;
        };
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
                    <button className="form-button" onClick={() => openModal('login')}>Log in</button>

                    <button className="form-button" onClick={() => openModal('signup')}>Sign up</button>
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
                    <li className="dropdown-first">Messages</li>
                    <li className="dropdown-first">Trips</li>
                    <li className="dropdown-first">Saved</li>
                    <hr/>
                    <li className="dropdown-second">Manage Owned Hoops</li>
                    <li className="dropdown-second">Account</li>
                    <hr/>
                    <li className="dropdown-third">Help</li>
                    <li className="dropdown-thid" onClick={logout} >Logout</li>
                </ul>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="fixed-nav-bar">
                <div className="nav-left">
                    <Link to="/" className="logo"><img src={window.logo} alt="logo" /></Link>
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
