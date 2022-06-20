import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderTable from '../../components/OrderTable/OrderTable';
import { setAllOrder } from '../../redux/actions/allOrderActions';
import { RootState } from '../../redux/store/store';
import './Order.scss';

export default function OrderPage() {

    const dispatch = useDispatch();

    let allOrder = useSelector((state: RootState) => state.allOrder.orderList);
    let user = useSelector((state: RootState) => state.auth.userData?.name);
    let isLogin = useSelector((state: RootState) => state.auth.isAuth);

    useEffect(() => {
        dispatch(setAllOrder("PostUser1"));
    }, [])

    return (
        <div className="comparePage">
            <div className="comparePage__container">
                {(allOrder.length !== 0 && isLogin) ?
                    <OrderTable />
                    : <h1>Нет данных</h1>}
            </div>
        </div>)
}