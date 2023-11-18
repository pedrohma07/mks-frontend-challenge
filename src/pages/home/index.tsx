/* eslint-disable */
import style from './style.module.sass'
import Item from '../../components/item'

type Props = {}

function index({}: Props) {
  return (
    <div className={style.home}>
      <Item />
    </div>
  )
}

export default index