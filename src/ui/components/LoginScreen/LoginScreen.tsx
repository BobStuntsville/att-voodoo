import { LoginButton } from '@/components/AltaAuth';
import styles from './LoginScreen.module.css';

export const LoginScreen = () => (
  <div className={styles.center}>
    <span className={styles.title}>Voodoo</span>
    <span className={styles.subtitle}>
      Magic Mod for <em>A Township Tale</em>
    </span>
    <LoginButton />
  </div>
);
