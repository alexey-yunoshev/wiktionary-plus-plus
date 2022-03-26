import { invokeAction } from "./invokeAction";
import { ActionType } from "./actions";

/**
 * @see __addNote__ in [docs](https://foosoft.net/projects/anki-connect/#note-actions)
 */
export interface AddNoteParams {
  note: {
    deckName: string;
    modelName: "Basic";
    fields: {
      Front: string;
      Back: string;
    };
    options?: {
      allowDuplicate: false;
      duplicateScope: "deck";
      duplicateScopeOptions: {
        deckName?: string | null;
        checkChildren?: boolean;
        checkAllModels: boolean;
      };
    };
    tags?: string[];
  };
}

export interface BasicAddNoteParams {
    deckName: AddNoteParams["note"]["deckName"],
    front: AddNoteParams["note"]["fields"]["Front"],
    back: AddNoteParams["note"]["fields"]["Back"]
}

export function getDefaultAddNoteParams({
front,
back,
deckName
}: BasicAddNoteParams): AddNoteParams {
  return {
    note: {
      deckName,
      modelName: "Basic",
      fields: {
        Front: front,
        Back: back,
      },
      options: {
        allowDuplicate: false,
        duplicateScope: "deck",
        duplicateScopeOptions: {
          deckName: null,
          checkChildren: false,
          checkAllModels: false,
        },
      },
      tags: [],
    },
  };
}

export function addNote(params: BasicAddNoteParams) {
  return invokeAction({
      action: ActionType.AddNote,
      params: getDefaultAddNoteParams(params),
  });
}
