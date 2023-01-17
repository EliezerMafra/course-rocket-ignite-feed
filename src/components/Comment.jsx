import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
	return(
		<div className={styles.comment}>
			<img src="https://avatars.githubusercontent.com/u/32603174?v=4" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Eliezer Mafra</strong>
							<time title="17 de janeiro de 2023 às 13:56h" dateTime="2023-01-17 13:56:30">Cerca de 1h atrás</time>
						</div>

						<button title='Deletar comentário'>
							<Trash size={20}/>
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
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