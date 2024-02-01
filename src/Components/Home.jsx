import Avatar from "./../assets/avatar.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
    const media = [
        {
            key: 0,
            iconAvatar: <AiFillGithub className="w-8 h-8"/>,
            link: 'https://github.com/aelmakk'
        },
        {
            key: 1,
            iconAvatar: <FaLinkedin className="w-8 h-8" />,
            link: 'https://www.linkedin.com/in/aelmakk/'
        },
    ]

    const socialMediaList = media.map((item) => {
        return (
                <li key={ item.key } >
                    <a href={ item.link } >
                        { item.iconAvatar }
                    </a>
                </li>
        )
    })

    return (
        <div className="text-center	flex justify-center items-center h-[calc(100vh-113px)]">
            <div className="wrap">
                <img 
                    src={Avatar}
                    alt="avatar"
                    className="rounded-full w-60 h-60 bg-red mx-auto"
                />
                <h1 className="font-bold text-2xl">Azeddine Elmakkaoui</h1>
                <h1 className="font-bold text-2xl">Software Developer | Cyber Security Enthusiast | student at 1337</h1>
                <ul className="flex justify-center items-center space-x-4 my-2">{ socialMediaList }</ul>
            </div>
        </div>
    );
}
