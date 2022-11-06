import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("MainPage");
    }

    async getHtml(){
        return `
        <div id="default_top">
            <div class="extend_banner">
                <img src="https://image.musinsa.com/images/banner/2022110110011000000066829.jpg">
            </div>
            <div class="top-column column top-musinsa>
                <div class="main-wrapper wrapper">
                    <h1 class="title">MUSINSA</h1>
                    <div class="search-wrapper wrapper clearfix">
                        <div class="searchInput-box box">
                            <form id="search_form">
                                <input id="search_type" type="hidden" name="type">
                                <label for="search_query" class="blind">통합검색</label>
                                <input id="search_query" type="text" maxlength="30">
                                <span id="search_button" class="search-btn">
                                    <i></i> <!--차후에 아이콘-->
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="header-member">
                    <button type="button" class="header-member__login" >로그인</button>
                    <div class="header-member__block">
                        <button type="button">바로접속 ON</button>
                    </div>
                    <div class="header-member__block">
                        <button type="button">마이페이지</button>
                    </div>
                    <div class="header-member__block">
                        <button type="button">최근 본 상품</button>
                    </div>
                    <div class="header-member__block">
                        <button type="button">좋아요</button>
                    </div>
                    <div class="header-member__block">
                        <button type="button">장바구니</button>
                    </div>
                    <div class="header-member__block">
                        <button type="button">주문배송조회</button>
                    </div>
                    <div class="header-member__block">
                        <button type="button">고객센터</button>
                    </div>
                </div>
            </div>
        </div>

        `;
    }
}