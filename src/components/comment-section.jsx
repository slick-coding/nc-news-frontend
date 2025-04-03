import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./comment-card";

function CommentSection({article_id}) {
    const [comments, setComments] = useState([])
    const params = {article_id}

    useEffect(() => {
        getComments(params).then((comments) => {
            setComments(comments)
        })
    }, [])

    return <section className="comment-section">
        <h4>Comments</h4>
        {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment}/>
        })}
    </section>
}

export default CommentSection;