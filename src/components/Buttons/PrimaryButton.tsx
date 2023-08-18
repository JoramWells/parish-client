
import '/public/css/style.css'


type Props = {
    text: String
}

const PrimaryButton = ({ text }: Props) => {
    return (
        <div className="mt-8 mb-4 transition ease-in-out delay-150 cursor-pointer bg-gray-50 hover:-translate-y-1">
            <div role='button' className='w-3/4 m-auto primary-btn rounded-md  p-2 text-white text-center' style={{
                display: 'block',

                // width: '70%',

            }}>{text}</div>
        </div>
    )
}

export default PrimaryButton