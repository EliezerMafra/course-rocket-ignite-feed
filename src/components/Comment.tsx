import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [applauseCount, setApplauseCount] = useState(0)

	function handleDeleteComment(){
		onDeleteComment(content)
	}

	function handleLikeComment() {
		setApplauseCount((state) => {
			return state + 1
		})
	}

	return(
		<div className={styles.comment}>
			<Avatar src="https://avatars.githubusercontent.com/u/32603174?v=4" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Eliezer Mafra</strong>
							<time title="17 de janeiro de 2023 às 13:56h" dateTime="2023-01-17 13:56:30">Cerca de 1h atrás</time>
						</div>

						<button onClick={handleDeleteComment} title='Deletar comentário'>
							<Trash size={24}/>
						</button>
					</header>

					<p>{ content }</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={20}/>
						Aplaudir <span>{applauseCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}