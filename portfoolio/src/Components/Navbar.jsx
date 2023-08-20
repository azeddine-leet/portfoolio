import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        {
            key: 1,
            title: 'About',
            link: '/About'
        },
        {
            key: 2,
            title: 'Blogs',
            link: '/Blogs'
        },
        {
            key: 3,
            title: 'Projects',
            link: '/Projects'
        },
        {
            key: 4,
            title: 'Resume',
            link: '/Resume'
        },
        {
            key: 5,
            title: 'Contact',
            link: '/Contact'
        }
    ];

    const listItems = items.map((item) => (
        <li key={item.key}>
            <a href={item.link} className="text-black hover:underline">
                {item.title}
            </a>
        </li>
    ));

    return (
        <nav className="flex justify-between items-center p-4">
            <a
                href="/"
                className="text-xl font-bold text-black no-underline hover:underline"
            >
                <span className="text-blue-500">AEL</span> Makk
            </a>
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black md:hidden block hover:text-blue-500 focus:outline-none"
                >
                    <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <ul className="hidden  md:flex space-x-4">{listItems}</ul>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                        <div className="py-1">{listItems}</div>
                    </div>
                )}
            </div>
        </nav>
    );
}
