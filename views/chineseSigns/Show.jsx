const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const chineseSigns = this.props.chineseSigns;

        return (
            <DefaultLayout title="Show an Individual ChineseSigns">
                <p>The {chineseSigns.name} is {chineseSigns.years}</p>
                {chineseSigns.readyToRead ? 'It is ready to read' : "NOT READY!"}
                <br />
                <a href={`/chineseSigns/${chineseSigns._id}/edit`}>Edit This ChineseSigns</a>
                <form action={`/chineseSigns/${chineseSigns._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/chineseSigns">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;