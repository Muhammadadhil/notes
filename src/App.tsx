import { useState } from "react";
import "./App.css";

type note = {
    id: string;
    title: string;
    description: string;
    tag?: "work" | "personal" | "travel";
};

function App() {
    const [notes, setNotes] = useState<note[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tag, setTag] = useState<"work" | "personal" | "travel">("personal");

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        setNotes((prev) => [...prev, { id: Date.now().toString(), title, description, tag }]);
        setTitle("");
        setDescription("");
        setTag("personal");
    };

    const handleDelete = (id:string) => {
        setNotes(notes.filter((item) => item.id !== id));
    };

    return (
        <div className="w-full flex">
            <div id="list" className="w-4/12 bg-gray-900 flex flex-col h-screen overflow-y-auto">
                {notes.map((item) => {
                    return (
                        <div key={item.id} className=" h-40 text-center bg-gray-800 p-3  rounded-md m-2 flex flex-col">
                            <h3 className="text-bold text-xl">{item.title}</h3>
                            <span>({item.tag})</span>
                            <p className="">{item.description}</p>

                            <button onClick={() => handleDelete(item.id)} className="mt-6 bg-yellow-600 rounded-md">
                                delete
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="w-8/12 h-[100vh] flex flex-col items-center justify-center">
                <h1 className="mb-10 text-3xl font-bold">Notes</h1>
                <div className="w-[500px] ">
                    <form onSubmit={handleAdd} className="flex flex-col items-center bg-neutral-900 p-20 rounded-lg">
                        <input type="text" name="title" className="w-full mb-10 p-3 rounded-md bg-white text-black" placeholder="Add title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea name="description" className="w-full mb-10 p-3 rounded-md bg-white text-black" placeholder="Add description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <select name="tags" id="" className="w-full mb-10 p-3 rounded-md" value={tag} onChange={(e) => setTag(e.target.value as "work" | "personal" | "travel")}>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="travel">Travel</option>
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
