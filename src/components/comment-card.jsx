function CommentCard({ comment }) {
    let date = "";

    if (comment.created_at) {
        date = new Date(comment.created_at).toString().split(" ").slice(0, 5).join(" ");
    } else {
        date = "Just posted.";
    }

    return (
        <section className="comment-card">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            {comment.votes ? <p>{comment.votes} upvotes</p> : <p>0 upvotes.</p>}
            <p>{date}</p>
        </section>
    );
}

export default CommentCard;
