import Avatar from "./../assets/avatar.png"
export default function Home() {
    return (
        <>
            <img 
                src={ Avatar }
                alt="avatar"
                className="rounded-full w-64 h-64 border border-black bg-black"
            />
            <h1 className="">Azeddine Elmakkaoui</h1>
        </>
    );
}