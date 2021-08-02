import logo from '../assets/Logo.svg'

function Footer() {
    return (
        <div className="flex justify-between pb-20 px-32 items-end">
            <img className="pt-16" src={logo} alt="logo"></img>
            <div className="flex w-2/6 h-auto justify-between">
                <button className="font-light text-xl antialiased">Terms and Conditions</button>
                <button className="font-light text-xl antialiased">Privacy Policy</button>
            </div>
        </div>
    )
}
export default Footer