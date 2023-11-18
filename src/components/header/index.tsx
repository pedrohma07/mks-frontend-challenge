import styles from './style.module.sass'
import cart from '../../assets/cart.png'

function index() {
  return (
    <header>
        <div className={styles.container}>
            <span className={styles.logo}>
                <h1>MKS</h1>
                <h2>Sistemas</h2>
            </span>
            <span className={styles.cart}>
                <img src={cart} alt="Icon cart" />
                <span className={styles.countItems}>0</span>
            </span>
        </div>
    </header>
  )
}

export default index