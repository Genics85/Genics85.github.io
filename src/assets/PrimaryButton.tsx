import { IconifyIcon, InlineIcon } from '@iconify/react/dist/iconify.js'

type buttonProps={
    text:string,
    icon:string | IconifyIcon,
    
}

function PrimaryButton({text,icon}:buttonProps):JSX.Element {
  return (
    <button  className='bg-primary flex flex-row py-1 h-10 space-x-3 justify-center items-center px-4 max-w-fit rounded-md text-white hover:bg-darkPrimary'>
        <InlineIcon icon={icon}/>
        <h5 className=' cursor-pointer'>{text}</h5>
    </button>
  )
}

export function PrimarySubmitButton({text,icon}:buttonProps):JSX.Element {
  return (
    <button type='submit' className='bg-primary flex flex-row py-1 h-10 space-x-3 justify-center items-center px-4 max-w-fit rounded-md text-white hover:bg-darkPrimary'>
        <InlineIcon icon={icon}/>
        <h5 className=' cursor-pointer'>{text}</h5>
    </button>
  )
}
export function SecondaryButton({text,icon}:buttonProps):JSX.Element {
  return (
    <div className='bg-darkPrimary space-x-3 flex cursor-pointer flex-row justify-center items-center px-4 max-w-fit h-10 rounded-md text-white hover:bg-secondaryHover'>
        <InlineIcon icon={icon}/>
        <h5 className='text-1xl'>{text}</h5>
    </div>
  )
}

export default PrimaryButton