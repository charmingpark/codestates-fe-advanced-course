import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Post from "./ModalPost";
import Pagination from "./components/Pagination";
import CardBoard from "./components/CardBoard";
// import reset from "styled-reset";
// import { createGlobalStyle } from "styled-components";
import {
  HoverCards,
  Error
} from "./style/default_card";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  
  const [data, setData] = useState([]);
  const [post, setPost] = useState(false);

  const [selected, setSelected] = useState(Number);
  const openModal = (key) => {
    setSelected(key);
    setPost(!post);
  };
  
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const printPost = postsPerPage * (currentPage - 1);

  
  const getPosts = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {})
      .then((res) => setData(res.data))
      .then(() => setIsLoading(false))
      .catch(() => alert("Err : 글 목록을 불러올 수 없습니다."));
  };
  useEffect(getPosts, []);

  return (
    <>
      {isLoading ? (
        <Loading />
        ) : (
          <>
            <HoverCards>
              {post ? (
                <Post
                  selected={selected}
                  openModal={openModal}
                  data={data}
                />
              ) : (
                ""
              )}
              {data.length === 0 ? (
                <Error>Err : 글 목록이 비었습니다.</Error>
              ) : (
                // <CardBoard/>
                data
                  .slice(printPost, printPost + postsPerPage)
                  .map((el, key) => (
                    <div key={el.id}>
                      <div onClick={() => openModal(el.id)}>
                        <div>
                          <div>
                            <div>
                              {el.id}
                              <div>{el.title}</div>
                            </div>
                            <div>{el.userId}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              )}
              <Pagination
                total={data.length}
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </HoverCards>
          </>
      )}
    </>
  );
}

export default App;
