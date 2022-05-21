import './Basket.scss';
import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';
import BasketList from '../../components/BasketList/BasketList';
import BasketTotalPrice from '../../components/BasketTotalPrice/BasketTotalPrice';

export default function Basket() {

    let basketList = useSelector((state: RootState) => state.basket.basketList);

    return (
        <div className='basket'>
            <div className='basket__container'>
                {basketList.length ?
                    <div className='basket__main'>
                        <BasketList basketList={basketList} />
                        <BasketTotalPrice basketList={basketList} />
                    </div>



                    :
                    <>Товаров нет</>
                }
            </div>
        </div>)
}