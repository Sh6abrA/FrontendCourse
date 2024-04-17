import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';



export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true)
    }
    useEffect(() => {
        if(!error) return
        throw new Error();
    },[error])
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow} theme={ButtonTheme.OUTLINE}>
            throw Error
        </Button>
    );
}

