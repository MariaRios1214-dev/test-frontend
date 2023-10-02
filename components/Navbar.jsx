import Image from 'next/image'
import logo from '@/assets/img/logo__large_plus.png'
import Link from 'next/link'
import InputSearch from './InputSearch'
import styles from '@/styles/navbar.module.scss'

const routeLinks = [
  {
    label: 'Home',
    route: '/'
  }
]

export default function Nabvar () {
  return (
    <header className={styles.header__nav}>
      <nav>
        <Image src={logo} width={134} height={34} alt='nav-logo-ml' />
        {/* <div>
          <ul>
            {routeLinks.map(({ label, route }) =>
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            )}
          </ul>
        </div> */}
        <InputSearch
          placeholder='Nunca dejes de buscar'
          // styles={{ backgorund: 'red' }}
          // icon={<i class='fa-regular fa-magnifying-glass' />}
        />
      </nav>
    </header>
  )
}
