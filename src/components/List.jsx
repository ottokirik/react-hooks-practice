import { useScroll } from 'hooks/useScroll';
import { useRef, useState } from 'react';

export const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);

    const parentRef = useRef();
    const childRef = useRef();

    const limit = 20;

    useScroll({
        parentRef,
        childRef,
        cb: () => {
            fetchTodos({ page, limit });
        },
    });

    function fetchTodos({ page, limit }) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then((res) => {
                if (!res.ok) throw new Error('Нет данных');
                return res.json();
            })
            .then((json) => {
                setTodos((prev) => [...prev, ...json]);
                setPage((prev) => prev + 1);
            })
            .catch((e) => console.log(e));
    }

    return (
        <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
            {todos.map((todo) => (
                <div style={{ padding: 30, borderBottom: '1px solid #ccc' }} key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            ))}
            <div ref={childRef} style={{ height: 20 }} />
        </div>
    );
};
