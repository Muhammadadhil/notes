import { ReactSetState } from "../types/setStateType";

interface Textarea {
    text: string;
    setText: ReactSetState<string>;
}

const Textarea = ({ text, setText }: Textarea) => {
    return (
        <>
            <textarea
                name="description"
                className="w-full p-3 rounded-md bg-neutral-200 text-black"
                placeholder="Type your notes here.."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
        </>
    );
};

export default Textarea;
