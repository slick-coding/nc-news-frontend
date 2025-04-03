import { useContext, useEffect, useState } from "react";
import { getUsers } from "../api";
import { UserContext } from "../contexts/user";

function UserProfile() {
    const [users, setUsers] = useState([]);
    const {
        userProfile: { username, name, avatar_url },
        setUserProfile,
    } = useContext(UserContext);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    const handleUser = (event) => {

        setUserProfile(users[event.target.value])
    };

    return (
        <section className="user-profile">
            <select onChange={handleUser} defaultValue={"default"} required>
                <option value="default" disabled>
                    Select User
                </option>
                {users.map((user, index) => {
                    return (
                        <option key={user.username} value={index}>
                            {user.username}
                        </option>
                    );
                })}
            </select>
            <h2>Welcome {username}</h2>
            <img src={avatar_url} alt={`${username}`} />
            <h3>{name}</h3>
        </section>
    );
}

export default UserProfile;
