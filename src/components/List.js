import React from 'react';

const List = ({users}) => {

    return (
        <div>
            <h2>Listado de usuarios</h2>
            <ul>
                {
                    users ?
                    users.map(user => <li key={user.id}>{user.first_name + user.last_name}</li>)
                    :
                    "Cargando"
                }
            </ul>
        </div>
    );
}

export default List;
