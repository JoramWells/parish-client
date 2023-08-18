
type Props = {
    label: string,
    placeholder: string,
    type: string
}

function TextInput({ label, placeholder, type }: Props) {
    return (
        <div className="mt-10 w-3/4 m-auto block ">
            <label htmlFor="email" className="text-gray-700">
                {label}
            </label>
            <input typeof="text" className="transition ease-in-out delay-150 focus:ring focus:ring-blue-50 focus:-translate-y-1 hover:-translate-y-1 border-1 rounded-lg bg-blue-50 p-2 w-full mt-3 border-blue-200" type="text" placeholder={placeholder} style={{
                outline:'0'

            }} />
        </div>
    )
}

export default TextInput