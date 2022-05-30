// write your DOM code here.


// DOM element references
var joinBtnElem = document.querySelector(".join_queue")
var leaveBtnElem = document.querySelector(".leave_queue")
var taxiQueCountElem = document.querySelector(".taxi_queue_count")
var joinTaxiQueueElem = document.querySelector(".join_taxi_queue")
var departElem = document.querySelector(".depart")
var passengerQueueCount = document.querySelector(".passenger_queue_count")

// create Factory Function instance
// localStorage.setItem( )


const taxiQueue = TaxiQueue();
function joinQue(){
    taxiQueue.joinQueue();
    passengerQueueCount.innerHTML = taxiQueue.queueLength();
    // localStorage.setItem("passengersJoin", queueLength())

}

function leaveQue(){
    taxiQueue.leaveQueue();
    passengerQueueCount.innerHTML= taxiQueue.queueLength();
    // localStorage.setItem("passengersLeave", queueLength())
}

function taxiJoinQue(){
    taxiQueue.joinTaxiQueue();
    taxiQueCountElem.innerHTML= taxiQueue.taxiQueueLength();
}
// localStorage.setItem("taxiJoin", taxiQueueLength())

function depart(){
   taxiQueue.taxiDepart();
}
// localStorage.getItem()

departElem.addEventListener("click", depart)
leaveBtnElem.addEventListener("click", leaveQue)
joinTaxiQueueElem.addEventListener("click", taxiJoinQue)
joinBtnElem.addEventListener("click", joinQue)





// DOM events

