function updateItinerary() {
  const passenger = document.getElementById('passenger').value || "N/A";
  const flight = document.getElementById('flight').value || "N/A";
  const from = document.getElementById('from').value || "N/A";
  const to = document.getElementById('to').value || "N/A";
  const date = document.getElementById('date').value || "N/A";
  const time = document.getElementById('time').value || "N/A";
  const gate = document.getElementById('gate').value || "N/A";
  const seat = document.getElementById('seat').value || "N/A";

  document.getElementById('passengerText').textContent = passenger;
  document.getElementById('flightText').textContent = flight;
  document.getElementById('fromText').textContent = from;
  document.getElementById('toText').textContent = to;
  document.getElementById('dateText').textContent = date;
  document.getElementById('timeText').textContent = time;
  document.getElementById('gateText').textContent = gate;
  document.getElementById('seatText').textContent = seat;

  // Update QR Code
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${flight}-${passenger}`;
  document.getElementById('qrCode').src = qr;
}
