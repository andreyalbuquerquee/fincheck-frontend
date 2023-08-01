import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRegisterController } from "./useRegisterController";

export function Register() {
    const { register, errors, handleSubmit, isLoading } = useRegisterController();
    
    return (
        <>
            <header className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-2xl text-gray-900 font-bold tracking-[-1px]">Crie sua conta</h1>
                <p className="space-x-2">
                    <span className="text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span>
                    <Link className="text-teal-900 font-medium tracking-[-0.5px] hover:underline hover:decoration-solid" to="/login">
                        Fazer login
                    </Link>
                </p>
            </header>
            <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
                <Input error={errors.name?.message} {...register('name')} placeholder="Nome"/>
                <Input error={errors.email?.message} {...register('email')} type="email" placeholder="E-mail"/>
                <Input  error={errors.password?.message} {...register('password')} type="password" placeholder="Senha"/>
                <Button isLoading={isLoading} type="submit">Criar conta</Button>
            </form>
        </>
    );
}