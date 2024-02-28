import { useState } from "react";
import "./css/editMode.css"
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../../actions/user.action";

function EditMode({setOpenModal}){

    const userData = useSelector((state)=>state.userInfo);
    const [username,setUsername] = useState(userData.userName);
    const dispatch = useDispatch();

//  PUT REQUEST FUNCTION
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editUserName(username))
        setOpenModal();
    }

    return(
        <div className="edit_main">

            <form className="edit" onSubmit={e => handleEdit(e)}>

                {/* USERNAME */}
                <div className="edit_input">
                    <label className="edit_label" htmlFor="username-Edit" >User name: </label>
                    <input id="username-Edit" type="text" value={username} onChange={e => setUsername(e.target.value)}/>

                </div>
                <br/>

                {/* FIRSTNAME */}
                <div className="edit_input">
                    <label className="edit_label" htmlFor="username-Edit">First name: </label>
                    <input id="firstName-Edit" type="text" value={userData.firstName} disabled/>
                </div>
                <br/>

                {/* LASTNAME */}
                <div className="edit_input">
                    <label className="edit_label" htmlFor="username-Edit">Last name: </label>
                    <input id="lastName-Edit" type="text" value={userData.lastName} disabled/>
                </div>

                {/* SUBMIT BTN */}
                <div className="edit_button_wrap">
                <button className="edit_button" type="submit" onClick={handleEdit}>Submit</button>
                <button className="edit_button" onClick={(e)=>{e.preventDefault(); setOpenModal()}}>Cancel</button>
                </div>

            </form>
            
        </div>
    )
}

export default EditMode