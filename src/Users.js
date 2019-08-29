import React from 'react'

const Users = ({ users }) => {
  return (
    <div>
      <center>
        <h1>Users List</h1>
        <h3>{users.length}</h3>
      </center>
      {
        users.map(user => {
                return <div>
                  <h5> {user.name} </h5>
                </div>}
      )
    }
    </div>
  )
}

export default Users

