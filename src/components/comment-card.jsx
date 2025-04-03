function CommentCard({comment}) {
    const date = (new Date(comment.created_at)).toString().split(" ").slice(0,5).join(" ");

    return <section className="comment-card">
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
        <p>{comment.votes} upvotes</p>
        <p>{date}</p>
    </section>
}

export default CommentCard;
