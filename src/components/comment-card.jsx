import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { deleteComment } from "../api";

function CommentCard({ comment }) {
    const [deletionStatus, setDeletionStatus] = useState(0);
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

        deleteComment(comment.comment_id)
    }

    return (
        <section className="comment-card">
            {deletionStatus ? <h4>Comment deleted!</h4> : null}
            {!deletionStatus ? <h4>{comment.author}</h4> : null}
            {!deletionStatus ? <p>{comment.body}</p> : null}
            {!deletionStatus ? <p>{votes} upvotes</p> : null}
            {!deletionStatus ? <p>{date}</p> : null}
            {comment.author === username && !deletionStatus ? <button onClick={handleDelete}>Delete Comment ❌</button> : null}
        </section>
    );
}

export default CommentCard;
