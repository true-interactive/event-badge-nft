import Link from "next/link";
import PurchaseLayout from "/components/PurchaseLayout";

import styles from '/styles/Home.module.css';

export default function Paypal() {
    return (
        <PurchaseLayout>
            <article>
                <h3>Payment via Paypal</h3>
                <ul>
                    <li>
                        <h4>Billing Information</h4>
                        <p>Collect billing information</p>
                    </li>
                    <li>
                        <h4>Paypal Information</h4>
                        <p>Paypal Integration API</p>
                    </li>
                </ul>
                <Link href="/nft">
                    <a className={styles.purchase}>Purchase Pass</a>
                </Link>
            </article>
        </PurchaseLayout>
    )
}
