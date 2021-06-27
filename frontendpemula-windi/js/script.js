document.addEventListener("DOMContentLoaded", function () {

    const submitForm /* HTMLFormElement */ = document.getElementById("inputListBook");


    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
        // console.log('tes');
    });


    if(isStorageExist()){
        loadDataFromStorage();
    }




});


document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");

 });

 document.addEventListener("ondataloaded", () => {
    refreshDataFromTodos();
 });


