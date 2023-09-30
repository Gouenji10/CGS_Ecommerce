import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function DashboardAdmin({ auth }) {
    return (
        <AdminLayout user={auth.user} >
            <Head title="Dashboard" />
            <p>You're logged in as a admin!</p>
        </AdminLayout>
    )
}