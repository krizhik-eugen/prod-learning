import React, {useState} from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button
                className={styles.btn}
                onClick={()=>setCount(prev => prev+1)}>Count</button>
            <h2>{count}</h2>
        </div>
    );
};
