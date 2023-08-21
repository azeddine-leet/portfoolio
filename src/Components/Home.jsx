import Avatar from "./../assets/avatar.png"


export default function Home() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-60px)]">
            <div className="wrap">
                <img 
                    src={Avatar}
                    alt="avatar"
                    className="rounded-full w-64 h-64 border border-black bg-black"
                />
                <h1 className="font-bold text-2xl">Azeddine Elmakkaoui</h1>
            </div>
        </div>
    );
}
