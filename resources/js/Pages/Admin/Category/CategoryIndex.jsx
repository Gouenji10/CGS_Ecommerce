import BreadcrumbAdmin from '@/Components/AdminComp/BreadcrumbAdmin';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Badge, Button, Table, TextInput } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';
import { RiDeleteBinLine, RiFileEditFill } from 'react-icons/ri';
import { HiCheck } from 'react-icons/hi';
import {IoMdAddCircleOutline} from 'react-icons/io'

export default function CategoryIndex({ auth }) {
    return (
        <AdminLayout user={auth.user} >
            <Head title="Dashboard" />
            <div className='px-6 pt-6'>
                <BreadcrumbAdmin links={[{ title: 'Products' },{title:'Categories'}]} />
                <div className='title-wrapper py-5 mb-2 flex justify-between flex-wrap items-center border-bottom'>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Categories</h1>
                    <div className="w-3/4">
                        <TextInput
                            icon={BiSearch}
                            id="search"
                            placeholder="Search Products..."
                            required
                            type="text"
                        />
                    </div>
                    <Button color='failure'><IoMdAddCircleOutline className='w-4 h-4 mr-1'/> Add New</Button>
                </div>
            </div>
            <div className='bg-white'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>SN</Table.HeadCell>
                        <Table.HeadCell>Product Name</Table.HeadCell>
                        <Table.HeadCell>SKU</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>
                            Actions
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Sanjay Chaudhary
                            </Table.Cell>
                            <Table.Cell>
                                PROD-001
                            </Table.Cell>
                            <Table.Cell>
                                sanjayc2051@gmail.com
                            </Table.Cell>
                            <Table.Cell>
                                +977-9864573650
                            </Table.Cell>
                            <Table.Cell>
                                <div className='flex items-center'>
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                                    Active
                                </div>
                            </Table.Cell>
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
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Gouenji Shuuya
                            </Table.Cell>
                            <Table.Cell>
                                PROD-001
                            </Table.Cell>
                            <Table.Cell>
                                excelblade10@gmail.com
                            </Table.Cell>
                            <Table.Cell>
                                +977-9864573650
                            </Table.Cell>
                            <Table.Cell>
                                <div className='flex items-center'>
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>
                                    Offline
                                </div>
                            </Table.Cell>
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
                    </Table.Body>
                </Table>
            </div>
        </AdminLayout>
    )
}