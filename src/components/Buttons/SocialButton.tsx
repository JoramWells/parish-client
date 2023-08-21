import Image from 'next/image';

type Props = {
  text: String,
  imgSrc: String
}

function SocialButton({ text, imgSrc }: Props) {
  return (
    <div className="mt-4 w-full text-sm flex justify-center transition ease-in-out
      delay-150 cursor-pointer bg-gray-50 hover:-translate-y-1
      hover:bg-gray-200 p-3
      text-gray-700 rounded-lg motion-reduce:transition-none
      motion-reduce:hover:transform-none"
    >
      <Image
        src={`${imgSrc}`}
        alt="img-logo"
        height={20}
        width={20}
        className="mr-8"
      />
      {text}
    </div>

  );
}

export default SocialButton;
