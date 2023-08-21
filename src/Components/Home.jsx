import Avatar from "./../assets/avatar.png"


export default function Home() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-60px)]">
            <div className="wrap">
                <img 
                    src={Avatar}
                    alt="avatar"
                    className="rounded-full w-60 h-60 bg-red"
                />
                <h1 className="font-bold text-2xl">Azeddine Elmakkaoui</h1>
                <h1 className="font-bold text-2xl">Security Engineer | Software Developer</h1>
            </div>
        </div>
    );
}
