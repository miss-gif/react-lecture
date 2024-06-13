import { useState } from "react";

const File = () => {
  const Wrap = {
    width: "80%",
    margin: "0 auto",
  };
  const [userName, setUserName] = useState("");
  const [userHobby, setUserHobby] = useState("");

  const handleFile = e => {
    console.log(e.target.files);
  };
  const handleFileChange = e => {
    // file 이라서 e.target.value 를 활용하지 않는다.
    // e.taret.files 는 배열이다.
    // e.target.files = [];

    console.log(e.target.files[0]);
  };
  const handleSubmit = e => {
    // 기본기능막기
    e.preventDefault();
    if (!userName) {
      alert("이름을 입력하세요.");
      return;
    }
    if (!userHobby) {
      alert("취미를 입력하세요.");
      return;
    }
    console.log("데이터 전송");
  };
  return (
    <div style={Wrap}>
      <h1>파일업로드</h1>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <fieldset>
          <legend>정보1</legend>
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>정보2</legend>
          <label htmlFor="hobby">취미</label>
          <input
            type="text"
            id="hobby"
            value={userHobby}
            onChange={e => setUserHobby(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>정보3</legend>
          <div>이미지 미리보기</div>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            // onClick={e => handleFile(e)}
            onChange={e => handleFileChange(e)}
          />
        </fieldset>

        <button type="submit">확인</button>
        <button type="reset">재작성</button>
      </form>
    </div>
  );
};

export default File;
