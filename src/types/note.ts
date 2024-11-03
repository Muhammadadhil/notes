import { Tag } from "./tagEnum";

export type note = {
    id: string;
    title: string;
    description: string;
    tag?: Tag;
};
