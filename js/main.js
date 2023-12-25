var siteName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("bookmarkURL");

var bookMarkList = [];

  
if (localStorage.getItem("bookMarkList") != null) {
  bookMarkList = JSON.parse(localStorage.getItem("bookMarkList"));
  displayData();
}




function addBookmark() {
  var newBookmark = {
    name: siteName.value,
    url: siteUrl.value,
  };

  bookMarkList.push(newBookmark);


  clearInput();
  displayData();

  localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList));

  
}

function clearInput() {
  siteName.value = "";
  siteUrl.value = "";
}

function displayData() {
  var bookMArks = "";

  for (var i = 0; i < bookMarkList.length; i++) {
    bookMArks += `<tr> 

        <td> ${i} </td>
        <td> ${bookMarkList[i].name} </td>
        <td> <a href="${bookMarkList[i].url}" target="_blank" class="btn btn-success"> <i class="fa-solid fa-eye pe-2"></i> Visit </a> </td>
        <td><button onclick="deleteBookmark(${i})"  class="btn btn-danger pe-2" data-index="0">
        <i class="fa-solid fa-trash-can"></i>
        Delete
      </button></td>
        </tr>`;
  }
  document.getElementById("tableContent").innerHTML = bookMArks;
}

function deleteBookmark(index){

  bookMarkList.splice(index, 1);

  localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList));

  displayData();
  
}