const pv_num = document.querySelector(".pageviews");
const price_range = document.querySelector("#price-range");
const range_filled = document.querySelector(".range-filled")
const price_num = document.querySelector(".price");
const yealy_flg = document.querySelector("#yearly_flg")
const yealy_switch = document.querySelector(".yearly_flg_toggle")

const price_dataM = [{ pv: "10K", price: 8 }, { pv: "50K", price: 12 }, { pv: "100K", price: 16 }, { pv: "500K", price: 24 }, { pv: "1M", price: 36 }];
const price_dataY = [{ pv: "10K", price: 6 }, { pv: "50K", price: 9 }, { pv: "100K", price: 12 }, { pv: "500K", price: 18 }, { pv: "1M", price: 27 }];

let isYearly = false;

function pvPriceRange() {
    const price_data = isYearly ? price_dataY : price_dataM;
    const { pv, price } = { ...price_data[price_range.value] };
    pv_num.textContent = pv;
    price_num.textContent = `$ ${price}`;
    range_filled.style.width = `${parseInt(price_range.value) * 25}%`;
}

function handleMonthlyYearly() {
    isYearly = this.checked;
    const switch_color = isYearly ? "--strong-cyan" : "--light-grayish-blue";
    yealy_switch.style.background = `var(${switch_color})`;
    pvPriceRange();
}
let isDown = false;
isDown ? price_range.classList.add("hold") : price_range.classList.remove("hold");
price_range.addEventListener('click', pvPriceRange);
price_range.addEventListener('keyup', pvPriceRange);
price_range.addEventListener('mousedown', () => {
    isDown = true;
    price_range.classList.add("hold");
});
price_range.addEventListener('mousemove', () => isDown === true && pvPriceRange);
price_range.addEventListener('mousemove', (e) => console.log(e));
price_range.addEventListener('mouseup', () => {
    isDown = false;
    price_range.classList.remove("hold");
});
yealy_flg.addEventListener('click', handleMonthlyYearly);

