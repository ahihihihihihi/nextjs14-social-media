import { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";
import Link from "next/link";

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    //Temporary
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];
    return (
        <div className="comments">
            <div className="write">
                <Link
                    href={`/profile/${currentUser.id}`}
                    className="link"
                >
                    <img src={currentUser.profilePic} alt="" />
                </Link>
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <Link
                        href={`/profile/${comment.userId}`}
                        className="link"
                    >
                        <img src={comment.profilePicture} alt="" />
                    </Link>

                    <div className="info">
                        <Link
                            href={`/profile/${comment.userId}`}
                            className="link"
                        >
                            <span>{comment.name}</span>
                        </Link>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    );
};

export default Comments;