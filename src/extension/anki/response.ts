export interface AnkiResponseSuccess {
  result: number,
  error: null
}

export interface AnkiResponseFail {
  result: null,
  error: string
}

export type AnkiResponse = AnkiResponseSuccess | AnkiResponseFail;
