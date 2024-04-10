const React = require('react');
const DefaultLayout = require('../layout/Default')
class Index extends React.Component {
    render() {
        const { users } = this.props;
        // const users = this.props.users;
        return (
            <DefaultLayout title={"Users Index Page"}>
                <nav>
                    <a href="/users/new">Create a New Users</a>
                </nav>
                <ul>
                    {users.map((users, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/users/${users._id}`}>
                                    {users.name}
                                </a> {' '}
                                is {users.dates} <br></br>
                                {users.readyToRead
                                ? `It is ready to read`
                            :   `It is NOT ready to read`}
                            <br />
                            <a href={`/users/${users._id}/edit`}>Edit This users</a>
                            <form action={`/users/${users._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = Index;