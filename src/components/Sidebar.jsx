import { PencilLine } from 'phosphor-react'; 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/alexandredias027.png" />
                <strong>Alexandre Dias</strong>
                <span>Desenvolvedor Full Stack</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} weight="bold" />
                    Ediar seu perfil
                </a >
            </footer>

        </aside>
    );
}