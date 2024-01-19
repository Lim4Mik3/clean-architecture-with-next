import { makeUserCreateHandler } from '../../factories/handlers/make-user-create-handler'
import { UserCreateHandler } from '../../handlers/user-create-handler';

interface HookReturn {
  userCreateHandler: UserCreateHandler;
}

export function useUserCreate(): HookReturn {
  const userCreateHandler = makeUserCreateHandler();

  return { userCreateHandler }
}