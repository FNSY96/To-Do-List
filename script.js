    $(function() {
         $( "#taskDate" ).datepicker();
      });
  $(function() {
         $( "#edittaskDate" ).datepicker();
      });
    var tryEdit ;
    function cancelBut(){
    document.getElementById("addTask").value="";
   document.getElementById("taskDate").value="";
   document.getElementById("description").value="";
   disappear();
    }


    function boldedAll(){
        document.getElementById("present").innerHTML="All Tasks";

    }
    function boldedProg(){
        document.getElementById("present").innerHTML="In progress";

    }
    function boldedFin(){
        document.getElementById("present").innerHTML="Finished";

    }
    function boldedArch(){
        document.getElementById("present").innerHTML="Archived";

    }
    //MODAL START
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("butAdd");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
  modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
  }
  function disappear() {
  modal.style.display = "none";
  }


var modal2 = document.getElementById('myModal2');



  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("close")[1];

  // When the user clicks the button, open the modal
  function showmodel2() {
  modal2.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
  modal2.style.display = "none";
$('.modal-backdrop').remove();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal2) {
  modal2.style.display = "none";
$('.modal-backdrop').remove();
  }
  }
  function disappear2() {
  modal2.style.display = "none";
$('.modal-backdrop').remove();
  }
//       $('.modal').on('hidden.bs.modal', function(){
//     $(this).find('form')[0].reset();
// });
  //MODAL END


  var allTasks = [];
  var inProgressTasks = [];
  var archivedTasks = [];
  var finishedTasks = [];
  var store=[];


  printButtons();



  //object of the input
  function inputObj(name,date,description){
  this.name=name;
  this.date=date;
  this.description=description;
  }
  //inserting in the array of all tasks and in progress by default
  function assignVals(){

  var createObj = new inputObj(document.getElementById("addTask").value,document.getElementById("taskDate").value,document.getElementById("description").value)

  var here=false;


  for(var i=0;i<allTasks.length&&here==false&&allTasks.length>0;i++){
  if(allTasks[i].name==createObj.name
  && allTasks[i].date==createObj.date
   )
  {
      here=true;
      alert("Task already available")
  }


  }

  var hereA=false;
  for(var i=0;i<archivedTasks.length&&hereA==false&&archivedTasks.length>0;i++){
  if(archivedTasks[i].name==createObj.name
  && archivedTasks[i].date==createObj.date
  )
  {
      hereA=true;
      alert("Task is already archived")
  }


  }

  if(document.getElementById("addTask").value==""||document.getElementById("taskDate").value==""){
      alert("Name or date panel or both are empty");
  }else if(document.getElementById("addTask").value.trim()==""||document.getElementById("taskDate").value.trim()==""){
    alert("Name or date panel or both are empty");
  }
  else if(here==false&&hereA==false){
     allTasks.push(createObj);
   inProgressTasks.push(createObj);
   disappear();
   cancelBut();


  }

  printButtons();
  }

function markAsDone(index){
editBool = true ;
var index2 = index-1;
if(myKey==1){
searchFini(index);

drawTable1(allTasks,1);
  }
else{
        if(myKey==2){
var createObj = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
delete2(index);


  if(true){

   finishedTasks.push(createObj);
   drawTable2(inProgressTasks,2);

  }

  printButtons();

  }
else if(myKey==4){
var createObj = new inputObj (archivedTasks[index2].name,archivedTasks[index2].date,archivedTasks[index2].description);

delete4(index);


  if(true){

   finishedTasks.push(createObj);
   allTasks.push(createObj);
   drawTable4(archivedTasks,4);

  }

  printButtons();
  }



}
editBool = false ;

}


function archiving(index){
editBool = true ;
var index2 = index-1;
if(myKey==1){

search2(index);

drawTable1(allTasks,1);
  }else{
    if(myKey==2){
var createObj = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
delete2(index);

  if(true){

   archivedTasks.push(createObj);

  }
  for (var i = 0; i < allTasks.length; i++) {
    if(allTasks[i].name == createObj.name
      && allTasks[i].date == createObj.date
      && allTasks[i].description == createObj.description){
      allTasks.splice(i,1);
    }
  }


  printButtons();
drawTable2(inProgressTasks,2);
  }
 else if(myKey==3){
var createObj = new inputObj (finishedTasks[index2].name,finishedTasks[index2].date,finishedTasks[index2].description);

delete3(index);


  if(true){

   archivedTasks.push(createObj);

  }
  for (var i = 0; i < allTasks.length; i++) {
    if(allTasks[i].name == createObj.name
      && allTasks[i].date == createObj.date
      && allTasks[i].description == createObj.description){
      allTasks.splice(i,1);
    }
  }

  printButtons();
drawTable3(finishedTasks,3);
  }


  }
  editBool = false;
 }
var editBool = false ;


function deleteTask (index){
if(editBool == true){
var index2 = index - 1 ;
if(myKey==1){
var here1=false;
      var itIsHere1;
var current = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks.splice(itIsHere1,1);
         var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }

 if(here2==true){
     inProgressTasks.splice(itIsHere2,1);
  }
  var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks.splice(itIsHere3,1);

  }
  var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks.splice(itIsHere4,1);

  }



  }




}
else{

if (myKey ==2){
var current = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }
  if(here2==true){
     inProgressTasks.splice(itIsHere2,1);
 var here1=false;
  var itIsHere1;
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks.splice(itIsHere1,1);
  }
  }
}
else if (myKey ==3){
var current = new inputObj (finishedTasks[index2].name,finishedTasks[index2].date,finishedTasks[index2].description);
    var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks.splice(itIsHere3,1);
  var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }       if(here1==true){
      allTasks.splice(itIsHere1,1);}

  }
}
else if (myKey ==4){
var current = new inputObj (archivedTasks[index2].name,archivedTasks[index2].date,archivedTasks[index2].description);
 var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks.splice(itIsHere4,1);
 var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
if(here1==true){
      allTasks.splice(itIsHere1,1);}

  }
}

}

}
else{
if (confirm("Are you Sure that you want to delete?") == true) {
var index2 = index - 1 ;
if(myKey==1){
var here1=false;
      var itIsHere1;
var current = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks.splice(itIsHere1,1);
         var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }

 if(here2==true){
     inProgressTasks.splice(itIsHere2,1);
  }
  var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks.splice(itIsHere3,1);

  }
  var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks.splice(itIsHere4,1);

  }



  }




}
else{

if (myKey ==2){
var current = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }
  if(here2==true){
     inProgressTasks.splice(itIsHere2,1);
 var here1=false;
  var itIsHere1;
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks.splice(itIsHere1,1);
  }
  }
}
else if (myKey ==3){
var current = new inputObj (finishedTasks[index2].name,finishedTasks[index2].date,finishedTasks[index2].description);
    var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks.splice(itIsHere3,1);
  var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }       if(here1==true){
      allTasks.splice(itIsHere1,1);}

  }
}
else if (myKey ==4){
var current = new inputObj (archivedTasks[index2].name,archivedTasks[index2].date,archivedTasks[index2].description);
 var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks.splice(itIsHere4,1);
 var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
if(here1==true){
      allTasks.splice(itIsHere1,1);}

  }

}
}
}
}
}

function deleteAndPrint(index,num) {
    deleteTask(index);
           if(myKey==1){
drawTable1(allTasks,myKey);
      }
      else if (myKey ==2){
drawTable2(inProgressTasks,myKey);
      }
      else if(myKey == 3){
drawTable3(finishedTasks,myKey);
      }
      else{
         drawTable4(archivedTasks,myKey);
      }
printButtons();
  }
  function searchFini(index) {

    var index2 = index-1;
var createObj = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);


var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==createObj.name
  && inProgressTasks[i].date==createObj.date
  && inProgressTasks[i].description==createObj.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }

   var here4=false;

  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==createObj.name
  && archivedTasks[i].date==createObj.date
  && archivedTasks[i].description==createObj.description )
  {

      here4=true;
      itIsHere2=i;

  }

  }
  if(here4 == true){
delete4(itIsHere2+1);
  }
  else  if(here2 == true){
    delete2(itIsHere2+1);
  }




  if(true){

   finishedTasks.push(createObj);

  }

  printButtons();







  editBool = false ;
 }
 function delete2(index){
inProgressTasks.splice(index - 1,1);
}
function delete3(index){
finishedTasks.splice(index - 1,1);
}
function delete4(index){
archivedTasks.splice(index - 1,1);
}

  function search2(index) {
    var index2 = index-1;
var createObj = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);

allTasks.splice(index - 1,1);


var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==createObj.name
  && inProgressTasks[i].date==createObj.date
  && inProgressTasks[i].description==createObj.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }

   var here3=false;

  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==createObj.name
  && finishedTasks[i].date==createObj.date
  && finishedTasks[i].description==createObj.description )
  {

      here3=true;
      itIsHere2=i;

  }

  }
  if(here3 == true){
delete3(itIsHere2+1);
  }
  else  if(here2 == true){
    delete2(itIsHere2+1);
  }




  if(true){

   archivedTasks.push(createObj);

  }

  printButtons();



  }



   var sortN1 = false;
   var sortD1 = false;
   var sortN2 = false;
   var sortD2 = false;
   var sortN3 = false;
   var sortD3 = false;
   var sortN4 = false;
   var sortD4 = false;


  function sortDate(num) {

  if(num==1){
sortD1 = true ;
sortN1 = false;
    allTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable1(allTasks,num);


  }else if(num==2){
    sortD2 = true ;
     sortN2 = false;
     inProgressTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable2(inProgressTasks,num);

  }else if(num==3){
    sortD3 = true;
     sortN3 = false;
    finishedTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable3(finishedTasks,num);
  }else if(num==4){
    sortD4 = true;
     sortN4 = false;
     archrivedTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable4(archivedTasks,num);
  }


 }

 function sortName(num) {

  if(num==1){
sortN1 = true ;
sortD1 = false ;
    allTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable1(allTasks,num);


  }else if(num==2){
    sortN2 = true ;
    sortD2 = false ;
     inProgressTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable2(inProgressTasks,num);

  }else if(num==3){
    sortN3 = true ;
    sortD3 = false ;
    finishedTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable3(finishedTasks,num);
  }else if(num==4){
    sortN4 = true ;
    sortD4 = false ;
     archrivedTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
               drawTable4(archivedTasks,num);
  }


 }
   function drawTable3(workOnArray,num){
    if(sortD3== true){
      sortD3 = true ;
sortN3 = false;
    finishedTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }
   if(sortN3== true){
    sortN3 = true ;
sortD3 = false ;
    finishedTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }
  for(var j=0;j<workOnArray.length;j++){

          var create = new inputObj(workOnArray[j].name,workOnArray[j].date,workOnArray[j].description);
          store.push(create);
  }

  myKey = num ;
  var text = "<table class=\"table table-hover\" >";
  text += "<th></th>";
  text += "<th>Task Name </th>";
  text += "<th>Date</th>";
  text += "<th>Description</th>";
  // text += "<th></th>";
  text += "<th></th>";
  text+="<td></div align=\"right\"><div class=\"dropdown\" align=\"right\"><button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" align=\"right\">Sort<span class=\"caret\" align=\"right\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\" ><li><a onclick=\"sortName(myKey)\">Sort by name</a></li><li><a onclick=\"sortDate(myKey)\">Sort by date</a></li></ul></div></td>";

  for(var i = 0; i< workOnArray.length; i++){


      text += "<tr>";
      text += "<td></td>";

                    text += "<td>"+workOnArray[i].name + "</td>";


      text += "<td>"+workOnArray[i].date + "</td>";
   text+= "<td ><a class=\"hideDisplay\">"+workOnArray[i].description +"<span class=\"showDisplayOnHover\">"+workOnArray[i].description +"</span></a></td>";
       // text += "<td><h4 style display=\"none\" >"+workOnArray[i].description + "</h4></td>";
      text += "<td><input type=\"checkbox\" onclick='selecting(this,this.parentNode.parentNode)' id=\"myCheck\ ></td>";
       tryEdit = i + 1;
      text += "<td><div class=\"container\"><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\"type=\"button\" data-toggle=\"dropdown\">Options<span class=\"caret\"></span></button><ul class=\"dropdown-menu \"><li><a onclick=\"archiving(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Archive</a></li><li><a type=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\" onclick=\"edit(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\" id=\"butEdit\"  >Edit</a></li><li><a onclick=\"deleteAndPrint(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex,myKey)\">Delete</a></li></ul></div></div></td>";



      text += "</tr>";        }

  text+= "</table>";
  document.getElementById("myTable").innerHTML = text;
  printButtons();
  }
      function drawTable4(workOnArray,num){
        if(sortD4== true){
      sortD4 = true ;
sortN4 = false;
    archivedTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }
   if(sortN4== true){
      sortN4 = true ;
sortD4 = false ;
    archivedTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }

  for(var j=0;j<workOnArray.length;j++){

          var create = new inputObj(workOnArray[j].name,workOnArray[j].date,workOnArray[j].description);
          store.push(create);
  }

  myKey = num ;
  var text = "<table class=\"table table-hover\" >";
  text += "<th></th>";
  text += "<th>Task Name </th>";
  text += "<th>Date</th>";
  text += "<th>Description</th>";
  text += "<th></th>";
  // text += "<th></th>";
  text+="<td></div align=\"right\"><div class=\"dropdown\" align=\"right\"><button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" align=\"right\">Sort<span class=\"caret\" align=\"right\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\" ><li><a onclick=\"sortName(myKey)\">Sort by name</a></li><li><a onclick=\"sortDate(myKey)\">Sort by date</a></li></ul></div></td>";

  for(var i = 0; i< workOnArray.length; i++){


      text += "<tr>";
      text += "<td></td>";
      if(myKey==3){

          text += "<td><strike>"+workOnArray[i].name + "</strike></td>";



      }else{
                    text += "<td>"+workOnArray[i].name + "</td>";

      }
      text += "<td>"+workOnArray[i].date + "</td>";
       text+= "<td ><a class=\"hideDisplay\">"+workOnArray[i].description +"<span class=\"showDisplayOnHover\">"+workOnArray[i].description +"</span></a></td>";

       // text += "<td><h4 style display=\"none\" >"+workOnArray[i].description + "</h4></td>";
      text += "<td><input type=\"checkbox\" onclick='selecting(this,this.parentNode.parentNode)' id=\"myCheck\ ></td>";
      tryEdit = i+1 ;
      text += "<td><div class=\"container\"><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\"type=\"button\" data-toggle=\"dropdown\">Options<span class=\"caret\"></span></button><ul class=\"dropdown-menu \"><li><a type=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\" onclick=\"edit(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\" id=\"butEdit\"  >Edit</a></li><li><a onclick=\"deleteAndPrint(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex,myKey)\">Delete</a></li><li><a onclick=\"markAsDone(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Mark as done</a></li></ul></div></div></td>";

      text += "</tr>";        }

  text+= "</table>";
  document.getElementById("myTable").innerHTML = text;
  printButtons();
  }

        function drawTable2(workOnArray,num){
   if(sortD2== true){
      sortD2 = true ;
sortN2 = false;
    inProgressTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }
   if(sortN2== true){
     sortN2 = true ;
sortD2 = false ;
    inProgressTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }
  for(var j=0;j<workOnArray.length;j++){

          var create = new inputObj(workOnArray[j].name,workOnArray[j].date,workOnArray[j].description);
          store.push(create);
  }

  myKey = num ;
  var text = "<table class=\"table table-hover\" >";
  text += "<th></th>";
  text += "<th>Task Name </th>";
  text += "<th>Date</th>";
  text += "<th>Description</th>";
  text += "<th></th>";
  // text += "<th></th>";
  text+="<td></div align=\"right\"><div class=\"dropdown\" align=\"right\"><button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" align=\"right\">Sort<span class=\"caret\" align=\"right\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\" ><li><a onclick=\"sortName(myKey)\">Sort by name</a></li><li><a onclick=\"sortDate(myKey)\">Sort by date</a></li></ul></div></td>";

  for(var i = 0; i< workOnArray.length; i++){


      text += "<tr>";
      text += "<td></td>";
      if(myKey==3){

          text += "<td><strike>"+workOnArray[i].name + "</strike></td>";



      }else{
                    text += "<td>"+workOnArray[i].name + "</td>";

      }
      text += "<td>"+workOnArray[i].date + "</td>";
   text+= "<td ><a class=\"hideDisplay\">"+workOnArray[i].description +"<span class=\"showDisplayOnHover\">"+workOnArray[i].description +"</span></a></td>";
       // text += "<td><h4 style display=\"none\" >"+workOnArray[i].description + "</h4></td>";
      text += "<td><input type=\"checkbox\" onclick='selecting(this,this.parentNode.parentNode)' id=\"myCheck\ ></td>";
      tryEdit = i+1 ;
      text += "<td><div class=\"container\"><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\"type=\"button\" data-toggle=\"dropdown\">Options<span class=\"caret\"></span></button><ul class=\"dropdown-menu \"><li><a onclick=\"archiving(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Archive</a></li><li><a type=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\" onclick=\"edit(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\" id=\"butEdit\"  >Edit</a></li><li><a onclick=\"deleteAndPrint(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex,myKey)\">Delete</a></li><li><a onclick=\"markAsDone(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Mark as done</a></li></ul></div></div></td>";

      text += "</tr>";        }

  text+= "</table>";
  document.getElementById("myTable").innerHTML = text;
  printButtons();
  }
  function drawTable1(workOnArray,num){
    if(sortD1== true){
      sortD1 = true ;
sortN1 = false;
    allTasks.sort(function(a, b){
   var nameA=a.date; var nameB=b.date;
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }
   if(sortN1== true){
      sortN1 = true ;
sortD1 = false ;
    allTasks.sort(function(a, b){
   var nameA=a.name.toLowerCase(); var nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1 ;
     if (nameA > nameB)
      return 1;
     return 0 ;//default return value (no sorting)
        })
    }

  for(var j=0;j<workOnArray.length;j++){

          var create = new inputObj(workOnArray[j].name,workOnArray[j].date,workOnArray[j].description);
          store.push(create);
  }

  myKey = num ;
  var text = "<table class=\"table table-hover\" id=\"tablehov\">";
  text += "<th></th>";
  text += "<th>Task Name </th>";
  text += "<th>Date</th>";
        text += "<th>Description</th>";

  text += "<th></th>";
  // text += "<th></th>";
  text+="<td></div align=\"right\"><div class=\"dropdown\" align=\"right\"><button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" align=\"right\">Sort<span class=\"caret\" align=\"right\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\" ><li><a onclick=\"sortName(myKey)\">Sort by name</a></li><li><a onclick=\"sortDate(myKey)\">Sort by date</a></li></ul></div></td>";

  for(var i = 0; i< workOnArray.length; i++){



       var hereSr = false;
      for (var ii = 0; ii < finishedTasks.length; ii++) {
        if(workOnArray[i].name == finishedTasks[ii].name
          &&workOnArray[i].date == finishedTasks[ii].date
          &&workOnArray[i].description == finishedTasks[ii].description
          ){text += "<tr>";
      text += "<td></td>";
           text += "<td><strike>"+workOnArray[i].name + "</strike></td>";
          text += "<td><strike>"+workOnArray[i].date + "</strike></td>";
   text+= "<td ><a class=\"hideDisplay\">"+workOnArray[i].description +"<span class=\"showDisplayOnHover\">"+workOnArray[i].description +"</span></a></td>";
      // text += "<td><div id=\"hoverDes\" >"+workOnArray[i].description + "</div></td>";

tryEdit= i+1 ;
text += "<td><input type=\"checkbox\" onclick='selecting(this,this.parentNode.parentNode)' id=\"myCheck\ ></td>";
      text += "<td><div class=\"container\"><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\"type=\"button\" data-toggle=\"dropdown\">Options<span class=\"caret\"></span></button><ul class=\"dropdown-menu \"><li><a onclick=\"archiving(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Archive</a></li><li><a type=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\" onclick=\"edit(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\" id=\"butEdit\"  >Edit</a></li><li><a onclick=\"deleteAndPrint(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex,myKey)\">Delete</a></li></ul></div></div></td>";
      text += "</tr>";

hereSr = true;
        }
      }
       var hereSr2 = false;
      for (var ii = 0; ii < archivedTasks.length; ii++) {
        if(workOnArray[i].name == archivedTasks[ii].name
          &&workOnArray[i].date == archivedTasks[ii].date
          &&workOnArray[i].description == archivedTasks[ii].description
          ){

hereSr2 = true;
        }
      }
       if(hereSr== false && hereSr2 == false){


text += "<tr>";
      text += "<td></td>";

        text += "<td>"+workOnArray[i].name + "</td>";
         text += "<td>"+workOnArray[i].date + "</td>";
   text+= "<td ><a class=\"hideDisplay\">"+workOnArray[i].description +"<span class=\"showDisplayOnHover\">"+workOnArray[i].description +"</span></a></td>";
      // text += "<td><div id=\"hoverDes\" >"+workOnArray[i].description + "</div></td>";
       text += "<td><input type=\"checkbox\" onclick='selecting(this,this.parentNode.parentNode)' id=\"myCheck\ ></td>";
      text += "<td><div class=\"container\"><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\"type=\"button\" data-toggle=\"dropdown\">Options<span class=\"caret\"></span></button><ul class=\"dropdown-menu \"><li><a onclick=\"archiving(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Archive</a></li><li><a type=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\" onclick=\"edit(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\" id=\"butEdit\"  >Edit</a></li><li><a onclick=\"deleteAndPrint(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex,myKey)\">Delete</a></li><li><a onclick=\"markAsDone(this.parentNode.parentNode.parentNode.parentNode.parentNode.rowIndex)\">Mark as done</a></li></ul></div></div></td>";
      text += "</tr>";
      }
             }

  text+= "</table>";
  document.getElementById("myTable").innerHTML = text;
  printButtons();
  }

  function printButtons(){
    var allLength = allTasks.length - archivedTasks.length ;
  document.getElementById("butAll").innerHTML="All Tasks  "+allTasks.length;
  document.getElementById("butPro").innerHTML="Progress "+inProgressTasks.length;
  document.getElementById("butcom").innerHTML="Finished  "+finishedTasks.length;
  document.getElementById("butArc").innerHTML="Archived  "+archivedTasks.length;
  }

    var x=true;


function setModal2(x) {
document.getElementById("edittaskDate").value = x.date;
document.getElementById("editdescription").value = x.description;
document.getElementById("editaddTask").value = x.name;
}

function editAgain() {
var index2 = tryEdit;
var editaddTaskVar = document.getElementById("editaddTask").value;
var edittaskDateVar = document.getElementById("edittaskDate").value;
var editdescriptionVar = document.getElementById("editdescription").value;
var future = new inputObj (editaddTaskVar,edittaskDateVar,editdescriptionVar);
var here ;
for(var i=0;i<allTasks.length&&here==false&&allTasks.length>0;i++){
  if(allTasks[i].name==future.name
  && allTasks[i].date==future.date
   )
  {
      here=true;
      alert("Task already available");
  return;
  }


  }

//   var hereA=false;
//   for(var i=0;i<archivedTasks.length&&hereA==false&&archivedTasks.length>0;i++){
//   if(archivedTasks[i].name==future.name
//   && archivedTasks[i].date==future.date
//   )
//   {
//       hereA=true;
//       alert("Task is already archived");
// 	  return;
//   }


//   }

  if(document.getElementById("editaddTask").value==""||document.getElementById("edittaskDate").value==""){
      alert("Name or date panel or both are empty");
  return;
  }else if(document.getElementById("editaddTask").value.trim()==""||document.getElementById("edittaskDate").value.trim()==""){
    alert("Name or date panel or both are empty");
return;
  }
if(myKey==1){
var here1=false;
      var itIsHere1;
var current = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks[itIsHere1] = future;
         var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }

 if(here2==true){
     inProgressTasks[itIsHere2] = future;
  }
  var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks[itIsHere3] = future;

  }
  var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks[itIsHere4] = future;

  }



  }




}
else{

if (myKey ==2){
var current = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }
  if(here2==true){
     inProgressTasks[itIsHere2] = future;
 var here1=false;
  var itIsHere1;
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks[itIsHere1] = future;
  }
  }
}
else if (myKey ==3){
var current = new inputObj (finishedTasks[index2].name,finishedTasks[index2].date,finishedTasks[index2].description);
    var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks[itIsHere3] = future;
  var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }       if(here1==true){
      allTasks[itIsHere1]=future;}

  }
}
else if (myKey ==4){
var current = new inputObj (archivedTasks[index2].name,archivedTasks[index2].date,archivedTasks[index2].description);
 var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks[itIsHere4] = future;
 var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
if(here1==true){
      allTasks[itIsHere1] = future;}

  }

}
}

if(myKey == 1){
drawTable1(allTasks,1);
}
else if(myKey == 2){
drawTable2(inProgressTasks,2);
}
else if (myKey == 3){
drawTable3(finishedTasks,3);
}
else if (myKey == 4){
drawTable4(archivedTasks,4);
}
printButtons();
disappear2();
}
function edit(index){

showmodel2();
var index2 = index - 1 ;
tryEdit = index2;
if(myKey==1){
var here1=false;
      var itIsHere1;
var current = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      setModal2(allTasks[itIsHere1]);
         var here2=false;
  var itIsHere2;

}}
else{

if (myKey ==2){
var current = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }
  if(here2==true){
     setModal2(inProgressTasks[itIsHere2]);

}}
else if (myKey ==3){
var current = new inputObj (finishedTasks[index2].name,finishedTasks[index2].date,finishedTasks[index2].description);
    var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     setModal2(finishedTasks[itIsHere3]);
}}
else if (myKey ==4){
var current = new inputObj (archivedTasks[index2].name,archivedTasks[index2].date,archivedTasks[index2].description);
 var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     setModal2(archivedTasks[itIsHere4]);
}
}
}
}
function deleteAndPrint2(index,myKey){
  var index2 = index - 1 ;
if(myKey==1){
var here1=false;
      var itIsHere1;
var current = new inputObj (allTasks[index2].name,allTasks[index2].date,allTasks[index2].description);
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks.splice(itIsHere1,1);
         var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }

 if(here2==true){
     inProgressTasks.splice(itIsHere2,1);
  }
  var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks.splice(itIsHere3,1);

  }
  var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks.splice(itIsHere4,1);

  }



  }




}
else{

if (myKey ==2){
var current = new inputObj (inProgressTasks[index2].name,inProgressTasks[index2].date,inProgressTasks[index2].description);
var here2=false;
  var itIsHere2;
  for(var i=0;i<inProgressTasks.length&&here2==false&&inProgressTasks.length>0;i++){

  if(inProgressTasks[i].name==current.name
  && inProgressTasks[i].date==current.date
  && inProgressTasks[i].description==current.description )
  {

      here2=true;
      itIsHere2=i;

  }

  }
  if(here2==true){
     inProgressTasks.splice(itIsHere2,1);
 var here1=false;
  var itIsHere1;
  for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
 if(here1==true){
      allTasks.splice(itIsHere1,1);
  }
  }
}
else if (myKey ==3){
var current = new inputObj (finishedTasks[index2].name,finishedTasks[index2].date,finishedTasks[index2].description);
    var here3=false;
  var itIsHere3;
  for(var i=0;i<finishedTasks.length&&here3==false&&finishedTasks.length>0;i++){

  if(finishedTasks[i].name==current.name
  && finishedTasks[i].date==current.date
  && finishedTasks[i].description==current.description )
  {

      here3=true;
      itIsHere3=i;

  }

  }
  if(here3==true){
     finishedTasks.splice(itIsHere3,1);
  var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }       if(here1==true){
      allTasks.splice(itIsHere1,1);}

  }
}
else if (myKey ==4){
var current = new inputObj (archivedTasks[index2].name,archivedTasks[index2].date,archivedTasks[index2].description);
 var here4=false;
  var itIsHere4;
  for(var i=0;i<archivedTasks.length&&here4==false&&archivedTasks.length>0;i++){

  if(archivedTasks[i].name==current.name
  && archivedTasks[i].date==current.date
  && archivedTasks[i].description==current.description )
  {

      here4=true;
      itIsHere4=i;

  }

  }
  if(here4==true){
     archivedTasks.splice(itIsHere4,1);
 var here1=false;
  var itIsHere1;
for(var i=0;i<allTasks.length&&here1==false&&allTasks.length>0;i++){

  if(allTasks[i].name==current.name
  && allTasks[i].date==current.date
  && allTasks[i].description==current.description )
  {

      here1=true;
      itIsHere1=i;

  }

  }
if(here1==true){
      allTasks.splice(itIsHere1,1);}

  }

}
}

if(myKey == 1){
drawTable1(allTasks,1);
}
else if(myKey == 2){
drawTable2(inProgressTasks,2);
}
else if (myKey == 3){
drawTable3(finishedTasks,3);
}
else if (myKey == 4){
drawTable4(archivedTasks,4);
}
 printButtons();

}

function DeleteMultipleRows() {
var list = $(".Checked");
var i=0;
var numb ;
if (confirm("Are you Sure that you want to delete?") == true) {
for(numb = 0 ; numb <list.length;numb++) {
deleteAndPrint2(list[numb].rowIndex - i,myKey);
i++;
}
$("#butAdd").show();
$("#butremoveall").hide();
}

}
function deSelect() {
// body...

$("#butAdd").show();
    $("#butremoveall").hide();
}
function selecting(x,y) {
if (x.checked === true) {
y.className = "Checked";
$("#butAdd").hide();
$("#butremoveall").show();
} else {
y.className = "";
if ($(".Checked").length == 0) {
    $("#butAdd").show();
    $("#butremoveall").hide();
}
}
}

    $("#butremoveall").hide();


  function printAtFirst(){
    if(x==true){
      drawTable1(allTasks,1);
       boldedAll();

    }
    x=false;

  }
  printAtFirst();
