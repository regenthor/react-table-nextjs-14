import { columns } from '@/components/table/columns';
import { DataTable } from '@/components/table/data-table';
import { data } from '@/data/table-data';
import { Container } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between md:p-12 lg:p-24 p-10">
      <Container className="w-full">
        <DataTable data={data} columns={columns} />
      </Container>
    </main>
  )
}
