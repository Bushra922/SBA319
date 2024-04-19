const React = require('react');
const DefaultLayout = require('../layout/Default')
class Show extends React.Component {
    render() {
        const westernSigns = this.props.westernSign;
        return (
            <DefaultLayout title="Show an Individual WesternSigns">
                <p>The {westernSigns.name} is {westernSigns.dates}</p>
                {westernSigns.readyToRead ? 'It is ready to read' : "NOT READY!"}
                <br />
                <a href={`/westernSigns/${westernSigns._id}/edit`}>Edit This WesternSigns</a>
                <form action={`/westernSigns/${westernSigns._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/westernSigns">Back to Index</a>
            </DefaultLayout >
        )
    }
}
module.exports = Show;