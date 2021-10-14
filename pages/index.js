import { Layout } from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../img/logo.png'
import TwitterImg from '../img/twitter.png'
import FacebookImg from '../img/facebook.png'
import InstagramImg from '../img/instagram.png'
import Phone12 from '../img/Group53.png'
import Phone3 from '../img/Rectangle2.png'
import Phone4 from '../img/Rectangle3.png'
import Phone5 from '../img/Rectangle4.png'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (<Layout>
    <div>
      <Head>
        <title>Bella Onojie - Home Page</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.imgBlockUp}>
          <h3 className={styles.font_size_24}>Food app</h3>
          <h1 className={styles.font_size_58}>Why stay hungry when you can order form Bella Onojie</h1>
          <h3 className={styles.font_size_24}>Download the bella onoje’s food app now on</h3>
          <div className={styles.buttons}>
            <Link href={'https://play.google.com/store/apps'}><a><button className={styles.playStore}>Playstore</button></a></Link>
            <Link href={'https://www.apple.com/ru/app-store/'}><a><button className={styles.appStore}>App store</button></a></Link>
          </div>
        </div>
        <div className={styles.phones}>
          <Image src={Phone12} alt="Two phones"></Image>
        </div>
        <h3><hr /></h3>
        <h1>How the app works</h1>
        <div className={styles.imgText}>
          <Image src={Phone3} alt="On screen: Create an account"></Image>
          <div className={styles.textRight}>
            <h3 className={styles.font_size_24}>Create an account</h3>
            <h1>Create/login to an existing
              account to get started</h1>
            <h3 className={styles.font_size_24}>An account is created with your email
              and a desired password</h3>
          </div>
        </div>
        <div className={styles.imgText}>
          <div className={styles.textLeft}>
            <h3 className={styles.font_size_24}>Explore varieties</h3>
            <h1>Shop for your favorites
              meal as e dey hot.</h1>
            <h3 className={styles.font_size_24}>Shop for your favorite meals or drinks
              and enjoy while doing it.</h3>
          </div>
          <Image src={Phone4} alt="On screen: Explore varieties"></Image>
        </div>
        <div className={styles.imgText}>
          <Image src={Phone5} alt="On screen: Explore varieties"></Image>
          <div className={styles.textLeft}>
            <h3 className={styles.font_size_24}>Checkout</h3>
            <h1>When you done check out
              and get it delivered.</h1>
            <h3 className={styles.font_size_24}>When you done check out and get it
              delivered with ease.</h3>
          </div>
        </div>
        <div className={styles.imgBlockDown}>
          <h1 className={styles.font_size_40}>Download the app now.</h1>
          <h3 className={styles.font_size_24}>Available on your favorite store. Start your premium experience now</h3>
          <div className={styles.buttons2}>
            <Link href={'https://play.google.com/store/apps'}><a><button className={styles.playStore2}>Playstore</button></a></Link>
            <Link href={'https://www.apple.com/ru/app-store/'}><a><button className={styles.appStore2}>App store</button></a></Link>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Image src={logoImg} alt="Logo"></Image>
        <div className={styles.footer_social}>
          <Link href={'https://twitter.com/'}><a><Image src={TwitterImg} alt="Twitter"></Image></a></Link>
          <Link href={'https://www.facebook.com/'}><a><Image src={FacebookImg} alt="Facebook"></Image></a></Link>
          <Link href={'https://www.instagram.com/'}><a><Image src={InstagramImg} alt="Instagram"></Image></a></Link>
        </div>
        <h4>Copywright 2020 Bella Onojie.com</h4>
      </footer>
    </div>
  </Layout>)
}
