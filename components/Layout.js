import Link from "next/link"
import Image from 'next/image'
import logoPic from '../img/logo.png'
import styles from '../styles/Home.module.css'


export function Layout({ children }) {
    return (
        <>
            <nav className={styles.layout}>
                <div className={styles.layoutLogo}>
                    <Image src={logoPic} alt="Logo" />
                </div>
                <div className={styles.layoutNav}>
                    <p><Link href={'/'}><a>Home</a></Link></p>
                    <p><Link href={'/product'}><a>Product</a></Link></p>
                    <p><Link href={'/faq'}><a>Faq</a></Link></p>
                    <p><Link href={'/contact'}><a>Contact</a></Link></p>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}