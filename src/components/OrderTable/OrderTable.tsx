import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import OrderTableRow from './OrderTableRow';
import './orderTable.scss';


export default function OrderTable() {

    let allOrder = useSelector((state: RootState) => state.allOrder.orderList);


    return (
        <div className='orderTable'>
            <p>Список покупок</p>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Дата</TableCell>
                            <TableCell align="right">Статус заказа</TableCell>
                            <TableCell align="right">Итоговая сумма</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrder.map(e => {

                                return (<OrderTableRow key={e.dataCreate} data={e} />)

                            })}



                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
}

