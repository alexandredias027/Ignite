import styles from './Header.Module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <strong className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </strong>
    )



}