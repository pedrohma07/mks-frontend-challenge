/* eslint-disable */
import styles from './style.module.sass'
import Bag from '../../assets/bag.svg'
import { Iitem } from '../../interfaces/Item'

type Props = {
  item: Iitem;
}

// eslint-disable-next-line no-empty-pattern
function index({item}: Props) {
  return (
    <div className={styles.item}>
      <img src={item.photo} alt="" />
      <div className={styles.divTitleItem}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>R$ {item.price}</p>
      </div>
      <p className={styles.descriptionItem}>{item.description}</p>
      <div className={styles.buttonBuy}>
        <img src={Bag} alt="Bag Icon" />
        <span>COMPRAR</span>
      </div>
    </div>
  )
}

export default index