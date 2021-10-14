import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Product() {
    return (<Layout>
        <Head>
            <title>Bella Onojie - Home Page</title>
        </Head>
        <div className={styles.container}>
            <h1>Sorry, 'Product' page don't ready</h1>
        </div>
    </Layout>)
}