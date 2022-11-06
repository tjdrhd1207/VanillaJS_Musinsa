
import MainPageView from "./views/MainPageView.js";

//페이지 전환 함수
const navigateTo = (url) => {
    
    // history.pushState(state, title, URL);
    /* 페이지 전환 역할
       state : 페이지 전환 시 넘겨줄 데이터 (없으면 null)
       title : 변경할 브라우저 title(바꿀 필요 없으면 null)
       URL : 변경할 URL
    */ 

    history.pushState(null, null, url);
    
    router();
};

const router = async() => {
    //각 route의 경로와 현재 페이지 확인용 콘솔
    const routes = [
        { path : "/" , view : MainPageView },
        { path : "/bestItem" , view: ()=> console.log("Viewing bestItem")}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch : location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    
    //해당 주소가 없으면 메인페이지로 복귀
    if(!match){
        match = {
            route : routes[0],
            isMatch : true
        }
    }
    //console.log("mathc : "+JSON.stringify(new match.route.view()));
    const view = new match.route.view();
    console.log("view : "+JSON.stringify(view));
    //활성화된 view 담기
    document.querySelector("#app").innerHTML = await view.getHtml();

   
}

//뒤로가기 및 새로고침 라우팅
/* 페이지 이동 시 window.onpopstate라는 이벤트가 발생하는데, history.pushState 동작 시에는 이 이벤트가 발생하지 않음
   popstate 이벤트 발생 시(뒤로가기) router도 같이 실행시키는 코드를 작성
*/
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=>{ 
    //클릭 이벤트가 발생했을 때,
    //해당 target이 'data-link' attribute가 있다면
    //페이지 이동 함수 실행
    document.body.addEventListener("click", e =>{
        //matches() : css 선택자로 특정 엘리먼트를 찾음
        if(e.target.matches("[data-link]")){
            
            console.log("트루 : "+e.target.href);
            navigateTo(e.target.href);
            e.preventDefault();
        }
        
    })
    
    router(); 

});