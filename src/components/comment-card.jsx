import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { deleteComment } from "../api";

function CommentCard({ comment }) {
    const [deletionStatus, setDeletionStatus] = useState(0);
    const [error, setError] = useState(null)
    let date = "";

    const votes = comment.votes ? comment.votes : 0;

    if (comment.created_at) {
        date = new Date(comment.created_at).toString().split(" ").slice(0, 5).join(" ");
    } else {
        date = "Just posted.";
    }

    const {
        userProfile: { username },
    } = useContext(UserContext);

    function handleDelete(event) {
        event.preventDefault();
        setDeletionStatus((currentStatus) => currentStatus + 1)
        setError(null)
        deleteComment(comment.comment_id).catch((err)=> {
            setError("An error has occurred, please try again.")
            setDeletionStatus((currentStatus) => currentStatus - 1)
        })
    }

    return (
        <section className="comment-card">
            {deletionStatus ? <h4>Comment deleted!</h4> : null}
            {!deletionStatus ? <h4>{comment.author}</h4> : null}
            {!deletionStatus ? <p>{comment.body}</p> : null}
            {!deletionStatus ? <p>{votes} upvotes</p> : null}
            {!deletionStatus ? <p>{date}</p> : null}
            {comment.author === username && !deletionStatus ? <button onClick={handleDelete}>Delete Comment ❌</button> : null}
            {error ? <p>{error}</p> : null}
        </section>
    );
}

export default CommentCard;
