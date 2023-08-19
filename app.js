const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedInUser'))

// console.log(isLoggedInUser);

const posts = JSON.parse(localStorage.getItem('posts')) || []

const emailAddress = document.getElementById("emailAddress")
const userName = document.getElementById("userName")
const mobNum = document.getElementById("mobNum")
const gender = document.getElementById("gender")
const description = document.getElementById("description")
const postInputBox = document.getElementById("postInputBox")
const postArea = document.getElementById("postAreaId")

posts.forEach((post) => {
    var div = document.createElement('div')
    div.setAttribute('class', 'post my-5 bg-light rounded')

    div.innerHTML = `<div class="upperPart">
    <div class="authorDetails d-flex ">
        <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
        <div>
            <h4 style="font-size: 15px;">${post.userName}</h4>
            <h5 style="font-size: 12px;">${post.description || "No description added"}</h5>
            <h6 style="font-size: 10px;">${post.date.split('T')[0]}</h6>
            <h6 style="font-size: 10px;">${post.time}</h6>
        </div>
    </div>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            :
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Edit</a></li>
            <li><a class="dropdown-item" href="#">Delete</a></li>
        </ul>
    </div>
</div>
<div class="postData">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae praesentium
        laboriosam. Ab, vel architecto ea illo eos soluta quam?
    </p>
    <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
</div>
<div class="buttons">
    <p>Like</p>
    <p>Comment</p>
    <p>Share</p>
</div>
<div class="commentInputArea">
    <img src="../assets/avatarDummy.png" class="profilePicture" alt="">
    <input id="commentInputBox" type="text" class="commentInput">
    <button onclick="commentHandler()">Comment</button>
</div>`
})
function postHandler(){
    var div = document.createElement('div')
    div.setAttribute('class', 'post my-5 bg-light rounded')
    div.innerHTML = `div class="upperPart">
    <div class="authorDetails d-flex ">
        <img src="../dashboard/holyPlace.png" alt="" class="profilePicture">
        <div>
            <h4 style="font-size: 15px;">${isLoggedInUser.firstName + " " + isLoggedInUser.surName}</h4>
            <h5 style="font-size: 12px;">${isLoggedInUser.description}</h5>
            <h6 style="font-size: 10px;">${new Date()}</h6>
            <h6 style="font-size: 10px;">${new Date().toLocaleTimeString}</h6>
        </div>
    </div>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            :
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Edit</a></li>
            <li><a class="dropdown-item" href="#">Delete</a></li>
        </ul>
    </div>
</div>
<div class="postData">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae praesentium
        laboriosam. Ab, vel architecto ea illo eos soluta quam?
    </p>
    <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
</div>
<div class="buttons">
    <p>Like</p>
    <p>Comment</p>
    <p>Share</p>
</div>
<div class="commentInputArea">
    <img src="../assets/avatarDummy.png" class="profilePicture" alt="">
    <input id="commentInputBox" type="text" class="commentInput">
    <button onclick="commentHandler()">Comment</button>
</div> 
`
postArea.prepend(div)

const postObj = {
    userName : `${isLoggedInUser.firstName} ${isLoggedInUser.surName}`,
    userEmail : isLoggedInUser.signupEmail
}
}