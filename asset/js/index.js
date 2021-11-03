

  var wrap = document.getElementById('wrap')
  var edit = document.getElementById('edit');
  var exitBtn = document.querySelector('.exit-btn')
  var correction = document.querySelector('.correction');
  var createClick = document.getElementById("create");
  var questionText = document.querySelector('.difficul-question-text');
  // click show Details:
 questionText.addEventListener("click", function() {
   edit.style.display = "block"
   wrap.style.display = "none"
 })
 
// click show edit
 correction.addEventListener("click", function() {
  edit.style.display = "none"
  createClick.style.display = "block"
 })

exitBtn.addEventListener("click", function(){
  wrap.style.display = "block"
  createClick.style.display = "none"
})


//  add list
function create(){
  
  var classQuestion = document.getElementById('class_question').value;
  var subjectsQuestion = document.getElementById('subjects_question').value;
  var class_list = localStorage.getItem("class_list") ? JSON.parse(localStorage.getItem("class_list")) : [] ;

  class_list.push({
   classQuestion: classQuestion,
   subjectsQuestion: subjectsQuestion,
  });
  localStorage.setItem("class_list", JSON.stringify(class_list));
    this.renderClass();
}



function renderClass(){
  var class_list = localStorage.getItem("class_list") ? JSON.parse(localStorage.getItem("class_list")) : [];
  var addClass = `<ul class="difficul-question-item">
  <li class="difficul-question-text title-question"><a href="#">Câu hỏi khó</a></li>
  <li class="text-border"><a href="#">T</a></li>
  <li class="number-of-questions"><a href="">1 câu hỏi</a></li>
  <li class="class-name"><a href="#">Lớp 3</a></li>
  <li class="name-subjects"><a href="#">Toán</a></li>
  <li class="bookmark"><a href="#"><i class="fa fa-bookmark" aria-hidden="true"></i></a></li>
  <li class="share"><a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a></li>
  <li class="game-pad"><a href="#"><i class="fa fa-gamepad" aria-hidden="true"></i></a></li>
 </ul>`;
 class_list.forEach((class_list)=>{
  addClass += `<ul class="difficul-question-item">
  <li class="difficul-question-text title-question"><a href="#">Câu hỏi khó</a></li>
  <li class="text-border"><a href="#">T</a></li>
  <li class="number-of-questions"><a href="">1 câu hỏi</a></li>
  <li class="class-name"><a href="#">${class_list.classQuestion}</a></li>
  <li class="name-subjects"><a href="#">${class_list.subjectsQuestion}</a></li>
  <li class="bookmark"><a href="#"><i class="fa fa-bookmark" aria-hidden="true"></i></a></li>
  <li class="share"><a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a></li>
  <li class="game-pad"><a href="#"><i class="fa fa-gamepad" aria-hidden="true"></i></a></li>
 </ul>`;
});
document.querySelector('.difficul-question').innerHTML = addClass;
}


// Create/Edit:


function savecreate(){
  edit.style.display = "block"
  createClick.style.display = "none"
  let contenCreate = document.getElementById('conten-create').value;
  let oneLeg = document.getElementById('one-leg');
  let twoLeg = document.getElementById("two-leg");
  let thirdLeg = document.getElementById("third-leg");
  let fourthLeg = document.getElementById("fourth-leg");

  if(contenCreate === ""){
    alert("hãy điền câu hỏi")
  }
  else if(oneLeg.checked){
       checkedInput =oneLeg.value
  }else if(twoLeg.checked){
    checkedInput =twoLeg.value
  }else if(thirdLeg.checked){
  checkedInput =thirdLeg.value
  }else if(fourthLeg.checked){
  checkedInput = fourthLeg.value
  }else{
    alert("chọn câu trả lời đúng")
  }
   let addItem = localStorage.getItem("addItem") ? JSON.parse(localStorage.getItem("addItem")) : [];
      addItem.push({
        contenCreate: contenCreate,
        oneLeg: oneLeg,
        twoLeg: twoLeg,
        thirdLeg: thirdLeg,
        fourthLeg: fourthLeg,
      });
  localStorage.setItem("addItem", JSON.stringify(addItem));
    this.rendercreate();
  }
  function rendercreate(){
    let addItem = localStorage.getItem("addItem") ? JSON.parse(localStorage.getItem("addItem")) : [];
    let page = `<div class="container-edit">
  
        <div class="list-edit-conten-left">
            <div class="question-title">
                <h3>Con gà có mấy chân</h3>
            </div>
            <div class="list-question">
                <li><a href="">4 chân</a></li>
                <li><a href="">1 chân</a></li>
                <li><a href="">2 chân</a></li>
                <li><a href="">3 chân</a></li>
            </div>
        </div>
        <div class="list-edit-conten-left">
            <div class="answer-title">
                <h3>Câu trả lời đúng là</h3>
            </div>
            <div class="list-answer">
                <li><a href="">4 chân</a></li>
                <li><a href="">1 chân</a></li>
                <li><a href="">2 chân</a></li>
                <li><a href="">3 chân</a></li>
            </div>
        </div>
    </div>`;
    addItem.forEach((addItem) => {
      page += `<div class="container-edit">
  
      <div class="list-edit-conten-left">
          <div class="question-title">
              <h3>${addItem.contenCreate}</h3>
          </div>
          <div class="list-question">
              <li><a href="">1 chân</a></li>
              <li><a href="">2 chân</a></li>
              <li><a href="">3 chân</a></li>
              <li><a href="">4 chân</a></li>
          </div>
      </div>
      <div class="list-edit-conten-left">
          <div class="answer-title">
              <h3>Câu trả lời đúng là</h3>
          </div>
          <div class="list-answer">
          <li><a href="">1 chân</a></li>
          <li><a href="">2 chân</a></li>
          <li><a href="">3 chân</a></li>
          <li><a href="">4 chân</a></li>
          </div>
      </div>
      </div>`;
  })
  
  document.querySelector('.container-edit').innerHTML = page;
  }


// add addcreate

function addcreate(){
    let nameBtn = document.querySelector(".name-btn").innerHTML;
   let stt = document.querySelector(".stt a").innerHTML;
   let contenCreate = document.getElementById('conten-create').value;
   var detailsItem = localStorage.getItem("detailsItem") ? JSON.parse(localStorage.getItem("detailsItem")) : [] ;

   detailsItem.push({
    nameBtn: nameBtn,
    stt: stt,
    contenCreate: contenCreate,
   });
   localStorage.setItem("detailsItem", JSON.stringify(detailsItem));
     this.renderDetails();
}

function renderDetails(){
  let detailsItem = localStorage.getItem("detailsItem") ? JSON.parse(localStorage.getItem("detailsItem")) : [];
  let addDetail = `<div class="create-item">
  <div class="create-item-conten-top" >
        <div class="create-item-conten-header">
            <div class="exit-save">
                <button class="exit-btn"><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> Quay lại</a></button>
                <button class="save-btn" onclick="savecreate()"><a href="#"><i class="fa fa-floppy-o" aria-hidden="true"></i>Lưu lại</a></button>
            </div>
            <div class="class-subjects-question">
                <li class="class-btn"><a href="">Lớp 3</a></li>
                <li class="subjects-btn"><a href="">Toán học</a></li>
                <li class="question-btn"><a href="">Câu hỏi khó</a></li>
            </div>
        </div>
  </div>
  <div class="create-item-conten-bottom">
      <div class="create-item-conten-left">
          <div class="list-create">
              <div class="list-create-item">
                  <li class ="stt"><a href="">1</a></li>
                  <li class="add-file"><a href=""><i class="fa fa-files-o" aria-hidden="true"></i></a></li>
                  <li class="delete-file"><a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a></li>
                  <div class="file-demo">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                  </div>
              </div>
              <div class="list-create-item">
                <li class ="stt"><a href="">1</a></li>
                <li class="add-file"><a href=""><i class="fa fa-files-o" aria-hidden="true"></i></a></li>
                <li class="delete-file"><a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a></li>
                <div class="file-demo">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
            <div class="add-create-item" onclick="addcreate()">                      
                    <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>                         
            </div>
        </div>
      </div>
      <div class="create-item-conten-right">
          <div class="create-item-conten-right-btn">
              <h3>Câu hỏi</h3>
              <div class="question-btn-form">
                  <form action=""><input type="text" id="conten-create" value="Con gà có mấy chân"></form>
              </div>
              <h3>Các Lựa chọn</h3>
              <div class="selection-btn">
                  <form action="" id="form-btn-radio">
                    <input type="radio" name="answer" id = "one-leg" value="1" class="checkradio">
                    <input type="radio" name="answer" id = "two-leg" value="2" class="checkradio">
                    <input type="radio" name="answer" id = "third-leg" value="3" class="checkradio">
                    <input type="radio" name="answer" id = "fourth-leg" value="4" class="checkradio">
                    <label for="one-leg" class="check-btn-1">
                         <div class="dot-btn"></div>
                         <div class="name-btn">1 chân</div>
                    </label>
                    <label for="two-leg" class="check-btn-2">
                        <div class="dot-btn"></div>
                        <div class="name-btn">2 chân</div>
                    </label>
                    <label for="third-leg" class="check-btn-3">
                        <div class="dot-btn"></div>
                        <div class="name-btn">3 chân</div>
                    </label>
                    <label for="fourth-leg" class="check-btn-4">
                        <div class="dot-btn"></div>
                        <div class="name-btn">4 chân</div>
                    </label>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>  `;
detailsItem.forEach((detailsItem, index)=>{
  index++
  addDetail += `<div class="create-item">
  <div class="create-item-conten-top" >
        <div class="create-item-conten-header">
            <div class="exit-save">
                <button class="exit-btn"><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> Quay lại</a></button>
                <button class="save-btn" onclick="savecreate()"><a href="#"><i class="fa fa-floppy-o" aria-hidden="true"></i>Lưu lại</a></button>
            </div>
            <div class="class-subjects-question">
                <li class="class-btn"><a href="">Lớp 3</a></li>
                <li class="subjects-btn"><a href="">Toán học</a></li>
                <li class="question-btn"><a href="">Câu hỏi khó</a></li>
            </div>
        </div>
  </div>
  <div class="create-item-conten-bottom">
      <div class="create-item-conten-left">
          <div class="list-create">
              <div class="list-create-item">
                  <li class ="stt"><a href="">1</a></li>
                  <li class="add-file"><a href=""><i class="fa fa-files-o" aria-hidden="true"></i></a></li>
                  <li class="delete-file"><a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a></li>
                  <div class="file-demo">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                  </div>
              </div>
              <div class="list-create-item">
                <li class ="stt"><a href="">${index}</a></a></li>
                <li class="add-file"><a href=""><i class="fa fa-files-o" aria-hidden="true"></i></a></li>
                <li class="delete-file"><a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a></li>
                <div class="file-demo">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
            <div class="add-create-item" onclick="addcreate()">                      
                    <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>                         
            </div>
        </div>
      </div>
      <div class="create-item-conten-right">
          <div class="create-item-conten-right-btn">
              <h3>Câu hỏi</h3>
              <div class="question-btn-form">
                  <form action=""><input type="text" id="conten-create" value="" placeholder="Đặt câu hỏi ..."></form>
              </div>
              <h3>Các Lựa chọn</h3>
              <div class="selection-btn">
                  <form action="" id="form-btn-radio">
                    <input type="radio" name="answers" id = "one-leg" value="1" class="checkradio">
                    <input type="radio" name="answers" id = "two-leg" value="2" class="checkradio">
                    <input type="radio" name="answers" id = "third-leg" value="3" class="checkradio">
                    <input type="radio" name="answers" id = "fourth-leg" value="4" class="checkradio">
                    <label for="one-leg" class="check-btn-1">
                         <div class="dot-btn"></div>
                         <div class="name-btn">
                         <input type="text" value= "" placeholder="Nhập đáp án đúng" class = "checkvalue">
                         </div>
                    </label>
                    <label for="two-leg" class="check-btn-2">
                        <div class="dot-btn"></div>
                        <div class="name-btn">
                        <input type="text" value= "" placeholder="Nhập đáp án đúng" class = "checkvalue"></div>
                    </label>
                    <label for="third-leg" class="check-btn-3">
                        <div class="dot-btn"></div>
                        <div class="name-btn">
                        <input type="text" value= "" placeholder="Nhập đáp án đúng" class = "checkvalue"></div>
                    </label>
                    <label for="fourth-leg" class="check-btn-4">
                        <div class="dot-btn"></div>
                        <div class="name-btn">
                        <input type="text" value= "" placeholder="Nhập đáp án đúng" class = "checkvalue">
                        </div>
                    </label>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>  `;
});
document.querySelector('#create').innerHTML = addDetail;
}