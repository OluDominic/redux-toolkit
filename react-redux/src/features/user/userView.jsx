import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  useEffect(()=> {
    dispatch(fetchUsers())
  },[])

  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div> }
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null }
      {!user.loading && user.user ? (
        <ul>
          {
            user.user.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      ) : null}
      {user.user[0].name}
    </div>
  )
}

export default UserView
