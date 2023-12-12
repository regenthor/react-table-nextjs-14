"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// import { DataTablePagination } from "../components/data-table-pagination"
import { DataTableToolbar } from "./table-toolbar"
import { DataTablePagination } from "./pagination";

const ExpandedItemRow:React.FC<{title:string,value:string}> = ({title,value})=> {
    return <div className="flex flex-row mb-1 last:mb-0">
        <div className="min-w-[200px] ">{title}</div>
        <div className="text-black font-semibold">{': '+value}</div>
    </div>
}


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        enableExpanding:true,
        getRowCanExpand: () => true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    return (
        <div className="space-y-4">
            <DataTableToolbar table={table} />
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead className="bg-slate-100/50" key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table?.getRowModel()?.rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <React.Fragment key={row.id}>
                                    <TableRow
                                        className="even:bg-slate-100/50"
                                        data-state={row.getIsSelected() && "seçildi"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    {row.getIsExpanded() === true ? <tr>
                                        <td colSpan={5} className="pl-2 py-2 border-b">
                                            <ExpandedItemRow title={'Hesap Kodu'} value='3350422485' />
                                            <ExpandedItemRow title={'Saklama'} value='Hayır' />
                                            <ExpandedItemRow title={'Belge Statüsü'} value='Öndeğer'  />
                                            <ExpandedItemRow title={'Müşteri Bayi Kodu'} value='Öndeğer' />

                                        </td>
                                        <td colSpan={4} className="pl-2 py-2 border-b">
                                            <ExpandedItemRow title={'Güvenli Mobil Ödeme'} value='3350422485' />
                                            <ExpandedItemRow title={'İtiraz Raporu Gönderim Tarihi'} value='Hayır' />
                                            <ExpandedItemRow title={'İtiraz Rapor Numarası'} value='Öndeğer' />
                                            <ExpandedItemRow title={'Durum Açıklaması'} value='Öndeğer' />

                                        </td>
                                    </tr> : null} 
                                </React.Fragment>

                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />
        </div>
    )
}