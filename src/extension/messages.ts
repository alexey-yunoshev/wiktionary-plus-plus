import { BasicAddNoteParams } from "./anki/addNote";
import { AnkiResponse } from "./anki/response";

export enum MessageType {
    addNote,
    addNoteResponse,
}

export interface AddNoteMessage {
    type: MessageType.addNote,
    payload: BasicAddNoteParams,
}

export interface AddNoteResponseMessage {
    type: MessageType.addNoteResponse,
    payload: AnkiResponse,
}

export type Messsage =
 | AddNoteMessage
 | AddNoteResponseMessage
;