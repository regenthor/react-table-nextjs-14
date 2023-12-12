"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DataTableViewOptions } from "./table-view-options";
import {  labels, priorities, statuses } from "@/data/table-data";
import { DataTableFacetedFilter } from "./table-faceted-filter";

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Faturalı Filtrele (Alıcı)"
                    value={(table.getColumn("receiverTitle")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("receiverTitle")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Durum Filtreleme"
                        options={statuses}
                    />
                )}
                {table.getColumn("invoiceType") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("invoiceType")}
                        title="Fatura Tipi Filtreleme"
                        options={labels}
                    />
                )}
                {table.getColumn("taxRate") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("taxRate")}
                        title="KDV Filtreleme"
                        options={priorities}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Sıfırla
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}