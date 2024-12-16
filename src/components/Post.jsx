import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Post = ({ id, title, content, editPost,deletePost }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <button onClick={() => editPost(id)} className="btn btn-primary me-2 ">
          <FaEdit />
        </button>
        <button onClick={() => deletePost(id)} className="btn btn-danger">
          <RiDeleteBin6Fill />
        </button>
      </td>
    </tr>
  );
};
export default Post;
