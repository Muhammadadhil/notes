import { ReactSetState } from "../types/setStateType";
import { Tag } from "../types/tagEnum";

type Select = {
    item: string;
    setItem: ReactSetState<Tag>;
};

const Select = ({ item, setItem }: Select) => {
    return (
        <div className="w-full">
            <select name="tags" id="" className="w-full p-3 rounded-md" value={item} onChange={(e) => setItem(e.target.value as Tag)}>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="travel">Travel</option>
            </select>
        </div>
    );
};

export default Select;
