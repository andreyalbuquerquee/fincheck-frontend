import illustration from '../../assets/illustration.png'

export function AuthLayout() {
    return (
        <div className="flex h-full w-full">
            <div className="w-1/2 h-full"></div>
            <div className="w-1/2 h-full flex justify-center items-center p-8 relative">
                <img src={illustration} className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"/>
                <div className="absolute max-w-[656px] bottom-8 bg-white p-10 rounded-b-[32px]">
                    <p>Gerencie suas finanças pessoais de uma forma simples 
                        com o fincheck, e o melhor, totalmente de graça!</p>
                </div>
            </div>
            
        </div>
    );
}