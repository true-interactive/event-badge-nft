import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>True Interactive</title>
        <meta name="description" content="True Interactive NFT Event Badge" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/nft/12">
            <a className={styles.card}>
              <h2>Event Badges &rarr;</h2>
              <p>View the event badges available.</p>
            </a>
          </Link>

          <Link href="/nft/52?expired=true">
            <a className={styles.card}>
              <h2>Collection &rarr;</h2>
              <p>View your collection of Badges.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <img src="/TIA_Logo_001_w_cut_animated.gif" alt="Animated TIA Logo" className={styles.animatedLogo}></img>
        </span>
      </footer>
    </div>
  )
}
