import AdminLayout from '@/Layouts/AdminLayout';
import BreadcrumbAdmin from "@/Components/AdminComp/BreadcrumbAdmin";
import { Head, Link, useForm } from "@inertiajs/react";
import { Select } from 'flowbite-react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

export default function CategoryAdd({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        parent_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('products.category.store'));
    }
    return (
        <AdminLayout user={auth.user} >
            <Head title="Dashboard" />
            <div className='px-6 pt-6'>
                <BreadcrumbAdmin
                    links={[
                        { title: 'Products' },
                        { title: 'Categories' },
                        { title: 'Create Category' }
                    ]}
                />
                <div className='title-wrapper py-5 mb-2 flex justify-between flex-wrap items-center border-bottom'>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Add New Category</h1>
                </div>
            </div>
            <div className='bg-white'>
                <div className="space-y-8 px-6">
                    <form onSubmit={handleSubmit} className='w-3/4'>
                        <div className='mb-5'>
                            <div className="mb-2 block">
                                <InputLabel htmlFor="addName" value="Category Name" />
                            </div>
                            <TextInput
                                id="name"
                                type="text"
                                value={data.name}
                                className="mt-1 block w-full rounded-sm"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='mb-5'>
                            <div className="mb-2 block">
                                <InputLabel htmlFor="addSlug" value="Category Slug" />
                            </div>
                            <TextInput
                                id="slug"
                                type="text"
                                value={data.slug}
                                className="mt-1 block w-full rounded-sm"
                                onChange={(e) => setData('slug', e.target.value)}
                            />
                            <InputError message={errors.slug} className="mt-2" />
                        </div>
                        <div className='mb-5'>
                            <div className='mb-2 block'>
                                <InputLabel htmlFor="parent_id" value="Select Parent" />
                            </div>
                            <Select
                                id="parent_id"
                                name='parent_id'
                                value={data.display_as}
                                onChange={(e) => setData('parent_id', e.target.value)}
                            >
                                <option value="">Select an option</option>
                                <option value="0">Drop Down</option>
                                <option value="1">Radio Option</option>
                                <option value="2">Swatch</option>
                            </Select>
                            <InputError message={errors.parent_id} className="mt-2" />
                        </div>
                        <div className="flex justify-end gap-3 ">
                            <Link href={route('products.category.index')} className='flex items-center bg-red-600 text-white py-2 px-3 rounded-sm'>
                                No, cancel
                            </Link>
                            <PrimaryButton className="ml-4 rounded-sm" disabled={processing}>
                                Yes, Add New
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}