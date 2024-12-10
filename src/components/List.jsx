import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";
import { IoMdAdd } from "react-icons/io";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [editId, setEditId] = useState("");

  useEffect(() => console.log(posts), [posts]);

  const getTitel = useRef();
  const getContent = useRef();

  function toggleCreate() {
    setIsCreate(!isCreate);
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function saveTitleToState(e) {
    setTitle(e.target.value);
  }
  function saveContentToState(e) {
    setContent(e.target.value);
  }
  function savePost(e) {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitel.current.value = "";
    getContent.current.value = "";

    toggleCreate();
  }

  function updatePost(e) {
    e.preventDefault();
    const updatedPosts = posts.map((post) => {
      if (post.id === editId) {
        return {
          ...post,
          title: title || post.title,
          content: content || post.content,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    toggleEdit();
  }

  function cancelCreate(event) {
    event.preventDefault();
    toggleCreate();
  }
  function cancelEdit(event) {
    event.preventDefault();
    toggleEdit();
  }

  function editPost(id) {
    // console.log(id + "post edited");
    setEditId(id);
    toggleEdit();
  }

  if (isCreate) {
    return (
      <Create
        getTitle={getTitel}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
        cancelCreate={cancelCreate}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => post.id === editId);
    return (
      <Edit
        title={post.title}
        content={post.content}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        updatePost={updatePost}
        cancelEdit={cancelEdit}
      />
    );
  } else {
    return (
      <section className="text-center">
        <h1 className="text-primary my-3">All Posts</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  editPost={editPost}
                />
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" onClick={toggleCreate}>
          <IoMdAdd className="me-2" />
          Create Post
        </button>
      </section>
    );
  }
  // return <h1>Hello</h1>

  // return (
  //   <>
  //     {isCreate ? (
  //       <Create
  //         getTitle={getTitel}
  //         getContent={getContent}
  //         saveTitleToState={saveTitleToState}
  //         saveContentToState={saveContentToState}
  //         savePost={savePost}
  //         cancleCreate={cancleCreate}
  //       />
  //     ) : (
  //       <section className="text-center">
  //         <h1 className="text-primary my-3">All Post</h1>
  //         {posts.map((post) => {
  //           return (
  //             <Post
  //               key={post.id}
  //               id={post.id}
  //               title={post.title}
  //               content={post.content}
  //               editPost={editPost}
  //             />
  //           );
  //         })}
  //         <button className="btn btn-primary mt-3" onClick={toggleCreate}>
  //           Creat Post
  //         </button>
  //       </section>
  //     )}
  //   </>
  // );
};

export default List;
