import { IoMdAdd } from "react-icons/io";
import { BsSave2Fill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
  cancelCreate,
}) => {
  return (
    <>
      <form className="w-50 mx-auto text-center my-3">
        <h1 className="text-primary my-3">Create New Post</h1>
        <input
          ref={getTitle}
          type="text"
          placeholder="title"
          className="form-control mb-3"
          onChange={saveTitleToState}
        />
        <textarea
          ref={getContent}
          placeholder="content"
          className="form-control mb-3"
          onChange={saveContentToState}
        ></textarea>
        <button onClick={savePost} className="btn btn-primary me-2 ">
          <BsSave2Fill className="flex me-2" />
          <span className="">Save Post</span>
        </button>
        <button onClick={cancelCreate} className="btn btn-danger">
          <ImCancelCircle className="me-2" />
          Cancel
        </button>
      </form>
    </>
  );
};
export default Create;
