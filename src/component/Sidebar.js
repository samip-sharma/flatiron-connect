import React from 'react'
import {connect} from 'react-redux'
import Chat from './Chat'

class Sidebar extends React.Component{
    render(){
        return(
            <div className="side-bar">
            <div className="profile-in-side-bar" >
                {this.props.loggedIn_user.image?
                <div className='sidebar-header'>
                    <div> 
                    <img className="sidebar-image" src={this.props.loggedIn_user.image.url} alt="profile pic" />
                    </div>
                    <h4>Name:</h4>{this.props.loggedIn_user.name}
                    <br />
                    <h4>User Name:</h4>{this.props.loggedIn_user.user_name}
                </div>
            :
            null
            }
            </div>
            <div className="friend-list">

            <Chat />
            </div>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        loggedIn_user:state.loggedIn_user
    }
}


const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
