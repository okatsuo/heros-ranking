import { IController } from '../../presentation/protocols'

export const adaptResolver = async (controller: IController): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
