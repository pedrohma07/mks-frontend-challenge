/* eslint-disable */
import styles from './style.module.sass'

type Props = {}

// eslint-disable-next-line no-empty-pattern
function index({}: Props) {
  return (
    <div className={styles.item}>
      <img src="https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(transparent):quality(80)/ousyshoe/catalog/relogio/design-sem-nome-37.png" alt="" />
      <div>
        <p>Nome do produto</p>
        <p>R$ 00,00</p>
      </div>
      <p>Descrição do produto</p>
      <button>Adicionar ao carrinho</button>
    </div>
  )
}

export default index