import styles from '@/styles/inputSeach.module.scss'

export default function InputSearch ({ placeholder, icon }) {
  return (
    <input
      className={styles.input__search}
      type='text'
      placeholder={placeholder}
      style={styles}
    />
  )
}
