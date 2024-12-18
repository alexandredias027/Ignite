import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/alexandredias027.png"
        hasBorder={false}
        alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alexandre Dias</strong>
              <time dateTime="">Cerca de 1 hora atrás a </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>


    </div>
  )
}