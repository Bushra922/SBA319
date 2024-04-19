const React = require('react');
const DefaultLayout = require('../layout/Default')
class Index extends React.Component {
    render() {
        const { westernSigns } = this.props;
        // const westernSigns = this.props.westernSigns;
        return (
            <DefaultLayout title={"westernSigns Index Page"}>
                <nav>
                    <a href="/westernSigns/new">Create a New WesternSigns</a>
                </nav>
                <ul>
                    {westernSigns.map((westernSigns, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/westernSigns/${westernSigns._id}`}>
                                    {westernSigns.name}
                                </a> {' '}
                                is {westernSigns.dates} <br></br>
                                {westernSigns.readyToRead
                                ? `It is ready to Read`
                            :   `It is NOT ready to Read`}
                            <br />
                            <a href={`/westernSigns/${westernSigns._id}/edit`}>Edit This WesternSigns</a>
                            <form action={`/westernSigns/${westernSigns._id}?_method=DELETE`} method="POST">
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