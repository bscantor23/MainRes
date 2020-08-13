import React from 'react';
import '../User.css';

import { useParams } from 'react-router-dom';

const User = () => {

    const {id} = useParams();
    
    console.log(id);

    const [user, setUser] = React.useState([]);

    React.useEffect(() => {

        const getInfoUser = async () => {

            const data = await fetch(` https://reqres.in/api/users/${id}`);
            const user = await data.json();
            setUser(user.data);
        }
        getInfoUser()
    }, [id]);

    return (
        <div class="section-info-user">

        <div className="unique-user-card">
            <div className="number-single-card">
                {user.id}.
            </div>
            <div className="unique-user-content">
                <div className="image-unique-card-container">
                    <img className="image-card" src={user.avatar} alt="" />
                </div>
                <div className="unique-user-info">
                    <h3>{user.first_name} {user.last_name}</h3><hr/>
                    <h3>Primer Nombre: {user.first_name}</h3>
                    <h3>Apellido: {user.last_name}</h3>
                    <h3>Email: {user.email}</h3>
                </div>
                <div className="buttons-container-user">
                    
                </div>
            </div>
        </div>
        </div>
    )
};

export default User