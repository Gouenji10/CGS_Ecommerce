import BreadcrumbAdmin from '@/Components/AdminComp/BreadcrumbAdmin';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Alert } from 'flowbite-react';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi'
import { FiCheckCircle } from 'react-icons/fi'

export default function AttributeIndex({ auth, flash }) {
    const [response, setResponse] = useState(flash)
    const props = { response, setResponse }
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
                    <Link href={route('products.attribute.add')}>
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

            </div>
        </AdminLayout>
    )
}