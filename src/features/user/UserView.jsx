import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice";

export const UserView = () => {
    const user= useSelector(state => state.user)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    return(<div>
        <h2>List of users</h2>
        {user.loading&& <p>Loading...</p>}
        {user.loading&&user.error ? <p>Error: {user.error}</p>:null}
        {!user.loading&&user.users.length?(
            <ul>
                {user.users.map(user=>{
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        ):null}
    </div>)
}