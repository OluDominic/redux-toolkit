import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUser } from './features/users'

const Crud =()=> {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.users.value);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState('');

    return (
        <div>
            <div>
                <input type={'text'} placeholder={'Name...'} onChange={e => setName(e.target.value)}/>
                <input type={'text'} placeholder={'Username...'} onChange={e => setUsername(e.target.value)}/>
                <button onClick={()=> {dispatch(addUser({name, username}))}}>Add User</button>
            </div>
            <div>
                {userList.map((user)=> (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <h2>{user.username}</h2>
                        <input type={'text'} 
                        placeholder={'New Username...'}
                        onChange={(e)=> {
                            setNewUsername(e.target.value)
                        }}
                        />
                        <div>
                        <div>
                            <button onClick={()=> {
                                dispatch(updateUser({id: user.id, username: newUsername}))
                            }}>Update username</button>
                        </div>
                        <button onClick={()=> dispatch(deleteUser(user.id))}>
                        Delete
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Crud