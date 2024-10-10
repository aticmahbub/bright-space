import { useEffect, useState } from 'react';

const useLoadQuiz = () => {
    const [questions, setQuiz] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/quiz')
            .then(res => res.json())
            .then(data => setQuiz(data))
    }, [questions]);
    return [questions]
};

export default useLoadQuiz;