"use client"

import { DownloadIcon, DropdownMenuIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import {
    ResetIcon,
    EnvelopeOpenIcon,
    BarChartIcon,
    DashboardIcon
} from "@radix-ui/react-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"



import { labels, tableDataSchema } from "@/data/table-data"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DashboardIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                    <EnvelopeOpenIcon className="mr-2" />
                    Email Gönder
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ResetIcon className="mr-2" />
                    Arşive Kaldır
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DownloadIcon className="mr-2" />
                    PDF İndir
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}