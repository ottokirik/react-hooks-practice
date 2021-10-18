// import { List } from 'components/List';
// import { useInput } from 'hooks/useInput';

// import { useDebounce } from 'hooks/useDebounce';
import { useRequest } from 'hooks/useRequest';
// import { useState } from 'react';

function App() {
    // const username = useInput('');
    // const email = useInput('');

    const [todos, loading, error] = useRequest(fetchTodos);
    // const [query, setQuery] = useState('');

    // const debouncedFetch = useDebounce(serach, 500);

    // function serach(query) {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?title=${query}`)
    //         .then((res) => {
    //             if (!res.ok) throw new Error('Нет данных');
    //             return res.json();
    //         })
    //         .then((json) => {
    //             setTodos((prev) => [...prev, ...json]);
    //         })
    //         .catch((e) => console.log(e));
    // }

    function fetchTodos() {
        return fetch(`https://jsonplaceholder.typicode.com/todos`);
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }

    if (error) {
        return <h1>Произошла ошибка при загрузке данных</h1>;
    }

    return (
        <div>
            {/* <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    debouncedFetch(query);
                }}
            /> */}
            {/* <form>
                <input {...email} type="email" name="email" placeholder="Email" />
                <input {...username} type="text" name="username" placeholder="Username" />
            </form>
            <div>{username.value}</div>
            <div>{email.value}</div> */}
            {/* <List /> */}
            {todos &&
                todos.map((todo) => (
                    <div style={{ padding: 30, borderBottom: '1px solid #ccc' }} key={todo.id}>
                        {todo.id} - {todo.title}
                    </div>
                ))}
        </div>
    );
}

export default App;
