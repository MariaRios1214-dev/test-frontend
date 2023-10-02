'use client'
import styles from '@/styles/inputSearch.module.scss'
import { useState } from 'react'

export default function InputSearch ({ placeholder, icon, handleSubmit }) {
  const [query, setQuery] = useState('')
  return (
    <form onSubmit={handleSubmit} className={styles.form_input__search}>
      <input
        className={styles.input__search}
        type='text'
        placeholder={placeholder}
        style={styles}
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
    </form>
  )
}
