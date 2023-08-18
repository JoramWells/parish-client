import { useRouter } from 'next/router'


type Props = {
  text: String
}
const _remember_me = ({text}:Props) => {

  // Instatiate router object
  const router = useRouter()

  return (
    <div className="block m-auto w-3/4">
      <div className='mt-8 flex justify-between align-center w-full'>
        <div className='flex justify-start align-center'>
          <input type="checkbox" className='accent-blue-500' />
          <div className='ml-2 text-sm text-gray-500'>Remember me</div>
        </div>
        <div onClick={() => router.push('/register')} className='text-blue-500 text-sm cursor-pointer'>
          Fogort password, recover?
        </div>
      </div>

    </div>
  )
}

export { _remember_me }