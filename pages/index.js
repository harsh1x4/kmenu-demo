import Head from 'next/head'
import { MenuProvider } from 'kmenu'
import Palette from './components/Palette'
import styles from '../styles/Home.module.css'
// import Intro from './components/Intro'

export default function Home() {

  const darkConfig = {
    backdropColor: 'rgba(0, 0, 0, 0.50)',
    backdropBlur: 4,
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#393939',
    inputColor: '#FFFFFF',
    commandActive: '#FFF',
    commandInactive: '#4E4E4E',
    barBackground: '#FFFFFF10',
    inputBorder: '#393939',
    breadcrumbColor: '#202020',
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kmenu Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/command.svg" />
      </Head>
      <div className={styles.topbar}></div>
      <div className={styles.topgrad}></div>
      <main className={styles.main}>
        {/* <span><a href='https://github.com/harshhhdev/kmenu'>kmenu</a></span>
        <h1>Created by <a href='https://github.com/harshhhdev'>Harsh Singh</a></h1> */}
        <MenuProvider config={darkConfig}>
          <Palette />
          {/* <Intro /> */}
        </MenuProvider>
      </main>
    </div>
  )
}
