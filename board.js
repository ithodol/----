출력함수( );
function 출력함수( ){
    // (1) 어디에 , table > tbody ,  document.querySelector(선택자)
    let tbody = document.querySelector( 'table > tbody')
    // (2) 무엇을 , 배열 요소들의 정보를 html 구성해서 
    let html = ''
        // - 배열내 요소 순회( 배열내 모든 요소를 반복해서 하나씩 꺼내기 )
        for( let index = 0 ; index <= 게시물목록.length - 1 ; index++ ){
            // index는 0부터 마지막인덱스까지 1씩 증가 반복 
            let board = 게시물목록[index]; // 하나의 게시물 게시물목록[0] 게시물목록[1] 게시물목록[2]
            // 하나의 게시물을 csv 구성 했기 때문에 게시물정보 분해
            // 문자열.split('기준문자') : 문자열내 기준문자으로 분해해서 분해된 결과를 배열 반환 함수
            let info = board.split(',') // csv 형식은 ,(쉼표)로 구분했기 때문에 ,(쉼표) 다시 분해한다.
                // info[0] = 제목 , info[1] = 내용 , info[2] = 비밀번호 , info[3] = 날짜 , info[4] = 조회수 
            // 각 정보들을 HTML 과 연동해서 작성하기 
            html += `<tr>
                        <td> ${ info[3] } </td>
                        <td> <a href="#" onclick="상세출력함수( ${ index } )">${ info[0] }</a> </td>
                        <td> ${ info[4] } </td>
                    </tr>`; // 변수 += 값  vs 변수 = 변수 + 값  , 기존변수에 새로운 값을 누계/연결 
            //console.log( html );
        } // for end 
    // (3) 출력 ,.innerHTML
    tbody.innerHTML = html; // 변수 = 새로운값 ,  .변수 = 새로운값 
} // f end 

// [3] 상세 출력 함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을때
function 상세출력함수( index ) { // index : 매개변수 , 상세 출력할 배열의 인덱스를 받기 
    console.log('상세출력함수 실행'); console.log( index );
    // 1. 어디에 , document.querySelector() 
    // 2. 무엇을 , 배열 정보를 HTML 로 구성 , 선택한 게시물 인덱스의 정보를 , index 
    let board = 게시물목록[ index ];    // (1) 선택한 인덱스의 게시물 호출 
    let info = board.split(',')                 // (2) 게시물 문자열 ,(쉼표) 기준으로 분해 
        // info[0] = 제목  info[1] 내용 info[2] 비밀번호 info[3] 작성일 info[4] 조회수 
    // 3. 출력  , innerHTML 
    document.querySelector('.titleBox').innerHTML = info[0]; // 제목 데이터를 .titileBox 마크업 사이에 에 대입 
    document.querySelector('.contentBox').innerHTML = info[1]; // 내용 데이터를 .contentBox 마크업 사이에 대입 
    document.querySelector('.dateBox').innerHTML = info[3]; // 작성일 데이터를 .dateBox 마크업 사이에 대입 
    document.querySelector('.viewBox').innerHTML = info[4]; // 조회수 데이터를 .viewBox 마크업 사이에 대입 
    document.querySelector('.btnBox').innerHTML = `
                                    <button onclick="삭제함수( ${ index } )" type="button">삭제</button> 
                                    <button type="button">수정</button>`
} // f end 