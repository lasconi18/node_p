import cron from "node-cron"
console.log("Iniciando agendamento da tarefa");

cron.schedule("* * * * *", () =>{
    console.log("Executando tarefa");
    
})
