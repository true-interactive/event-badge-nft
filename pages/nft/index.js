import PurchaseBadge from "../../components/PurchaseBadge";
import Header from "/components/Header";
import { useMoralis } from "react-moralis"

import styles from '/styles/NFT/NFT.module.css';

export default function NFT() {
    const { isWeb3Enabled } = useMoralis();

    return (
        <div className={styles.purchaseWrapper}>
            <Header></Header>
            <p className={styles.contentText}>Purchase your event badge</p>
            {isWeb3Enabled ? (
                <>
                    <PurchaseBadge></PurchaseBadge>
                </>
            ) : (
                <>
                    <p className={styles.contentText}>No metamask detected</p>
                </>
            )}
        </div>
    )
}
