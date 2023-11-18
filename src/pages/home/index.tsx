/* eslint-disable */
import axios from 'axios'
import { useQuery } from 'react-query'
import style from './style.module.sass'
import Item from '../../components/item'
import  { Iitem }  from '../../interfaces/Item'

type Props = {}

const fetchProducts = async () => {
  const route = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products';
  const page = 1;
  const rows = 9;
  const sortBy = 'name'
  const orderBy = "ASC"

  const response = await axios.get(`${route}?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`);
  return response.data;
};

function index({}: Props) {
  const { data, isLoading, isError } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <div className={style.home}>Carregando...</div>;
  }

  if (isError) {
    return <div className={style.home}>Ocorreu um erro ao buscar os produtos</div>;
  }

  console.log(data);

  return (
    <div className={style.home}>
      {data.products.map((product: Iitem) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  )
}

export default index