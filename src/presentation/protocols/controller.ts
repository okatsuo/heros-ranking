import { HttpResponse } from '.'

export type IController = {
  handle: () => Promise<HttpResponse>
}
