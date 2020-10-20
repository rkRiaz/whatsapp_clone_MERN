import React, {useState} from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from 'axios'
import Moment from 'react-moment';



function Chat({messages}) {

    const[input, setInput] = useState("")

    const sendMessage = async(e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/message/new", {
            message: input,
            name: "samanta",
            received: true
        })
        setInput("")
    }
 
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Rohoul Kuddus Riaz</h3>
                    <p>last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>     
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">

                {
                    messages.map(m => (
                        <p key={m._id} className={`chat__message ${m.received && "chat__reciever"}`}>
                            <span className="chat__name">
                                {m.name}
                            </span>
                            {m.message}
                            <span className="chat__timeStamp">
                                <Moment format="h:mm A, D MMMM" date={m.createdAt}/>
                            </span>
                        </p>
                    ))
                }
         

            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => {setInput(e.target.value)}} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
     
        </div>
    )
}

export default Chat
