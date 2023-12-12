import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
    Cross1Icon,
    ResetIcon,
    ClipboardCopyIcon,
    BarChartIcon,
    IdCardIcon,
    DashboardIcon
} from "@radix-ui/react-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";


const DotMenu:React.FC<any> = () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
                <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>
                <Cross1Icon className="mr-2" />
                İtiraz Et
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ResetIcon className="mr-2" />
                İptal Geri Al
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ClipboardCopyIcon className="mr-2" />
                Kopyala
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <ResetIcon className="mr-2" />
                Statü Seçimi
            </DropdownMenuItem>
            <DropdownMenuItem>
                <DashboardIcon className="mr-2" />
                Departman Seçimi
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IdCardIcon className="mr-2" />
                İzleme Kayıtları
            </DropdownMenuItem>
            <DropdownMenuItem>
                <BarChartIcon className="mr-2" />
                Rapora Git
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}

export default DotMenu;