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
                    <label htmlFor="username-Edit" >User name: </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

                </div>
                <br/>

                {/* FIRSTNAME */}
                <div className="edit_input">
                    <label htmlFor="username-Edit">First name: </label>
                    <input type="text" value={userData.firstName} disabled/>
                </div>
                <br/>

                {/* LASTNAME */}
                <div className="edit_input">
                    <label htmlFor="username-Edit">Last name: </label>
                    <input type="text" value={userData.lastName} disabled/>
                </div>

                {/* SUBMIT BTN */}
                <button type="submit" onClick={handleEdit}>Submit</button>
                <button onClick={(e)=>{e.preventDefault(); setOpenModal()}}>Cancel</button>

            </form>
            
        </div>
    )
}

export default EditMode