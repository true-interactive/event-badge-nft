import { ConnectButton } from "web3uikit";

import styles from '/styles/components/Header.module.css'

export default function Header() {
    return (
        <nav className={styles.header}>
            <h1 className={styles.title}>
                <img src="https://storageapi.fleek.co/e0b96245-b6e5-4816-9856-ac47eedc62e6-bucket/True-Interactive-Services/EventBadge/TIA_Logo_001_w_cut_animated.gif" alt="Animated TIA Logo" className={styles.animatedLogo}></img>
            </h1>
            <div className={styles.connectButton}>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    );
}
