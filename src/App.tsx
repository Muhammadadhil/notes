import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import { Tag } from "./types/tagEnum";
import Select from "./components/Select";
import Button from "./components/Button";
import { note } from "./types/note";
import NotesList from "./components/NotesList";

function App() {
    const [notes, setNotes] = useState<note[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tag, setTag] = useState<Tag>(Tag.Work);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setNotes((prev) => [...prev, { id: Date.now().toString(), title, description, tag }]);
        setTitle("");
        setDescription("");
        setTag(Tag.Work);
    };

    return (
        <div className="w-full flex">
            <div id="list" className="w-4/12 bg-gray-900 flex flex-col h-screen overflow-y-scroll">
                {notes.length < 1 ? <h2 className="text-center mt-7">No notes right now!</h2> : <NotesList notes={notes} setNotes={setNotes} />}
            </div>

            <div className="w-8/12 h-[100vh] flex flex-col items-center justify-center">
                <h1 className="mb-10 text-3xl font-bold">Notes</h1>
                <div className="w-[500px]">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-neutral-900 p-10 rounded-lg space-y-5 border">
                        <Input type="text" value={title} handleInputChange={setTitle} />
                        <Textarea text={description} setText={setDescription} />
                        <Select item={tag} setItem={setTag} />
                        <Button type="submit" className={"bg-gray-700 w-[20rem] p-2 text-center rounded-md "}>
                            Add
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
