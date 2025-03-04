import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);
    return(
        <div>
            <h2>SideEffect</h2>
            <p>Users: {users.length}</p>
        </div>
    )
}


//! Step 1
// ---Declare a state to hold data
//! Step 2
// ---useEffect with useCallback and dependency Array
//! Step 3
// ---Use Fetch to load Data