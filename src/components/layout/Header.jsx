import styles from "../../styles/layout/Layout.module.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>Crypto App 💰</div>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>
    );
  }
  export default Header;
  