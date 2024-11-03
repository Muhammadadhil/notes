
import { ReactSetState } from "../types/setStateType";

type Input = {
    type: "text" | "password" | "number" | "email" | "color";
    value: string;
    handleInputChange: ReactSetState<string>;
};

const Input = ({ type, value, handleInputChange }: Input) => {
    return (
        <>
            <input type={type} className="w-full  p-3 rounded-md bg-neutral-200 text-black" placeholder="Add title" value={value} onChange={(e) => handleInputChange(e.target.value)} required/>
        </>
    );
};

export default Input;
