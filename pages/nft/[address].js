import { useRouter } from "next/router";

import Image from 'next/image'

import styles from '/styles/NFT/EventBadge.module.css'

export default function EventBadge() {
    const router = useRouter();
    const { address, expired } = router.query;

    return (
        <div>
            <div className={styles["flip-card-container"]}>
                <div className={styles["flip-card"]}>
                    <div className={styles["card-front"]}>
                        <figure>
                            {expired == "true" &&
                                <div>
                                    <video autoPlay muted loop className={styles.backgroundVideo}>
                                        <source src="/videos/drone_flyby.mp4" type="video/mp4"></source>
                                        Your browser does not support HTML5 video.
                                    </video>
                                    <figcaption>LIVE!</figcaption>
                                </div>
                            }
                            {expired != "true" &&
                                <div>
                                    <img src="/ticket_crowd_only.gif" alt="Ticket Badge Crowd Dancing" className={styles.fansWaiting} />
                                    <object data="/svgs/event-timer.svg" type="image/svg+xml" className={styles.eventTimer}></object>
                                </div>
                            }
                            <img src="/TIA_Logo_001_w_3blue.png" className={styles.tiaLogo} />
                        </figure>
                        <ul>
                            <li className={styles.title}>Awesome Live Concert</li>
                            <li className={styles.eventDate}>{expired == "true" ? <span>Happening Now!</span> : <span>May 28th, 2022 @ Midnight</span>}</li>
                            <li className={styles.badgeNumber}>Badge # {address}</li>
                        </ul>
                    </div>

                    <div className={styles["card-back"]}>
                        {expired == "true" &&
                            <div>
                                <figure>
                                    <div className={styles["img-bg"]}></div>
                                    <video autoPlay muted loop className={styles.backgroundVideo}>
                                        <source src="/videos/crowd_dancing.mp4" type="video/mp4"></source>
                                        Your browser does not support HTML5 video.
                                    </video>
                                </figure>

                                <button onClick={() => window.open("https://framevr.io/trueinteractive", "_blank")}>Attend Event</button>

                                <div className={styles["design-container"]}>
                                    <span className={styles["design design--1"]}></span>
                                    <span className={styles["design design--2"]}></span>
                                    <span className={styles["design design--3"]}></span>
                                    <span className={styles["design design--4"]}></span>
                                    <span className={styles["design design--5"]}></span>
                                    <span className={styles["design design--6"]}></span>
                                    <span className={styles["design design--7"]}></span>
                                    <span className={styles["design design--8"]}></span>
                                </div>
                            </div>
                        }
                        {expired != "true" &&
                            <img src="/TIA_Logo_001_w_cut_animated.gif" alt="Animated TIA Logo" className={styles.animatedLogo}></img>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}