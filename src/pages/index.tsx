import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
// import tailwind

function index() {

  // define router
  const router = useRouter()
  return (
    <div className='cursor-pointer text-blue-500' onClick={() => router.push('/login')}>index</div>
  )
}

export default index