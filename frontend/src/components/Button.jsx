export default function Button({label, onPress}){
    return(
        <button onClick={onPress} type="button" className="w-full mb-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{label}</button>
    )
}