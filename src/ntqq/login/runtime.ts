import { getNTLoginServiceWhenReady } from "../core/lifecycle"

type NTReadyLoginService = Awaited<ReturnType<typeof getNTLoginServiceWhenReady>>

export const withReadyNTLoginService = async <TResult>(
  execute: (loginService: NTReadyLoginService) => Promise<TResult>,
) => {
  const loginService = await getNTLoginServiceWhenReady()
  return execute(loginService)
}
