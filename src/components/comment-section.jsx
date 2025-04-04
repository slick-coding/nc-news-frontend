import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./comment-card";
import CommentInput from "./comment-input";

function CommentSection({ article_id }) {
    const [comments, setComments] = useState([]);
    const [commentStatus, setCommentStatus] = useState(0);
    const [optimisticComment, setOptimisticComment] = useState({});
    const [error, setError] = useState("");
    const params = { article_id };

    useEffect(() => {
        getComments(params).then((comments) => {
            setComments(comments);
        });
    }, []);

    return (
        <section className="comment-section">
            <h4>Comments</h4>
            {!commentStatus ? (
                <CommentInput
                    article_id={article_id}
                    setOptimisticComment={setOptimisticComment}
                    setCommentStatus={setCommentStatus}
                    error={error}
                    setError={setError}
                />
            ) : null}
            {commentStatus ? <p>Comment Posted!</p> : null}
            {commentStatus ? <CommentCard comment={optimisticComment} /> : null}
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
        </section>
    );
}

export default CommentSection;
