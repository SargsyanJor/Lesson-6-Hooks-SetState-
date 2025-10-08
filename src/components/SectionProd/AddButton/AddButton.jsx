import { IoBagAddSharp } from "react-icons/io5";

function AddButton({ change, setChange }) {


    return <>
        <div className={change ? "btnGreen" : "btnGreen"
        }>
            <div onClick={() => setChange(!true)}>
                <IoBagAddSharp />
            </div>
        </div>
    </>
}

export default AddButton