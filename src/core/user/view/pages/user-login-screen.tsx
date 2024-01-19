import { useUserCreate } from "@/src/core/user/view/hooks/useUserCreate";

const UserLoginScreen = () => {
  const { userCreateHandler } = useUserCreate();

  const handleCreateUser = async () => {
    const result = 
      await userCreateHandler.execute({ email: 'test@test.com', name: 'Leonardo', password: 'test' })

    console.log("USUARIO CRIADO", result);
  }

  return (
    <div className="bg-green-300 flex items-center justify-center h-full">

    <div className="px-4 flex flex-col items-center">
      <input type="text" className="px-4 py-2 w-80" placeholder="Digite o nome do usuário" />
      <button 
        type="button" 
        className="bg-slate-800 px-5 py-2 mt-4 text-white"
        onClick={handleCreateUser}
      >
          Acessar
      </button>
    </div>

    </div>
  )
}

export { UserLoginScreen };