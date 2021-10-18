import { List } from 'components/List';
import { useInput } from 'hooks/useInput';

function App() {
    const username = useInput('');
    const email = useInput('');

    return (
        <div>
            <form>
                <input {...email} type="email" name="email" placeholder="Email" />
                <input {...username} type="text" name="username" placeholder="Username" />
            </form>
            <div>{username.value}</div>
            <div>{email.value}</div>
            <List />
        </div>
    );
}

export default App;
