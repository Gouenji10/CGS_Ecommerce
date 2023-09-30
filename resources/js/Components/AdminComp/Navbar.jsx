import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import ResponsiveNavLink from '../ResponsiveNavLink';

export default function NavbarAdmin() {
    return (
        <>
            <Navbar
                rounded
                className='w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'
            >
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>

                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        
                        <Dropdown.Divider />                        
                        <Dropdown.Item>
                            <ResponsiveNavLink method="post" href={route('logout')}>
                                Sign out
                            </ResponsiveNavLink>
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}