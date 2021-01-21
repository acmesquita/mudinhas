import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mudinhas</title>
      </Head>
      <main className={styles.container}>
        <h1>Bem vindos</h1>
        <h2>Mudinhas</h2>
        <h3>Como deseja continuar?</h3>
        <button>Google</button>
        <button>Facebook</button>

        <div className={styles.other_options}>
          <a href="#">Celular</a>
          <a href="#">E-mail</a>
        </div>
      </main>
    </>
  )
}
