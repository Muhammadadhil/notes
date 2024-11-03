import { note } from "../types/note";
import { ReactSetState } from "../types/setStateType";
import Button from "./Button";

interface NoteList {
    notes: note[];
    setNotes:ReactSetState<note[]>
}

const NotesList = ({ notes, setNotes }: NoteList) => {

    const handleDelete = (id: string) => {
        console.log('handle Delete funct!!')
        setNotes(notes.filter((item) => item.id !== id));
    };

    return notes.map((item) => {
        return (
            <div key={item.id} className=" h-40 text-center bg-gray-800 p-3  rounded-md m-2 flex flex-col items-center">
                <h3 className="text-bold text-xl">{item.title}</h3>
                <span>({item.tag})</span>
                <p className="">{item.description}</p>

                <Button type="button" className="mt-6 bg-yellow-600 rounded-md p-1 w-[15rem]" onClick={() => handleDelete(item.id)}>
                    Delete
                </Button>
            </div>
        );
    });
};

export default NotesList;
