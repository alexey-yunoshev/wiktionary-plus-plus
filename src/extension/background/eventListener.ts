import { addNote } from "../anki";
import { AnkiResponse } from "../anki/response";
import { logger } from "../logger";
import { AddNoteResponseMessage, MessageType, Messsage } from "../messages";

chrome.runtime.onMessage.addListener(async (message: Messsage) => {
  switch (message.type) {
    case MessageType.addNote: {
      const response = await addNote(message.payload);
      const body: AnkiResponse = await response.json();

      let notificationMessage = "Note added";
      if (body.error !== null) {
        notificationMessage = body.error;
        logger.error(body.error);
      }
    
      chrome.notifications.create("", {
        message: notificationMessage,
        iconUrl: "images/logo.png",
        title: "Wiktionary ++",
        type: "basic",
      });

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs)=> {
        const [tab] = tabs;
        if (tab === undefined) {
          return;
        }

        const tabId = tab.id;
        if (tabId === undefined) {
          return;
        }

        chrome.tabs.sendMessage(tabId, {
          type: MessageType.addNoteResponse,
          payload: body,
        } as AddNoteResponseMessage);  
      });
      break;
    }
    default:
      logger.error(message, `Unexpected message type: ${message.type}`);
  }
});