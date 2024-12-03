import { useState } from "react";

export const useFormState = () => {
    const [formState, setFormState] = useState(0); // 0 => Estado Inicial || 1 => Adição do textarea

    return [formState, setFormState];
}