
const url = "https://github.com/janneandrea16/rental-data.git";
fetch(url)
  .then((response) => response.json())
    .then((data) => {
        data.rentals.forEach((rental, index) => {
            document.getElementById('m' + (index + 1)).innerHTML = rental.half1;
            document.getElementById('n' + (index + 1)).innerHTML = rental.full1;
            document.getElementById('p' + (index + 1)).innerHTML = rental.half2;
            document.getElementById('q' + (index + 1)).innerHTML = rental.full2;
        });
});

