import { accountEventRegistrar, registerAccountEvents } from "./register-account-events"
import { loginEventRegistrar, registerLoginEvents } from "./register-login-events"
import { messageEventRegistrar, registerMessageEvents } from "./register-message-events"
import { registerOneBotEventDomains as registerNamedOneBotEventDomains } from "./register-event-domain"

export const oneBotEventRegistrars = [
  messageEventRegistrar,
  loginEventRegistrar,
  accountEventRegistrar,
] as const

export const registerOneBotEventDomains = (
  registrars = oneBotEventRegistrars,
) => {
  registerNamedOneBotEventDomains(registrars)
}

export const registerOneBotEvents = () => {
  registerOneBotEventDomains()
}
