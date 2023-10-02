import BreadcrumbAdmin from '@/Components/AdminComp/BreadcrumbAdmin';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Alert, Button, Table, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi'
import { FiCheckCircle } from 'react-icons/fi'
import { RiDeleteBinLine, RiFileEditFill } from 'react-icons/ri';

export default function AttributeIndex({ auth, flash, attributes }) {
    const [response, setResponse] = useState(flash)
    const props = { response, setResponse }

    const AttributeTableRow = ({ attribute }) => (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={attribute.id}>
            <Table.Cell>{attribute.id}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{attribute.name}</Table.Cell>
            <Table.Cell>{attribute.slug}</Table.Cell>
            <Table.Cell>{attribute.display_as}</Table.Cell>
            <Table.Cell>
                <Button.Group>
                    <Button color="gray">
                        <RiFileEditFill className="h-4 w-4" />
                    </Button>
                    <Button color="gray">
                        <RiDeleteBinLine className="h-4 w-4" />
                    </Button>
                </Button.Group>
            </Table.Cell>

        </Table.Row>
    )

    return (
        <AdminLayout user={auth.user} >
            <Head title="Dashboard" />
            <div className='px-6 pt-6'>
                <BreadcrumbAdmin
                    links={[
                        { title: 'Products' },
                        { title: 'Attributes' }
                    ]}
                />
                <div className='title-wrapper py-5 mb-2 flex justify-between flex-wrap items-center border-bottom'>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Attributes</h1>
                    <Link href={route('products.attribute.add')} className='flex items-center bg-red-600 text-white py-2 px-3 rounded-sm'>
                        <BiPlusCircle className='w-4 h-4 mr-1' /> Add New
                    </Link>
                </div>
            </div>
            <div className='bg-white'>
                {flash?.message !== null ?
                    <Alert
                        color="success"
                        withBorderAccent
                        className={`mx-6 ${props.response}`}
                        onDismiss={() => props.setResponse('hidden')}
                        icon={FiCheckCircle}
                    >
                        <span>
                            <p>
                                <span className="font-medium">
                                    Success !! &nbsp;
                                </span>
                                {flash?.message}
                            </p>
                        </span>
                    </Alert>
                    : ''}
                <Table hoverable striped className='px-4'>
                    <Table.Head>
                        <Table.HeadCell>SN</Table.HeadCell>
                        <Table.HeadCell>Attribute name</Table.HeadCell>
                        <Table.HeadCell>Slug</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {attributes.map((attribute) => (
                            <AttributeTableRow key={attribute.id} attribute={attribute} />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </AdminLayout>
    )
}