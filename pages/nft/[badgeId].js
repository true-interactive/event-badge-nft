import styles from '/styles/NFT/EventBadge.module.css'
import EventTimer from "../../components/EventTimer";
import { useState } from "react";

export default function EventBadge(props) {
    const data = props.data;
    const now = new Date().getTime();
    const isLive = (data.custom_fields.startDate - now) < 0;

    return (
        <div>
            <div className={styles["flip-card-container"]}>
                <div className={styles["flip-card"]}>
                    <div className={styles["card-front"]}>
                        <figure>
                            {isLive &&
                                <div>
                                    <video autoPlay muted loop className={styles.backgroundVideo}>
                                        <source src="/videos/drone_flyby.mp4" type="video/mp4"></source>
                                        Your browser does not support HTML5 video.
                                    </video>
                                    <figcaption>LIVE!</figcaption>
                                </div>
                            }
                            {!isLive &&
                                <div>
                                    <img src="/ticket_crowd_only.gif" alt="Ticket Badge Crowd Dancing" className={styles.fansWaiting} />
                                    <EventTimer startDate={data.custom_fields.startDate} className={styles.eventTimer}></EventTimer>
                                </div>
                            }
                            <img src="/TIA_Logo_001_w_3blue.png" className={styles.tiaLogo} />
                        </figure>
                        <ul>
                            <li className={styles.title}>{data.custom_fields.eventName}</li>
                            <li className={styles.eventDate}>{isLive ? <span>Happening Now!</span> : <span>{new Date(data.custom_fields.startDate).toLocaleString("en-us", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</span>}</li>
                            <li className={styles.badgeNumber}>Badge # {data.custom_fields.badgeId}</li>
                        </ul>
                    </div>

                    <div className={styles["card-back"]}>
                        {isLive &&
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
                        {!isLive &&
                            <img src="/TIA_Logo_001_w_cut_animated.gif" alt="Animated TIA Logo" className={styles.animatedLogo}></img>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { badgeId } = context.params;
    const dataUrl = new URL(`/api/nft/${badgeId}`, 'http://' + context.req.headers.host);

    const data = await fetch(dataUrl.href);
    const json = await data.json();

    return {
        props: { data: json }
    };
}