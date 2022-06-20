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

export type TAllOrderElement = {

    dataCreate: string,
    dataDelivery: string,
    status: number,
    totalSumma: number,

    tovarList: string,
    priceList: string,
    kolList: string,
    summaList: string,

};



export default function OrderTableRow(props: { data: TAllOrderElement }) {
    
    const data = props.data;
    const [open, setOpen] = React.useState(true);
    const tovarList = data.tovarList.split('&');
    const priceList = data.priceList.split('&');
    const kolList = data.kolList.split('&');
    const summaList = data.summaList.split('&');

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {data.dataCreate}
                </TableCell>
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align="right">{data.totalSumma}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Список покупок
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell>Цена</TableCell>
                                        <TableCell align="right">Количество</TableCell>
                                        <TableCell align="right">Сумма</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tovarList.map((e, i) => {
                                        return (
                                            <TableRow key={data.dataCreate + e + i}>
                                                <TableCell component="th" scope="row">
                                                    {tovarList[i]}
                                                </TableCell>
                                                <TableCell>
                                                    {priceList[i]}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {kolList[i]}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {summaList[i]}
                                                </TableCell>
                                            </TableRow>)
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
/*



{data.tovarList.map((e, i) => {
                                        return (
                                            <TableRow key={data.dataCreate + e}>
                                                <TableCell component="th" scope="row">
                                                    {data.tovarList[i]}
                                                </TableCell>
                                                <TableCell>
                                                    {data.priceList[i]}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {data.kolList[i]}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {data.summaList[i]}
                                                </TableCell>
                                            </TableRow>)
                                    })}




*/