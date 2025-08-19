export default function Error({ title, message}){
    return (
        <div className="mx-auto max-w-[20rem] rounded my-5 p-4 flex flex-col  bg-amber-200 text-black">
            <h2 className="text-[1.3rem]">
                {title}
            </h2>
            <p className="text-[1rem]">
                {message}
            </p>
        </div>
    )
}