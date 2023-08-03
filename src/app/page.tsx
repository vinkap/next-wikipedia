import styles from './page.module.css'
import { useState } from 'react'
import Search from './components/search/Search'
import Header from './Header/page'

export default function Home() {


  return (
    <main className={styles.main}>
      <Header></Header>
      <p>Wikipedia is a free, online encyclopedia that anyone can edit....</p>

      
      <Search />
    </main>
  )
}
