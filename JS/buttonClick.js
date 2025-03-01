let allBtn = document.querySelectorAll(".btn");

for (let i = 0; i < allBtn.length; i++) {
  const completeBtn = allBtn[i];
  completeBtn.addEventListener("click", function (event) {
    let parent = event.target.parentElement.parentElement.parentElement;
    console.log(parent);

    let title = parent.querySelector("h2").innerText;
    let company = parent.querySelector("span").innerText;
    let task = parent.querySelector("p").innerText;
    let time = getCurrentTime();

    // Task Assigned minus
    let taskAssigned = document.getElementById("taskAssigned").innerText;
    taskAssigned = parseInt(taskAssigned);
    taskAssigned -= 1;
    document.getElementById("taskAssigned").innerText = taskAssigned;

    // Total Task +
    let completedTask = document.getElementById("completedTask").innerText;
    completedTask = parseInt(completedTask);
    completedTask += 1;
    document.getElementById("completedTask").innerText = completedTask;

    alert(`
        Board Updated Successfully 
        Now Task Remain : ${taskAssigned} 🤲
        Total Completed task : ${completedTask} 😃`);

    if (taskAssigned == 0) {
      alert(`
        Congrats 🥳🥳🥳!!!
        You Have Completed All The Current Task.
        Now Task Remain : ${taskAssigned}
        Total Completed Task : ${completedTask}
        `);
    }
    // Disable Button and Bg color change
    completeBtn.setAttribute("disabled", "true");
    completeBtn.style.backgroundColor = "rgb(211, 211, 211)";

    let history = `
        <div class="bg-[#F4F7FF] p-2 m-2 mt-4 px-3 rounded-md flex flex-col gap-3">
            <div class="flex items-center gap-2">
                <p class="text-[14px] opacity-60 font-[500]">Completed Task :</p>
                <p class="inline-block p-1 px-2 bg-white text-[14px] font-[500] opacity-75 rounded-[4px]">${company}</p>
            </div>
            
            <h1 class="text-[18px] font-semibold text-blue-500">${title}</h1>
            <p class="p-2 rounded-md text-gray-500 text-[14px] bg-white font-[600]">
                ${task}
            </p>
            <p class="text-[14px] text-blue-500 opacity-60 font-[500]">Time : ${time} </p>
        </div>
        `;

    document.getElementById("noHistory").style.display = "none";
    document.getElementById("removedHistory").style.display = "none";

    document
      .getElementById("history")
      .insertAdjacentHTML("afterbegin", history);
  });
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}
