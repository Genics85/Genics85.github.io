import { InlineIcon } from '@iconify/react/dist/iconify.js'

type stackProp = {
    title: string,
    details: string,
    icons: Array<string>
}
function TechStacks({title,details,icons}:stackProp) {
  return (
    <div className='p-3 bg-white w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-y-3 rounded-md hover:bg-cardGrey'>
        <div className="flex flex-row gap-x-3">
            {icons.map((icon,index)=>{
                return(
                    <InlineIcon key={index} className="text-2xl" icon={icon}/>
                )
            })}
        </div>
        <h2 className='font-bold text-2xl text-start'>
            {title}
        </h2>
        <p className="text-start text-1xl">
            {details}
        </p>
    </div>
  )
}

export default TechStacks