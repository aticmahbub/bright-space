import { useEffect, useState } from 'react';

const useLoadQuiz = () => {
    const [questions, setQuiz] = useState([]);
    useEffect(() => {
        fetch('https://bright-space-server.vercel.app/quiz')
            .then(res => res.json())
            .then(data => setQuiz(data))
    }, [questions]);
    return [questions]
};

export default useLoadQuiz;