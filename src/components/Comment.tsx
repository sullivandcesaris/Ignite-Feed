import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import {Avatar} from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    // Sempre que você for atualizar uma informação, 
    // e essa informação depende do valor que ela tinha anteriormente
    // é melhor usar o padrão de função
    // setLikeCount((state) => {
    //     return state + 1 
    // });

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time 
                                title="11 de Maio às 8:11h" 
                                dateTime="2022-05-11 08:11:00"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button 
                            onClick={handleDeleteComment} 
                            title="Deletar comentário"
                        >
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button  onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}