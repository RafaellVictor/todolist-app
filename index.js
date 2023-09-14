// 1. Reference HTML element in js
const formTask = document.querySelector(".form-task");

// 2. Menambahkan event listener di element form
formTask.addEventListener("submit", (event) => {
  event.preventDefault();

  // 3. Reference HTML element input
  const inputForm = document.querySelector(".input-form");
  console.log(inputForm.value);

  if (inputForm.value) {
    // 4. Reference HTML element ul / wapper list
    const wrapperList = document.querySelector(".task-list-wrapper");

    // 5. Create <li> using JS
    const taskList = document.createElement("li");

    // 6. Masukkan input value ke <li>
    taskList.innerHTML = inputForm.value;

    // 7. Append <li> ke <ul>
    wrapperList.append(taskList);

    inputForm.value = "";
  } else {
    alert("Tidak boleh kosong!");
  }
});
