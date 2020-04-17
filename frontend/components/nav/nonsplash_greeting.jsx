import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';

class NonSplashGreeting extends React.Component {
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
            <nav className="nonsplash-login-signup">
                <div className="nonsplash-nav">
                    <button className="nonsplash-form-button" onClick={() => openModal('login')}>Log in</button>

                    <button className="nonsplash-form-button" onClick={() => openModal('signup')}>Sign up</button>
                </div>
            </nav>
        );

        const personalGreeting = () => (
            <div className="nonsplash-header-dropdown">
                <button className="nonsplash-header-name" onClick={this.toggleClass} >
                    {currentUser.first_name}
                    &nbsp;
                    <i className="fas fa-user-circle" />
                </button>
                <ul className={this.state.active ? "nonsplash-dropdown-menu-on" : "nonsplash-dropdown-menu-off"} >
                    <li className="nonsplash-dropdown-first">Messages</li>
                    <li className="nonsplash-dropdown-first">Reservations</li>
                    <li className="nonsplash-dropdown-first">Saved</li>
                    <hr/>
                    <li className="nonsplash-dropdown-second">Manage Owned Hoops</li>
                    <li className="nonsplash-dropdown-second">Account</li>
                    <hr/>
                    <li className="nonsplash-dropdown-third">Help</li>
                    <li className="nonsplash-dropdown-third" onClick={logout} >Logout</li>
                </ul>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="nonsplash-fixed-nav-bar">
                <div className="nav-left">
                    <Link to="/" className="nonsplash-logo"><img src={window.logo_ball} alt="logo" /></Link>
                </div>
                <SearchBar />
                <div className="nav-right">
                    {whichUser}
                </div>
            </nav>
            
            </>
        );
    }
}

export default NonSplashGreeting;