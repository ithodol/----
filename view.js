// let postingList = ["첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3",
//     "두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,5",
//     "세번째 게시물 제목,세번째 게시물 내용,7890,2024-11-28,1"];

// 글상세페이지 함수
function detail(index) {
    // console.log(index);
    let title = document.querySelector("#detail_title");
    let content = document.querySelector("#detail_content");
    let date = document.querySelector("#detail_date");
    let view = document.querySelector("#detail_view");
    let btn = document.querySelector("#detail_button");
    let temp = postingList[index].split(",");
    // console.log(temp);
    title.innerHTML = temp[0];
    content.innerHTML = temp[1];
    date.innerHTML = temp[3];
    view.innerHTML = Number(temp[4])+1;
    btn.innerHTML = `
                <button type = "button" onclick = "deletePosting(${index})">삭제</button>
                <button type = "button" onclick = "updatePosting(${index})">수정</button>`;
    temp[4] = Number(temp[4])+1;
    postingList[index] = `${temp[0]},${temp[1]},${temp[2]},${temp[3]},${temp[4]}`;
    // console.log(temp[4]);
    //viewPosting();
}