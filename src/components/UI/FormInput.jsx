export default function Input({label, id , ...props}) {
  return (
    <p className="my-[0.5rem] flex flex-col">
        <label htmlFor={id} className="font-bold mb-[0.5rem]">{label}</label>
        <input className="w-full max-w-[20rem] p=[0.5rem] border rounded-[4px] border-[#ccc] py-1 px-2"  name={id}  id={id} required {...props}/>
    </p>
)
}
