import '/public/css/style.css'
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'
import TextInput from '@/components/TextInput'
import SocialButton from '@/components/Buttons/SocialButton'
import LoginHeader from '@/components/LoginHeader'

// util components
import { _remember_me } from '@/utils/reusable'
import PrimaryButton from '@/components/Buttons/PrimaryButton'


// define metadata
export const metadata= {
  title:'Login'
}

export default function login() {

  // define router
  const router = useRouter()

  // 
  return (

    <div style={{
      margin: 'auto',
      display: 'block',
      // width: '45%',
      backgroundColor: 'white',
      padding: "20px",
      borderRadius: "15px",
      // marginTop: "10rem"

    }}
      className='w-1/2 lg:w-1/2 md:w-48'
    >
      <div className='flex justify-center align-center flex-col'>

        {/* header */}
        <LoginHeader text={'Sign In'} />


        <TextInput label='Email Address' placeholder='Enter Email Address' type='text' />

        {/* Enter Password */}

        <TextInput label='Password' placeholder='Enter Password' type='password' />


        <div className='block m-auto w-3/4'>
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

        {/* Login Button */}
        <PrimaryButton text={'Sign In'} />




      </div>


      <div className='text-2xl text-gray-500 font-bold text-center mt-5 mb-5'>
        OR
      </div>

      <div className='w-3/4 m-auto block'>
        <div className=' flex flex-row justify-between '>
          <SocialButton text={'Continue with Google'} img_src={'/imgs/google.png'} />
          <SocialButton text={'Continue with Facebook'} img_src={'/imgs/facebook.png'} />

        </div>
      </div>

    </div>


  )
}
