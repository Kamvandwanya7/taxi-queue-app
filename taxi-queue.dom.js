// write your DOM code here.


// DOM element references
var joinBtnElem = document.querySelector(".join_que")
var leaveBtnElem = document.querySelector(".leave_que")
var taxiQueCountElem = document.querySelector(".taxi_queue_count")
var joinTaxiQueueElem = document.querySelector(".join_taxi_queue")
var departElem = document.querySelector(".depart")
var passengerQueueCount = document.querySelector(".passenger_queue_count")

// create Factory Function instance

const taxiQueue = TaxiQueue();
function passengerQue(){
    passengerQueueCount.innerHTML = taxiQueue.queueLength();
}

function leaveQue(){
    passengerCount.innerHTML= taxiQueue.leaveQueue();
}
joinTaxiQueueElem.addEventListener("click", )
joinBtnElem.addEventListener("click", passengerQue)
leaveBtnElem.addEventListener("click", leaveQue)




// DOM events

