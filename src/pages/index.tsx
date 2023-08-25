// import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css';
// import tailwind

import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

import { createColumnHelper, useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { makeData, Person } from '../utils/makeData';

const generateUsers = () => {
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push(faker.person.firstName());
  }
  return data;
};

function Index() {
  // define router
  // const router = useRouter()

  const [data, setData] = useState([{}]);
  let users: string[] = generateUsers();
  const [infom, setInfo] = useState<Person[]>(() => makeData(20));

  //
  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor('firstName', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,

    }),
    columnHelper.accessor('lastname', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,

    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table);

  if (users.length == 1) users = generateUsers();
  // setData(users)

  useEffect(() => {
    if (data.length === 1) {
      users = generateUsers();
      setData(users);
      console.log(data);
    }

    // Generate random users

    console.log(infom);
  }, [data]);

  return (
    <div>
      {data.length == 0 ? (<div>empty</div>) : (
        <div>
          {data.map((item) => (
            <div>hello</div>
        ))}
        </div>
)}
    </div>
    // <div className='cursor-pointer text-blue-500' onClick={() => router.push('/login')}>Index</div>
  );
}

export default Index;
