import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../api";

function CommentInput({ article_id, setOptimisticComment, setCommentStatus, error, setError }) {
    const [comment, setComment] = useState("");
    const {
        userProfile: { username },
    } = useContext(UserContext);
    const regex = /^\s+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        const commentData = {
            article_id,
            author: username,
            body: comment,
        };
        if (comment.length === 0 || regex.test(comment)) {
            setError("Comment must contain text in the body.");
        } else if (username === "anon") {
            setError("You must sign in to leave a comment.");
        } else {
            setCommentStatus((currentStatus) => currentStatus + 1);
            setOptimisticComment(commentData);
            postComment(article_id, commentData).catch((err) => {
                setError("An error has occured, please try again.");
                setCommentStatus((currentStatus) => currentStatus - 1);
            });
        }
    };

    return (
        <section className="comment-input">
            <h5>Leave a comment as {username}</h5>
            <form onSubmit={handleSubmit}>
                <textarea
                    onChange={(event) => setComment(event.target.value)}
                    name="comment-field"
                    id="comment-field"
                ></textarea>
                <button>Submit Comment</button>
            </form>
            {error ? <p>{error}</p> : null}
        </section>
    );
}

export default CommentInput;
