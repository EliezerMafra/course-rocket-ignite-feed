import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css'

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
			/>

			<div className={styles.profile}>
				<Avatar src='https://avatars.githubusercontent.com/u/32603174?v=4'/>
				<strong>Eliezer</strong>
				<span>Web developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20}/>
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}