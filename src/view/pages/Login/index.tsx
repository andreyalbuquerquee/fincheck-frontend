import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";

export function Login() {
    const { handleSubmit, register, errors } = useLoginController();
    
    return (
        <>
            <header className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl text-gray-900 font-bold tracking-[-1px]">Entre em sua conta</h1>
                <p className="space-x-2">
                    <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
                    <Link className="text-teal-900 font-medium tracking-[-0.5px] hover:underline hover:decoration-solid" to="/register">
                        Crie uma conta
                    </Link>
                </p>
            </header>
            <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
                <Input error={errors.email?.message} type="email" placeholder="E-mail" {...register('email')}/>
                <Input error={errors.password?.message} type="password" placeholder="Senha" {...register('password')}/>
                <Button type="submit">Entrar</Button>
            </form>
        </>
    );
}