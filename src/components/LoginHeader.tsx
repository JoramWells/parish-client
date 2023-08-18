import Image from "next/image"


// define props
type Props = {
    text: String

}

const LoginHeader = ({ text }: Props) => {
    return (
        <div className="block m-auto w-3/4">
            <div className="flex justify-between align-center">
                <div className="text-2xl font-bold">
                    {text}
                </div>
                <Image  src='/imgs/close.svg' alt='close-icon' className='icon-response transition ease-in-out delay-150 cursor-pointer bg-gray-50 hover:-translate-y-1' height={15} width={15} />
            </div>

        </div>
    )
}

export default LoginHeader