import { Link } from '@inertiajs/react';
import { Sidebar, } from 'flowbite-react';
import { BiBox,BiBookmarkAltPlus, BiCog, BiSolidDashboard, BiShoppingBag, BiUser } from 'react-icons/bi';

export default function SidebarAdmin() {
    return (
        <Sidebar aria-label="Sidebar"
            className='h-full bg-gray-50 border-r'
        >
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={BiSolidDashboard}><Link href={route('admin.dashboard')}><p>Dashboard</p></Link></Sidebar.Item>
                    <Sidebar.Collapse icon={BiShoppingBag} label="E-commerce">
                        <Sidebar.Item>Orders</Sidebar.Item>
                        <Sidebar.Item>Refunds</Sidebar.Item>
                        <Sidebar.Item>Shipping</Sidebar.Item>
                        <Sidebar.Item>Settings</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={BiBookmarkAltPlus} label="Marketing" >
                        <Sidebar.Item>Coupons</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={BiBox} label="Products">
                        <Sidebar.Item><Link href={route('products.index')}><p>All Products</p></Link></Sidebar.Item>
                        <Sidebar.Item><Link href={route('products.category.index')}>Categories</Link> </Sidebar.Item>
                        <Sidebar.Item><Link href={route('products.attribute.index')}>Attributes</Link> </Sidebar.Item>
                        <Sidebar.Item>Tags</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item icon={BiUser}><Link href={route('customers.index')}><p>Customers</p></Link></Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiCog}>
                        <p>Settings</p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}