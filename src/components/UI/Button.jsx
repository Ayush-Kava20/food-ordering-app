export default function Button({ children, textOnly, className, ...props }) {
  let cssClass = textOnly ? 'px-[0.9rem] py-[0.5rem] text-[#ffc404] hover:cursor-pointer' : 'bg-[#ffc404] text-black px-[0.9rem] py-[0.5rem] rounded-[0.4rem]  hover:cursor-pointer';
  cssClass += ' ' + className;

  return(
  <button className={cssClass} {...props}>
    {children}
  </button>)
}
