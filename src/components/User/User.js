import S from "./User.module.css";

const User = ({ users }) => {
    return (
        <>

            <div className={S.container}>
                <h2>Name: {users.name}</h2>
                <p>Username: {users.username}</p>
                <p>Email: {users.email}</p>
                <p>City: {users.address.city}</p>
                <p>Street: {users.address.street}</p>
                
            </div>

        </>
    );
}


export default User