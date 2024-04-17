let error_text = document.getElementById("error_msg");
let tg = window.Telegram.WebApp;
tg.expand();

error_text.innerText = tg.initData;
let b_create_task = document.getElementById("create_task");

function checkField(ifield, fname) {

   if (ifield.length < 1) {
        error_text.innerText = "Не заполнено поле: " + fname;
        return false;
   }

   return true;
}

function mDebug() {
    error_text.innerText = "Click";
}

b_create_task.addEventListener("click", function() {

    let tsk_topic = document.getElementById("task_topic").value;
    let tsk_text = document.getElementById("task_text").value;

    if (!checkField(tsk_topic, "Тема задачи")
        || !checkField(tsk_text, "Постановка задачи"))
            return;

    let data = {
        tsk_topic: tsk_topic,
        tsk_text: tsk_text
    }

    tg.sendData(JSON.stringify(data));
    tg.close();

});

