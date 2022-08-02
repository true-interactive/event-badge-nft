import PurchaseBadge from "../../components/PurchaseBadge";
import Footer from "/components/Footer";
import Link from "next/link";

import { useMoralis } from "react-moralis"

import styles from '/styles/NFT/NFT.module.css';

export default function NFT() {
    const { isWeb3Enabled } = useMoralis();

    return (
        <div className={styles.eventsAvailable}>
            <h2>Purchased Passes</h2>
            {/* {isWeb3Enabled ? (
                <PurchaseBadge></PurchaseBadge>
            ) : (

                <p className={styles.contentText}>No metamask detected</p>
            )} */}
            <ul>
                <li>
                    <article>
                        <h3>Awesome Music Event</h3>
                        <p>
                            This event is live and ongoing.
                        </p>
                        <figcaption>LIVE!</figcaption>
                        <Link href="/nft/50">View Pass</Link>
                    </article>
                </li>
                <li>
                    <article>
                        <h3>Gaming Event</h3>
                        <p>
                            This event is in the future and hasn't started yet.
                        </p>
                        <Link href="/nft/500">View Pass</Link>
                    </article>
                </li>
            </ul>
            <Footer></Footer>
        </div>
    )
}
