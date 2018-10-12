import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
  }

  componentDidMount(){
    let id = this.props.id;
    this.props.fetchUser(id);
  }

  render(){
    // if (!this.props.currentUser || !this.props.id){
    //   return null;
    // }
    let display;
    if (this.props.id === null){

      display = (<div className="nav-links">
        <li>
          <Link className="btn" to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link className="btn" to="/login">Log In</Link>
        </li>
      </div>)}
      else{
        if (!this.props.currentUser){
          return null;
        }
        display = (<div className="nav-links">
          <li>
            <Link className="btn" onClick={()=>this.props.logout()} to="/login">Log Out</Link>
          </li>
        </div>)
      }


    // const display = this.props.id !== null ? (
    //   <div className="nav-links">
    //     <li>
    //       <Link className="btn" onClick={logout} to="/login">Log Out</Link>
    //     </li>
    //   </div>
    //
    // ) : (
    //   <div className="nav-links">
    //     <li>
    //       <Link className="btn" to="/signup">Sign Up</Link>
    //     </li>
    //     <li>
    //       <Link className="btn" to="/login">Log In</Link>
    //     </li>
    //   </div>
    // );

    const username = this.props.id !== null ? (
      <h3>Hello, {this.props.currentUser.email}</h3>
    ) : (
      <h3></h3>
    )

    return (
        <section className="nav-bar">
          <section className="nav-left">
            <Link to="/" className="header-link">
              TuneShack
            </Link>
              {username}
          </section>
          <section className="nav-right">
            <ul>
              <li>
                <Link to="/" className="btn">Discover</Link>
              </li>
              {display}
            </ul>
          </section>
        </section>
    );
  }
}


// const NavBar = ({ currentUser, logout }) => {
//   // debugger
//   const display = currentUser.id !== null ? (
//     <div className="nav-links">
//       <li>
//         <Link className="btn" onClick={logout} to="/login">Log Out</Link>
//       </li>
//     </div>
//
//   ) : (
//     <div className="nav-links">
//       <li>
//         <Link className="btn" to="/signup">Sign Up</Link>
//       </li>
//       <li>
//         <Link className="btn" to="/login">Log In</Link>
//       </li>
//     </div>
//   );
//
//   const username = currentUser.id !== null ? (
//     <h3>Hello, {currentUser.email}</h3>
//   ) : (
//     <h3></h3>
//   )
//
//   return (
//       <section className="nav-bar">
//         <section className="nav-left">
//           <Link to="/" className="header-link">
//             TuneShack
//           </Link>
//             {username}
//         </section>
//         <section className="nav-right">
//           <ul>
//             <li>
//               <Link to="/" className="btn">Discover</Link>
//             </li>
//             {display}
//           </ul>
//         </section>
//       </section>
//   );
// };

export default NavBar;
