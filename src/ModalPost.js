import axios from "axios";
import React, { useEffect, useState } from "react";

import Loading from "./Loading";

import {
  Dim,
  Modal,
  Close
} from "./style/Modal";

const ModalPost = ({ selected, openModal, data }) => {

  const [isloading, setIsLoading] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  const userName = data.filter((id) => id.id === selected)[0].userId;

  const getSelectedPost = () => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${selected}`)
      .then((res) => setSelectedData(res.data))
      .then(() => setIsLoading(false))
      .catch(() => alert("Err : 선택하신 글을 불러올 수 없습니다."));
  };
  useEffect(getSelectedPost, [selected]);

  const getUserName = () => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userName}`, {})
      .then((res) => setUser(res.data))
      .then(() => setIsLoading(false))
      .catch(() => alert("Err : 유저 정보를 불러올 수 없습니다."));
  };

  useEffect(getUserName, [userName]);
  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/post/${selected}/comments`)
      .then((res) => setComments(res.data))
      .catch(() => alert("Err : 댓글 목록을 불러올 수 없습니다."));
  };
  useEffect(getComments, [selected]);

  return (
      <Dim>
      {isloading ? (
        <Loading />
      ) : (
        <Modal>
          <Close onClick={openModal}>❌</Close>
            <div className="content">
              <h2>Title : {selectedData.title}</h2>
              <h3>User-name : {user.name}</h3>
              <p>{selectedData.body}</p>
            </div>
            <ul className="comments">
              <li><strong>Comments({comments.length})</strong></li>
              {comments.map((el, key) => (
                <li key={key}>
                  <h3>😀 name : {el.name}</h3>
                  <div>{el.body}</div>
                </li>
              ))}
            </ul>
            </Modal>
      )}
      </Dim>
  );
};

export default ModalPost;
