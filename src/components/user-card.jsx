import { useContext } from "react";
import { UserContext } from "../contexts/user";

function UserCard() {
        const {
            userProfile: { username, avatar_url },
            setUserProfile,
        } = useContext(UserContext);

    return <section className="user-card">
        <img src={avatar_url} alt={`${username}'s profile`} />
        <p>{username}</p>
    </section>
}

export default UserCard