import { GrUpdate } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { GrDocumentUpdate } from "react-icons/gr";

const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
  cancelEdit,
}) => {
  return (
    <>
      <form className="w-50 mx-auto text-center my-3">
        <h1 className="text-primary my-3">Edit Post</h1>
        <input
          defaultValue={title}
          type="text"
          placeholder="title"
          className="form-control mb-3"
          onChange={saveTitleToState}
        />
        <textarea
          placeholder="content"
          className="form-control mb-3"
          defaultValue={content}
          onChange={saveContentToState}
        ></textarea>
        <button className="btn btn-success me-2" onClick={updatePost}>
        <GrDocumentUpdate  className="me-2" />

          Update Post
        </button>
        <button className="btn btn-danger " onClick={cancelEdit}>
          <ImCancelCircle className="me-2" />
          Cancel
        </button>
      </form>
    </>
  );
};
export default Edit;
