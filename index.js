const start_date_input = document.getElementById("start_date_input");
const end_date_input = document.getElementById("end_date_input");

let start_date;
let end_date;

const price_by_night = 46;

priceByNight.textContent = price_by_night;

function configureDateInputs()
{
    const today = new Date().toISOString().split("T")[0];
    // start_date_input.value = today;
    start_date_input.min = today;
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    // end_date_input.value = tomorrow.toISOString().split("T")[0];
    end_date_input.min = tomorrow;
};
configureDateInputs();

start_date_input.addEventListener("change", (e) =>
{
    start_date = new Date(e.target.value);
    // if (start_date >= end_date)
    // {
    //     end_date = start_date_input.value;
    //     start_date.setDate(start_date.getDate()+1);
    //     end_date_input.value = start_date.toISOString().split("T")[0];
    //     console.log("start : " + start_date.toISOString().split("T")[0]);
    // }
    start_date.setDate(start_date.getDate()+1);
    end_date_input.min = start_date.toISOString().split("T")[0];
    end_date.setDate(end_date.getDate()-1);
});

end_date_input.addEventListener("change", (e) =>
{
    end_date = new Date(e.target.value);
    // if (end_date <= start_date)
    // {
    //     start_date = end_date_input.value;
    //     end_date.setDate(end_date.getDate()-1);
    //     start_date_input.value = end_date.toISOString().split("T")[0];
    //     console.log("end : " + end_date.toISOString().split("T")[0]);
    // }
    end_date.setDate(end_date.getDate()-1);
    start_date_input.max = end_date.toISOString().split("T")[0];
    end_date.setDate(end_date.getDate()+1);
});

function countDays()
{
    // let number_of_nights = 0;

    // while (Date.parse(start_date) < Date.parse(end_date))
    // {
    //     start_date.setDate(start_date.getDate()+1);
    //     number_of_nights++;
    // }

    // console.log(number_of_nights);
    console.log(`${start_date_input.value} -> ${end_date_input.value}`);

    let diffTime = Math.abs(new Date(end_date_input.value)-new Date(start_date_input.value));
    let number_of_nights = Math.ceil(diffTime / (1000*60*60*24));

    if (!isNaN(number_of_nights))
        price.textContent = number_of_nights*price_by_night;
};

start_date_input.addEventListener("change", countDays);
end_date_input.addEventListener("change", countDays);