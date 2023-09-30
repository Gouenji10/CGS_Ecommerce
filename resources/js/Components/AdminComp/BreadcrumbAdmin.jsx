import { Breadcrumb } from 'flowbite-react';
import { BiHome } from 'react-icons/bi';

export default function BreadcrumbAdmin({ links }) {
    const items = links?.map((item, index) =>
        <Breadcrumb.Item
            key={index}
            href='#'
        >{item.title}</Breadcrumb.Item>
    )
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item
                href="#"
                icon={BiHome}
            >
                <p>Dashboard</p>
            </Breadcrumb.Item>
            {items}
        </Breadcrumb>
    )
}