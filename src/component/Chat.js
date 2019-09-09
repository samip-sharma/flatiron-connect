import React from "react"
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {getAllFriends,getTwoUsersChat,sendGlobalMessage,getLoggedInUser,sendUserMessage} from '../redux/action'
import ChatBoxForUser from "./ChatBoxForUser";
import GlobalChat from "./GlobalChat" 


class Chat extends React.Component {

    componentDidMount(){
        this.props.getAllFriends()
        this.props.getLoggedInUser()
    }

    state={
        text:'',
        clicked:false,
        global:false
    }

    handleGlobalClick=()=>{
        this.setState({
            global:true,
            clicked:false
        })
    }



    handleUserClick=(id)=>{
        localStorage.clicked_user=id
        this.props.getTwoUsersChat(id)
        this.setState({
            clicked:true,
            global:false 
        })
        // this.props.history.push("/profile")
    }

    
    render(){
        return(
            <React.Fragment>
               
                <Navbar />
                <button onClick={this.handleGlobalClick}>Global Chat</button>
                <div>
                    ALL FRIENDS
                {this.props.all_friends.map((user)=>
                <p> 
                    <div onClick={()=>this.handleUserClick(user.id)}>{user.name}</div> 
                </p>)}
                </div>

            {this.state.clicked? 
                
            <ChatBoxForUser getChat={this.props.getTwoUsersChat} sendUserMessage={this.props.sendUserMessage} chat={this.props.two_users_chat}/>
            :

            null}

            {this.state.global?
            <GlobalChat />
            :
            null
             }
            </React.Fragment>
        )
    }

}



const mapStateToProps=(state)=>{
    return {
        all_friends:state.all_friends,
        two_users_chat:state.two_users_chat
    }
  }


  const mapDispatchToProps = {
    getAllFriends:getAllFriends,
    getTwoUsersChat:getTwoUsersChat,
    getLoggedInUser:getLoggedInUser,
    sendUserMessage:sendUserMessage,
    sendGlobalMessage:sendGlobalMessage

  }


export default connect(mapStateToProps,mapDispatchToProps)(Chat)



