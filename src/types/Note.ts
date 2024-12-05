// export interface Note {
//     id: number;
//     title: string;
//     body: string;
//     creatorId: number;
// }

import { User } from "./User";

export interface Note {
    id: number;
    title: string;
    body: string;
    creator: User;
}
