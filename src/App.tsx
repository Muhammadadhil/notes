import { useState } from "react";
import "./App.css";

type note = {
    title: string;
    description: string;
    tag?: "work" | "personal" | "travel";
};

function App() {
    const [note, setNote] = useState<note[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tag, setTag] = useState<"work" | "personal" | "travel">("personal");

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        setNote((prev) => [...prev, { title, description, tag }]);
        setTitle("");
        setDescription("");
        setTag("personal");
    };

    
    return (
        <div className="w-full flex">
            <div id="list" className="w-2/12 bg-neutral-500 flex flex-col h-screen overflow-y-auto">
                {note.map((item, index) => {
                    return (
                        <div className=" h-40 text-center bg-neutral-800 p-3  rounded-md m-2">
                            <h3 className="text-bold text-xl">{item.title}</h3>
                            <p>{item.description}</p>
                            <span>{item.tag}</span>
                        </div>
                    );
                })}
            </div>

            <div className="w-10/12 h-[100vh] flex flex-col items-center justify-center">
                <h1 className="mb-10 text-3xl font-bold">Notes</h1>
                <div className="w-[500px] ">
                    <form onSubmit={handleAdd} className="flex flex-col items-center bg-neutral-900 p-20 rounded-lg">
                        <input type="text" name="title" className="w-full mb-10 p-3 rounded-md bg-white" placeholder="Add title" value={title} on />
                        <input type="text" name="description" className="w-full mb-10 p-3 rounded-md bg-white" placeholder="Add description" />
                        <select name="tags" id="" className="w-full mb-10 p-3 rounded-md">
                            <option value="option1">Work</option>
                            <option value="option2">Personal</option>
                            <option value="option3">Travel</option>
                        </select>
                        <button type="submit" className="bg-gray-700 w-[20rem] p-2 text-center rounded-md ">
                            Add notes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
