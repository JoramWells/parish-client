import Image from "next/image"

type Props = {
    text: String,
    img_src: String
}

const SocialButton = ({ text, img_src }: Props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: 'space-between',
            width: '250px'

        }}

            className="transition ease-in-out delay-150 cursor-pointer bg-gray-50 hover:-translate-y-1 hover:bg-gray-200 p-2 text-gray-700 rounded-lg motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
            <Image src={`${img_src}`} alt="img-logo" height={20} width={20} />
            {text}</div>
    )
}


export default SocialButton