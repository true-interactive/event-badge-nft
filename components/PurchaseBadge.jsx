import { useWeb3Contract } from 'react-moralis';
import abi from "/constants/abi.json";

import styles from '/styles/components/PurchaseBadge.module.css'

export default function PurchaseBadge() {
    const { runContractFunction: buyBadge } = useWeb3Contract({
        abi: abi,
        contractAddress: process.env.BADGE_CONTRACT,
        functionName: "buyBadge",
        msgValue: "100000000000000000",
        params: {}
    });

    return (
        <button className={styles.purchaseButton} onClick={async () => {
            await buyBadge();
        }}>
            Purchase Badge
        </button>
    );
}
