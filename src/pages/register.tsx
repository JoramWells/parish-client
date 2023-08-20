import Image from 'next/image'
import '/public/css/style.css'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import SocialButton from '@/components/Buttons/SocialButton'
import TextInput from '@/components/TextInput'


export default function Register() {

    // define router
    const router = useRouter()

    // 
    return (
        <div style={{
            margin: '0',
            boxSizing: 'border-box',
            width: '100%',
            height: '100vh',
            padding: '20px'
        }}>
            <div style={{
                margin: 'auto',
                display: 'block',
                width: '45%',
                backgroundColor: 'white',
                padding: "20px",
                borderRadius: "15px",
                // marginTop: "10rem"

            }}>


                <form autoComplete='off'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            fontWeight: "bold"
                        }} className='text-3xl text-gray-700 font-bold' >
                            Sign Up
                        </div>
                        <Image src='/imgs/close.svg' alt='close-icon' className='icon-response' height={15} width={15} />
                    </div>

                    {/* Input files */}
                    <TextInput label='Email Address' placeholder='Enter Email Address' type='text' />

                    <TextInput label='Station' placeholder='Enter Station' type='text' />


                    <TextInput label='Password' placeholder='Enter Password' type='text' />


                    <TextInput label='Confirm Password' placeholder='Re-enter Password' type='text' />




                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                            <input type="checkbox" />
                            <div className='ml-2 text-sm text-gray-500'>Remember me</div>
                        </div>
                        <div className='text-blue-500 text-sm'>
                            Fogort password, recover?
                        </div>
                    </div>

                    {/* Register */}
                    <div style={{
                        marginTop: '3rem',
                        marginBottom: '2rem',
                    }}

                        className='transition ease-in-out delay-150 cursor-pointer bg-gray-50 hover:-translate-y-1'

                    >
                        <div role='button' className='primary-btn rounded-md  p-2 text-white text-center' style={{
                            display: 'block',
                            margin: "auto",
                            width: '70%',

                        }}>Register</div>
                    </div>
                    {/* Social Authentication */}


                    <div className='flex flex-row justify-between'>
                        <SocialButton text={'Continue with Google'} img_src={'/imgs/google.png'} />
                        <SocialButton text={'Continue with Facebook'} img_src={'/imgs/facebook.png'} />
                    </div>

                </form>
            </div>

        </div>

    )
}
