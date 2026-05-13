
const Greeting = ({ unreadMessages }) => {
    return (
        <div>
            <h1>Heloo</h1>
            {
                unreadMessages.length > 0 && (
                    <p>You have {unreadMessages.length} unread messages.</p>
                )
            }

        </div>
    )
}
export default Greeting;