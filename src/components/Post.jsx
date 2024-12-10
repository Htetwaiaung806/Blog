import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Post = ({ id, title, content, editPost }) => {
  return (
    <>
      <section>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => editPost(id)} className="btn btn-primary me-2 ">
          <FaEdit />
        </button>
        <button onClick={()=>deletePost(id)}  className="btn btn-danger">
          <RiDeleteBin6Fill />
        </button>
      </section>
    </>
  );
};
export default Post;
