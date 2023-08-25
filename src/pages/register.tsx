import Image from 'next/image';
import '../../public/css/style.css';
// import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css';
import SocialButton from '@/components/Buttons/SocialButton';
import TextInput from '@/components/TextInput';
import LoginHeader from '@/components/LoginHeader';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

export default function Register() {
  // define router
  // const router = useRouter()

  //
  return (
    <div className="p-4">
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
        className="w-full  lg:w-1/2 md:w-full sm:w-full"
      >

        <form autoComplete="off" className="flex justify-center align-center flex-col">

          {/* login header */}
          <LoginHeader text="Sign Up" />

          {/* Input files */}
          <TextInput label="Email Address" placeholder="Enter Email Addres" />

          <TextInput label="Station" placeholder="Enter Station" />

          <TextInput label="Password" placeholder="Enter Password" />

          <TextInput label="Confirm Password" placeholder="Re-enter Password" />

          {/* Register */}

          <PrimaryButton text="Sign Up" />

          {/* Social Authentication */}

          <div className="w-full p-4 lg:p-0 lg:w-3/4 m-auto block">
            <div className=" flex flex-col lg:flex-row justify-between ">
              <SocialButton text="Continue with Google" imgSrc="/imgs/google.png" />
              <SocialButton text="Continue with Facebook" imgSrc="/imgs/facebook.png" />

            </div>
          </div>

        </form>

      </div>
    </div>

  );
}
