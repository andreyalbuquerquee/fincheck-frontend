import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = { email: string; password: string };

const schema = z.object({
    email: z.string().nonempty().email(),
    password: z.string().nonempty().min(8),
});

export function useLoginController() {
    const { 
        register,
        handleSubmit: hookFormHandleSubmit,
     } = useForm<FormData>();

     const handleSubmit = hookFormHandleSubmit((data) => {
        schema.parse(data);
     });

     return { handleSubmit, register };
}