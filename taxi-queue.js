// taxiLeaveCounter= 0;
// passenger = []
function TaxiQueue() {

	let passengerCounter = 0;
	let taxiCounter = 0;

	function joinQueue() {
		passengerCounter += 1;
	}

	function leaveQueue() {
		if (passengerCounter > 0) {
			passengerCounter -= 1;
		}
	}

	function joinTaxiQueue() {
		taxiCounter += 1;
	}

	function queueLength() {
		return passengerCounter;
	}

	function taxiQueueLength() {
		return taxiCounter;
	}

	function taxiDepart() {
		if(passengerCounter < 12){
            
		}
		if (passengerCounter === 12) {
	        joinTaxiQueue();
			passengerCounter.clear();
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
	}
}