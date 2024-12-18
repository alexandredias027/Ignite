import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ptBR } from 'date-fns/locale'

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Post muito bacana'

    ])

    const [newCommentText, setNewComment] = useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewComment('')
    }

    function handleNewComentChange(event) {

        setNewComment(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span> {author.role}</span>

                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.id}>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return <p key={line.id}><a href="#">{line.content}</a></p>
                    }

                    return null

                })}

            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={handleNewComentChange}
                    value={newCommentText}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    )
}