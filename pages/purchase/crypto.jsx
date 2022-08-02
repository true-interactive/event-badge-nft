import Link from "next/link";
import PurchaseLayout from "/components/PurchaseLayout";

import styles from '/styles/Home.module.css';

export default function Crypto() {
    return (
        <PurchaseLayout>
            <article>
                <h3>Payment via Crypto</h3>
                <ul>
                    <li>
                        <h4>Billing Information</h4>
                        <p>Collect billing information</p>
                    </li>
                    <li>
                        <h4>Crypto Information</h4>
                        <p>Crypto Integration API</p>
                    </li>
                </ul>
                <Link href="/nft">
                    <a className={styles.purchase}>Purchase Pass</a>
                </Link>
            </article>
        </PurchaseLayout>
    )
}
