type Props = {
  label: string,
  placeholder: string,
}

function TextInput({ label, placeholder }: Props) {
  return (
    <div className="w-full p-4 mt-2 lg:mt-5 md:mt-5 sm:mt-5 lg:w-3/4 md:w-3/4 m-auto block ">
      <label htmlFor="email" className="text-gray-700">
        {label}
      </label>
      <input
        className="transition ease-in-out delay-150
          focus:ring focus:ring-blue-50 focus:-translate-y-1
          hover:-translate-y-1 border-1 rounded-lg bg-blue-50 p-2
          w-full mt-3 border-blue-200"
        type="text"
        placeholder={placeholder}
        style={{
          outline: '0',

        }}
      />
    </div>
  );
}

export default TextInput;
