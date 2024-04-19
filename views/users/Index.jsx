const React = require('react');
const DefaultLayout = require('../layout/Default')
class Index extends React.Component {
    render() {
        const { users } = this.props;
        // ////
        return (
            <DefaultLayout title={"Users Index Page"}>
                <nav>
                    <a href="/users/new">Create a New Users</a>
                </nav>
                <ul>
                    {users.map((user, i) => {
                        return (
                            <li key={i}>
                                The {' '}
                                <a href={`/users/${user._id}`}>
                                    {user.name}
                                </a> {' '}
                                is {user.email} 
                                and {user.DOB}
                                
                                <br></br>
                                {user.readyToRead
                                ? `It is ready to read`
                            :   `It is NOT ready to read`}
                            <br />
                            <a href={`/users/${user._id}/edit`}>Edit This user</a>
                            <form action={`/users/${user._id}?_method=DELETE`} method="POST">
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