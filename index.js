const pv_num = document.querySelector(".pageviews");
const price_range = document.querySelector("#price-range");
const price_num = document.querySelector(".price");
const yealy_flg = document.querySelector("#yearly_flg")

const price_dataM = [{ pv: "10K", price: 8 }, { pv: "50K", price: 12 }, { pv: "100K", price: 16 }, { pv: "500K", price: 24 }, { pv: "1M", price: 36 }];
const price_dataY = [{ pv: "10K", price: 6 }, { pv: "50K", price: 9 }, { pv: "100K", price: 12 }, { pv: "500K", price: 18 }, { pv: "1M", price: 27 }];

let isYearly = false;
function pvPriceRange() {
    const price_data = isYearly ? price_dataY : price_dataM;
    const { pv, price } = { ...price_data[price_range.value] };
    pv_num.textContent = pv;
    price_num.textContent = price;
}

function handleMonthlyYearly() {
    isYearly = this.checked;
    pvPriceRange();
}

price_range.addEventListener('click', pvPriceRange);
price_range.addEventListener('keyup', pvPriceRange);
yealy_flg.addEventListener('click', handleMonthlyYearly);

