export type OneBotEventDomainRegistrar = {
  name: string
  register: () => void
}

const registeredOneBotEventDomains = new Set<string>()

export const defineOneBotEventDomainRegistrar = (
  name: string,
  register: () => void,
): OneBotEventDomainRegistrar => {
  return {
    name,
    register: () => {
      if (registeredOneBotEventDomains.has(name)) {
        return
      }

      register()
      registeredOneBotEventDomains.add(name)
    },
  }
}

export const registerOneBotEventDomain = (registrar: OneBotEventDomainRegistrar) => {
  registrar.register()
}

export const registerOneBotEventDomains = (
  registrars: readonly OneBotEventDomainRegistrar[],
) => {
  for (const registrar of registrars) {
    registerOneBotEventDomain(registrar)
  }
}
