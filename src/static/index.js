const makeReservation = document.querySelector('#make-reservation');
const viewTable = document.querySelector('#view-tables');
const makeReservationTables = document.querySelector('#make-reservation-tables');
const home = document.querySelector('#home');

const getTables = () => {
    return $.ajax({
      url: "/api/tables",
      method: "GET",
    });
  };


const getWaitlist = () =>{
    return $.ajax({
        url: "/api/waitlist",
        method:"GET",
    });
};


const getReserve = () =>{
    return $.ajax({
        url: "/reserve",
        method:"GET",
    });
};

 const getWaitlist = () =>{
    return $.ajax({
        url: "/table",
        method:"GET",
    });
};
