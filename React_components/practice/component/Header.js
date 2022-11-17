export default () => {
    return (
        <div className="container mt-3">
            <br/>
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#home">서비스안내</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu1">이용방법</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">마이페이지</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">이벤트</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">고객지원</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div id="home" class="container tab-pane active"><br/>
                    <h3>HOME</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="menu1" class="container tab-pane fade"><br/>
                    <h3>Menu 1</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="menu2" class="container tab-pane fade"><br/>
                    <h3>Menu 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
        </div>
    )
}