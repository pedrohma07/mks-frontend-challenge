/* eslint-disable */
import styles from './style.module.sass'
import Bag from '../../assets/bag.svg'

type Props = {}

// eslint-disable-next-line no-empty-pattern
function index({}: Props) {
  return (
    <div className={styles.item}>
      <img src="https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(transparent):quality(80)/ousyshoe/catalog/relogio/design-sem-nome-37.png" alt="" />
      <div className={styles.divTitleItem}>
        <p className={styles.itemName}>Apple Watch Series 4 GPS</p>
        <p className={styles.itemPrice}>R$ 00,00</p>
      </div>
      <p className={styles.descriptionItem}>Redesigned from scratch and completely revised.</p>
      <div className={styles.buttonBuy}>
        <img src={Bag} alt="Bag Icon" />
        <span>COMPRAR</span>
      </div>
    </div>
  )
}

export default index