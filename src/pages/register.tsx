import Image from 'next/image'
import '/public/css/style.css'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'


export default function register() {

    // define router
    const router = useRouter()

    // 
    return (
        <div style={{
            margin: '0',
            boxSizing: 'border-box',
            width: '100%',
            height: '100vh',
            padding:'20px'
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

                    <div style={{
                        marginTop: "2rem"
                    }}>
                        <div className='text-gray-500'>Email Address</div>
                        <input className=' w-full bg-blue-50 border border-1 rounded-full' type="text" placeholder='Enter First Name' style={{
                            // border: "1px solid whitesmoke",
                            padding: "10px",
                            // width: "90%",
                            marginTop: "1rem",
                            outline:'none'
                        }} />
                    </div>

                    {/* station */}
                    <div style={{
                        marginTop: "2rem"
                    }}>
                        <div className='text-gray-500'>Enter Station</div>
                        <input type="text" placeholder='Parish' style={{
                            border: "1px solid whitesmoke",
                            padding: "10px",
                            width: "90%",
                            marginTop: "1rem"
                        }} />
                    </div>

                    {/* Enter Password */}
                    <div style={{
                        marginTop: "2rem"
                    }}>
                        <div typeof='label' className='text-gray-500'>Password</div>
                        <input type="text" placeholder='Enter First Name' style={{
                            border: "1px solid whitesmoke",
                            padding: "10px",
                            marginTop: "1rem",
                            width: "90%"
                        }} />
                    </div>

                    {/* confirm password */}

                    <div style={{
                        marginTop: "2rem"
                    }}>
                        <div typeof='label' className='text-gray-500'>Confirm Password</div>
                        <input type="text" placeholder='Confirm Password' style={{
                            border: "1px solid whitesmoke",
                            padding: "10px",
                            marginTop: "1rem",
                            width: "90%"
                        }} />
                    </div>

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
                    <div style={{
                        marginTop: '3rem',
                        marginBottom: '2rem',
                    }}>
                        <div onClick={() => router.push('/register')} role='button' className='primary-btn rounded-md  p-2 text-white text-center' style={{
                            display: 'block',
                            margin: "auto",
                            width: '70%',

                        }}>Login</div>
                    </div>
                    {/* Social Authentication */}

                    <div className="social-main-container">


                        <div className='flex-container'>
                            <div className='social-container'>
                                <Image className='img-button' src={"/imgs/google.png"} alt="Google-logo" height={20} width={50} />
                                <div>
                                    Continue with Google
                                </div>
                            </div>
                            <div className='social-container'>
                                <Image className='img-button' src={"/imgs/facebook.png"} alt="Google-logo" height={20} width={50} />
                                <div>
                                    Continue with Facebook
                                </div>
                            </div>
    

                        </div>
                    </div>



                </form>
            </div>

        </div>

    )
}
