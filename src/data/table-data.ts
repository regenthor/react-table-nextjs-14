import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CrossCircledIcon, StopwatchIcon } from "@radix-ui/react-icons";
import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const tableDataSchema = z.object({
    id: z.string(),
    eetn:z.string(),
    invoiceType: z.string(),
    invoiceNumber: z.string(),
    status: z.string(),
    createdAt: z.number(),
    price: z.any(),
    taxRate: z.string(),
})

export type TableData = z.infer<typeof tableDataSchema>


export const labels = [
    {
        value: "Satış",
        label: "Satış",
        color: "#fc1414"
    },
    {
        value: "Alış",
        label: "Alış",
        color:"#2ECC71"
    },
]




export const priorities = [
    {
        value: "1",
        label: "1% KDV",
    },
    {
        value: "8",
        label: "8% KDV",
    },
    {
        value: "10",
        label: "10% KDV",
    },
    {
        value: "18",
        label: "18% KDV",
    },
    {
        value: "20",
        label: "20% KDV",
    },
]

export const statuses = [

    {
        value: "in_progress",
        label: "Devam Ediyor",
        color:"#2b7fff",
        icon: StopwatchIcon,
    },
    {
        value: "success",
        label: "Başarılı",
        color: "#2ECC71",
        icon: CheckCircledIcon,
    },
    {
        value: "failed",
        label: "Başarısız",
        color: "#fc1414",
        icon: CrossCircledIcon,
    },
]

export const data: any = [
    {
        invoiceNumber: "IDA2019000026801",
        invoiceType: "Satış",
        eetn:"24f27dea-7636-4d5d-9213",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price:{
            suffix:"TL",
            amount:500
        },
        taxRate:["1","8"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019000026801",
        invoiceType: "Satış",
        eetn: "24f27dea-7636-4d5d-9213",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 500
        },
        taxRate: ["1", "8"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019000026801",
        invoiceType: "Satış",
        eetn: "24f27dea-7636-4d5d-9213",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 500
        },
        taxRate: ["1", "8"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019000026801",
        invoiceType: "Satış",
        eetn: "24f27dea-7636-4d5d-9213",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 500
        },
        taxRate: ["1", "8"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    },
    {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Satış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "failed"
    }
    , {
        invoiceNumber: "IDA2019235029801",
        eetn: "24f27dea-7636-4d5d-9213-5553db2718187",
        invoiceType: "Alış",
        receiverTitle: "EnPOS Bilişim Sanayi ve Ticaret A.Ş",
        id: "75892375427",
        createdAt: new Date().getTime(),
        price: {
            suffix: "TL",
            amount: 1000
        },
        taxRate: ["10", "18"],
        status: "success"
    }
];
