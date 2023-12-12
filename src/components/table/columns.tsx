"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";

import { DataTableColumnHeader } from "./column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { labels, priorities, statuses, TableData } from "@/data/table-data"
import { formatDate } from "@/utils/formatter"
import React from "react";
import DotMenu from "./dot-menu";

export const columns: ColumnDef<TableData>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey:"createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="" />
        ),
        cell: ({ row }) => {
               const test:any = row.getCanExpand() ? (
                    <button className="flex items-center"
                        {...{
                            onClick: row.getToggleExpandedHandler(),
                            style: { cursor: 'pointer' },
                        }}
                    >
                       {row.getIsExpanded() ? <ChevronDownIcon height={20} width={20} /> : <ChevronUpIcon height={20} width={20}/>}
                    </button>
                ) : (
                '🔵'
            );
                const action_list = <div className="flex-row flex px-2">
                    {test}
                    <DotMenu />
                </div>
            return action_list;
        },
        enableSorting: false,
        enableHiding: false,
        
    },
    {
        accessorKey: "invoiceNumber",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fatura No/Ettn" />
        ),
        cell: ({ row }) => {
            return <div className="flex flex-col"> 
            <div>
                    {row.getValue("invoiceNumber")}
            </div>
            <div className="text-gray" style={{color:"gray"}}>
                    {row.original.eetn}
            </div>
                </div>
        },
        enableSorting: false,
        enableHiding: false,
    }, 
    {
        accessorKey: "receiverTitle",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Alıcı Ünvan" />
        ),
        cell: ({ row }) => <div className="min-w-[200px]">{row.getValue("receiverTitle")}</div>,
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="TCKN" />
        ),
        cell: ({ row }) => <div className="">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: "invoiceType",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fatura Tipi" />
        ),
        cell: ({ row }) => {
       
            const label = labels.find((label) => label.value === row.getValue("invoiceType"));

            return (
                <div className={`flex space-x-2`}>
                    {label && <Badge style={{background:`${label.color}`}} className="text-sm" variant="destructive">{label.label}</Badge>}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Vergiler Hariç T.T." />
        ),
        cell: ({ row }) => {
            const price:any = row.getValue("price");
            return <div className="">{`${price?.amount} ${price.suffix}`}</div>
        } ,
        enableSorting: false,
        enableHiding: true,
    },
    {
        accessorKey: "taxRate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Toplam KDV (1%, 8%, 10%, 18%, 20%)" />
        ),
        cell: ({ row }) => {
            const taxRate:any = row.getValue("taxRate");
       
            const priceObject: any = row.getValue("price");
            const price = priceObject?.amount || 0;
       
            const calculateTaxPrice = (tax:string,price:number) => {
                const taxPrice = (parseInt(tax) * price) / 100;
                return taxPrice;
            }
            const total = taxRate.reduce((total:number,item:string,index:number) => {
                total += calculateTaxPrice(item,price);
                return total;
            },0)
            return (

                <div className="flex flex-col items-start">
                    {taxRate.map((tax: string,index:number) => <span key={'tax-rate-'+index}>{`${calculateTaxPrice(tax,price).toFixed(0)} ${priceObject.suffix} (${tax}% KDV)`}</span> )}
                    {`Total: ${total.toFixed(0)} ${priceObject.suffix}`}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            const val:any = row.getValue(id);
            let exists = value.some((item:any) => val.indexOf(item) > -1);
            return exists;
        },
        enableSorting:false,
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Oluşturma Tarihi" />
        ),
        cell: ({ row }) => <div className="">{formatDate(row.getValue("createdAt"))}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Durum" />
        ),
        cell: ({ row }) => {
            const status = statuses.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] justify-center py-1.5 rounded-md font-semibold text-white items-center" style={{ background: `${status.color}` }}>
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]