import AdminLayout from '@/Layouts/AdminLayout';
import BreadcrumbAdmin from '@/Components/AdminComp/BreadcrumbAdmin';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { Button, Select } from 'flowbite-react';
import { useEffect } from 'react';

export default function AttributeAdd({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        display_as: '',
    });
    useEffect(() => {
        return (
            reset('display_as', 'name', 'slug')
        )
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('products.attribute.store'));
    };
    return (
        <AdminLayout user={auth.user} >
            <Head title="Dashboard" />
            <div className='px-6 pt-6'>
                <BreadcrumbAdmin
                    links={[
                        { title: 'Products' },
                        { title: 'Attributes' },
                        { title: 'Create Attribute' }
                    ]}
                />
                <div className='title-wrapper py-5 mb-2 flex justify-between flex-wrap items-center border-bottom'>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Add New Attribute</h1>
                </div>
            </div>
            <div className='bg-white'>
                <div className="space-y-8 px-6">
                    <form onSubmit={handleSubmit} className='w-3/4'>
                        <div className='mb-5'>
                            <div className="mb-2 block">
                                <InputLabel htmlFor="addName" value="Atribute Name" />
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
                                <InputLabel htmlFor="addSlug" value="Atribute Slug" />
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
                                <InputLabel htmlFor="display_as" value="Display as" />
                            </div>
                            <Select
                                id="display_as"
                                name='display_as'
                                value={data.display_as}
                                onChange={(e) => setData('display_as', e.target.value)}
                            >
                                <option value=''>Select an option</option>
                                <option value="select">Drop Down</option>
                                <option value="radio">Radio Option</option>
                                <option value="swatch">Swatch</option>
                            </Select>
                            <InputError message={errors.display_as} className="mt-2" />
                        </div>
                        <div className="flex justify-end gap-3 ">
                            <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                                No, cancel
                            </Button>
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