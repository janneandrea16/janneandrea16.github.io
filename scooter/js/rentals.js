const apiURL = "https://github.com/janneandrea16/rental-data.git";
fetch(url)
  .then((response) => response.json())
    .then((data) => {
        data.rentals.forEach((rental, index) => {
            document.getElementById('rhd' + (index + 1)).innerHTML = rental.half1;
            document.getElementById('rfd' + (index + 1)).innerHTML = rental.full1;
            document.getElementById('whd' + (index + 1)).innerHTML = rental.half2;
            document.getElementById('wfd' + (index + 1)).innerHTML = rental.full2;
        });
});