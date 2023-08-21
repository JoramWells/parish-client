
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

// import custom components
const TextInput = dynamic(() => import('@/components/TextInput'), {
  loading: () => <p>Loading</p>,
})

const SocialButton = dynamic(() => import("@/components/Buttons/SocialButton"), {
  loading: () => <p>Loading</p>,
})

const LoginHeader = dynamic(() => import("@/components/LoginHeader"), {
  loading: () => <p>Loading</p>
})
// import TextInput from '@/components/TextInput';
// import SocialButton from '@/components/Buttons/SocialButton';
// import LoginHeader from '@/components/LoginHeader';


import '../../public/css/style.css';

// util components
import PrimaryButton from '@/components/Buttons/PrimaryButton';

// define metadata
export const metadata = {
  title: 'Login',
};

export default function Login() {
  // define router
  const router = useRouter();

  //
  return (

    <div className='p-4'>
      <div
        style={{
          margin: 'auto',
          display: 'block',
          // width: '45%',
          backgroundColor: 'white',
          // padding: '20px',
          borderRadius: '15px',
          // marginTop: "10rem"

        }}
        className="w-full w-1/2 lg:w-1/2 md:w-full sm:w-full"
      >
        <div className="flex justify-center align-center flex-col">

          {/* header */}
          <LoginHeader text="Sign In" />

          <TextInput label="Email Address" placeholder="Enter Email Address" />

          {/* Enter Password */}

          <TextInput label="Password" placeholder="Enter Password" />

          <div className="block m-auto w-3/4">
            <div className="mt-8 flex justify-between align-center w-full">
              <div className="flex justify-start align-center">
                <input type="checkbox" className="accent-blue-500" />
                <div className="ml-2 text-sm text-gray-500">Remember me</div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={() => router.push('/register')}
                onClick={() => router.push('/register')}
                className="text-blue-500 text-sm cursor-pointer"
              >
                Forgot password, recover?
              </div>
            </div>
          </div>

          {/* Login Button */}
          <PrimaryButton text="Sign In" />

        </div>

        <div className="text-2xl text-gray-500 font-bold text-center mt-5 mb-5">
          OR
        </div>

        <div className="w-3/4 m-auto block">
          <div className=" flex flex-row justify-between ">
            <SocialButton text="Continue with Google" imgSrc="/imgs/google.png" />
            <SocialButton text="Continue with Facebook" imgSrc="/imgs/facebook.png" />

          </div>
        </div>

      </div>
    </div>

  );
}
