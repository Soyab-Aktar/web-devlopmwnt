export default function Friend({ friend }) {
    return (
        <div className="box">
            <h4>Name: {friend.name}</h4>
            <h5>Email: {friend.email}</h5>
        </div>
    );
}
