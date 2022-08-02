import Link from "next/link";
import { useRouter } from 'next/router'

import styles from '/styles/Home.module.css';

export default function PurchaseLayout({ children }) {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className={styles.purchaseLayout}>
            <h2>Settle Balance</h2>
            <nav>
                <Link href="/">
                    <a className={currentRoute === "/" ? "active fa-solid fa-credit-card" : "fa-solid fa-credit-card"}></a>
                </Link>
                <Link href="/purchase/paypal">
                    <a className={currentRoute === "/purchase/paypal" ? "active fa-brands fa-cc-paypal" : "fa-brands fa-cc-paypal"}></a>
                </Link>
                <Link href="/purchase/crypto">
                    <a className={currentRoute === "/purchase/crypto" ? "active fa-brands fa-ethereum" : "fa-brands fa-ethereum"}></a>
                </Link>
            </nav>
            {children}
        </div>
    );
}
