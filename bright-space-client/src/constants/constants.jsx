import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const footItems = [
    {
        name: 'Contact',
        cls: 'column',
        routes: [
            {
                name: 'hello@brightspace.com',
                icon: IoIosMail
            },
            {
                name: '+91 91813 23 2309',
                icon: FaPhoneAlt
            },
            {
                name: 'Somewhere in the World',
                icon: FaLocationDot
            },
        ],
    },
    {
        name: 'Information',
        cls: 'column',
        routes: [
            {
                name: 'About Us',
                link: '/'
            },
            {
                name: 'Contact Us',
                link: '/'
            },
            {
                name: 'Latest News',
                link: '/'
            },
            {
                name: 'My Account',
                link: '/'
            },
        ],
    },
    {
        name: 'Courses',
        cls: 'column',
        routes: [
            {
                name: 'Basic Guitar Lessons',
                link: '/'
            },
            {
                name: 'Advanced Mathematics',
                link: '/'
            },
            {
                name: 'Modern Web Development',
                link: '/'
            },
            {
                name: 'Introduction to Psychology',
                link: '/'
            },
        ],
    },
    {
        name: 'Follow Us',
        cls: 'row',
        description: 'Feel free to connect with us on social media for latest updates.',
        routes: [
            {
                name: FaFacebookSquare,
                link: '/'
            },
            {
                name: FaInstagramSquare,
                link: '/'
            }
        ],
    },
];

export { footItems }