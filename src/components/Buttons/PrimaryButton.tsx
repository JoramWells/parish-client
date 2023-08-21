import '../../../public/css/style.css';

type Props = {
  text: String
}

function PrimaryButton({ text }: Props) {
  return (
    <div className="p-4 mt-4 lg:mt-8 sm:mt-8 md:mt-8 mb-4
    transition ease-in-out delay-150 cursor-pointer
    bg-gray-50 hover:-translate-y-1"
    >
      <div
        tabIndex={0}
        role="button"
        className="w-full lg:w-3/4 md:w-3/4 sm:w-3/4
        m-auto primary-btn rounded-md
        p-2 text-white text-center"
        style={{
          display: 'block',

          // width: '70%',

        }}
      >
        {text}
      </div>
    </div>
  );
}

export default PrimaryButton;
