import { use, useState } from "react";



const App = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            age: 30,
            isMarried: false
        },
        {
            id: 2,
            name: "Daler",
            age: 17,
            isMarried: true
        },
    ])


    function addUser() {
        users.push({
            id: users.length + 1,
            name: "Daler_" + users.length + 1,
            age: users.length + 1,
            isMarried: false
        })
        setUsers([...users])
    }

    function deleteUser(userId){
        console.log("salom")
        setUsers(users.filter(user=>user.id !== userId))
    }

    const updateUser = (userId) => {
        console.log(userId);
        let updatedUser =  users.map(user=>{
            if(user.id === userId){
                user.isMarried = !user.isMarried
            }
            return user
        })
       
        
        setUsers(updatedUser)
        
    }

    return (
        <div className="container" >
            <button onClick={addUser} className="btn btn-primary my-3" >add</button>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>t.r</th>
                        <th>name</th>
                        <th>age</th>
                        <th>married</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => <tr key={user.id} >
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.isMarried ? "uylangan" : "Bo'ydoq"}</td>
                            <td><button onClick={()=>deleteUser(user.id)} >del</button></td>
                            <td><button onClick={()=>updateUser(user.id)} >update</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}


export default App;