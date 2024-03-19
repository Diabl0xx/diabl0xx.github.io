let error_text = document.getElementById("error_msg");
let tg = window.Telegram.WebApp;
tg.expand();

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

    //let usr_id = tg.initDataUnsafe.user.id;
    let usr_id = "123";
    let usr_name = document.getElementById("user_name").value;
    let usr_phone = document.getElementById("user_phone").value;
    let tsk_topic = document.getElementById("task_topic").value;
    let tsk_text = document.getElementById("task_text").value;

    if (!checkField(usr_name, "Имя")
        || !checkField(usr_phone, "Телефон для связи")
        || !checkField(tsk_topic, "Тема задачи")
        || !checkField(tsk_text, "Постановка задачи"))
            return;

    let data = {
        usr_id: usr_id,
        usr_name: usr_name,
        usr_phone: usr_phone,
        tsk_topic: tsk_topic,
        tsk_text: tsk_text
    }

    tg.sendData(JSON.stringify(data));
    tg.close();

});

