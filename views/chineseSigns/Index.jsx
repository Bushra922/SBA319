const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { chineseSigns        } = this.props;
        // const chineseSigns = this.props.chineseSigns;

        return (
            <DefaultLayout title={"ChineseSigns Index Page"}>
                <nav>
                    <a href="/chineseSigns/new">Create a New ChineseSigns</a>
                </nav>
                <ul>
                    {chineseSigns.map((chineseSigns, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/chineseSigns/${chineseSigns._id}`}>
                                    {chineseSigns.name}
                                </a> {' '}
                                is {chineseSigns.years} <br></br>
                                {chineseSigns.readyToRead
                                ? `It is ready to read`
                            :   `It is NOT ready to read`}
                            <br />
                            <a href={`/chineseSigns/${chineseSigns._id}/edit`}>Edit This ChineseSigns</a>
                            <form action={`/chineseSigns/${chineseSigns._id}?_method=DELETE`} method="POST">
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