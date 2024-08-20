import './Spinner.css'
function Spinner()
{
    return(
        <div>
            <div className="spinner"></div>
            <p className=' text-lg font-semibold text-blue-950'>
                Loading...
            </p>
        </div>
    )
}
export default Spinner;