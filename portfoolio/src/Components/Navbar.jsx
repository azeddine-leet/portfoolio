export default function Navbar () {
    const items= [
        {
            key: 1,
            title: 'About',
            link: '/About' 
        },
        {
            key:2,
            title: 'Blogs',
            link: '/Blogs' 
        },
        {
            key:3,
            title: 'Projects',
            link: '/Projects' 
        },
        {
            key:4,
            title: 'Resume',
            link: '/Resume' 
        },
        {
            key:5,
            title: 'Contact',
            link: '/Contact' 
        }
    ];
    const listItems = items.map((item) => 
            <li key={item.key}>
                <a href={ item.link}>{ item.title }</a>
            </li>
        )
    return (
        <>
            <nav className="">
                <a href="/" className="no-underline black hover:underline">
                    <span className="logo">AEL</span> Makk
                </a>
                <ul className="list-none flex-x">{ listItems }</ul>
            </nav>
        </>
    );
}