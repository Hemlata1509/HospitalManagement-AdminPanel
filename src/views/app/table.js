/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */

import React from 'react';
import { useTable, usePagination, useSortBy, } from 'react-table';
import DatatablePagination from 'components/DatatablePagination';
import { IoInformationCircleOutline } from 'react-icons/io5'

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useSortBy,
        usePagination
    );

    const dataPAgination = () => {
        let datapagination
        if (data.length > 0) {
            datapagination = <DatatablePagination
                page={pageIndex}
                pages={pageCount}
                canPrevious={canPreviousPage}
                canNext={canNextPage}
                pageSizeOptions={[5, 10, 20, 30, 40, 50]}
                showPageSizeOptions="true"
                showPageJump="true"
                defaultPageSize={pageSize}
                onPageChange={(p) => gotoPage(p)}
                onPageSizeChange={(s) => setPageSize(s)}
                paginationMaxSize={pageCount}
            />
        }
        else {
            datapagination = ''
        }
        return datapagination

    }

    const conditionTable = () => {
        // console.log("columns",columns.length);
        let res
        if (data.length > 0) {
            res = <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, cellIndex) => (
                                <td style={{verticalAlign:'middle'}}
                                    key={`td_${cellIndex}`}
                                    {...cell.getCellProps({
                                        className: cell.column.cellClass,
                                    })}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        } else {
            res = <tbody>
                <tr style={{ textAlign: 'center', color: 'grey', fontSize: '30px' }}>
                    <td colSpan={columns.length} style={{}} >
                        <div className="py-5" style={{ border: '1px solid grey', }}>
                            <IoInformationCircleOutline style={{ fontSize: '100px' }} /><br />
                            {/* <i className='iconsminds-unlike' style={{ fontSize: '60px' }} /><br /> */}
                            NO DATA FOUND<br />
                            <h5>Click &lsquo;+&lsquo; to add data</h5>
                        </div>
                    </td>
                </tr>
            </tbody>
        }
        return res;
    }

    return (
        <>
            <table {...getTableProps()} className="r-table table mx-2" style={{ fontSize: '17px' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th

                                    key={`th_${columnIndex}`}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? 'sorted-desc'
                                                : 'sorted-asc'
                                            : ''
                                    }
                                >
                                    {column.render('Header')}
                                    <span />
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {conditionTable()}
                {/* <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, cellIndex) => (
                                    <td
                                        key={`td_${cellIndex}`}
                                        {...cell.getCellProps({
                                            className: cell.column.cellClass,
                                        })}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody> */}
            </table>
            {dataPAgination()}
            {/* <DatatablePagination
                page={pageIndex}
                pages={pageCount}
                canPrevious={canPreviousPage}
                canNext={canNextPage}
                pageSizeOptions={[5, 10, 20, 30, 40, 50]}
                showPageSizeOptions="true"
                showPageJump="true"
                defaultPageSize={pageSize}
                onPageChange={(p) => gotoPage(p)}
                onPageSizeChange={(s) => setPageSize(s)}
                paginationMaxSize={pageCount}
            /> */}
        </>
    );
}
export default Table;