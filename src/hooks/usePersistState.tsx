import { useState } from 'react';



function usePersistState<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState(() => {
        const savedValue = sessionStorage.getItem(key);
        if (savedValue) {
            return JSON.parse(savedValue) as T;
        } else {
            sessionStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    })

    return [value, (newValue: T) => {
        sessionStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }]
}

export default usePersistState;