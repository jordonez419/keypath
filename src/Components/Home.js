import react, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LineGraph from './LineGraph';
import '../App.css';


const Home = (props) => {
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        setData({
            ...data,
            labels: [0, `Total Revenue: $${totalRevenue}`, 30000],
            datasets: [
                {
                    label: `Product Quantity: ${quantity}`,
                    data: [1000, `${quantity}`, 10000],
                    tension: 0.4,
                    pointStyle: 'rect',
                    pointBorderColor: 'blue',
                    pointBackgroundColor: '#fff',
                    showLine: true
                }
            ]

        })
    }, [totalRevenue, quantity]);


    const defaultData = {
        labels: [0, `Total Revenue: 0`, 30000],
        datasets: [
            {
                label: 'Product Quantity',
                data: [1000, 0, 10000],
                tension: 0.4,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true
            }
        ]

    }

    const [data, setData] = useState(defaultData)

    var Mdemand = -1000;
    var Bdemand = 10000;
    var Msupply = 0; // what if ABC can hire more people when price goes up? 
    var Bsupply = 8000;
    var consumption;
    var supply;
    var message;

    function calculateOutput() {
        var price;
        let revenue;
        var priceOptions = document.getElementsByName("price");

        message = "";

        for (var i = 1; i < priceOptions.length; i++) {
            if (priceOptions[i].checked) {
                price = priceOptions[i].value;
                break;
            }
        }

        consumption = price * Mdemand + Bdemand;
        supply = price * Msupply + Bsupply;

        if (consumption > supply) {
            consumption = supply;
            message = "ABC Company canot make enough XYZ Widgets";
        }

        if (consumption <= 0) {
            consumption = 0;
            message = "No one will buy XYZ Widgets at this price";
        }

        /*
        if (maxRevenue) {
            message = "This is the equilibrium price"
        }
        */

        revenue = consumption * price;
        // document.getElementById("result").innerHTML = isNaN(consumption) ? 'Price is too Low' : "XYZ Widgets sold:" + consumption + "/month<br>Revenue:" + revenue + "/month<br><br>" + message;
        setTotalRevenue(revenue)
        setQuantity(consumption)
    }
    return (
        <div>
            <h1>Equilibrium Price</h1>
            <div id="intro" class="container">
                <p>
                    ABC Company Inc. has just invented the XYZ Widget. A revolutionary product that will change the lives of
                    everyone that buys it. In this exercise, you will help ABC Company Inc choose the correct equillibrium price for
                    the new product.
                </p>
            </div>
            {/* <input type='radio' name='price' value={1} /> 1$ */}
            <div id="input" class="container">
                <form>
                    <div class="section">
                        Select a Price:
                        <input type="radio" name="price" value={0} /> $0
                        <input type="radio" name="price" value={2} /> $1
                        <input type="radio" name="price" value={3} /> $2
                        <input type="radio" name="price" value={4} /> $3
                        <input type="radio" name="price" value={5} /> $4
                        <input type="radio" name="price" value={6} /> $5
                        <input type="radio" name="price" value={7} /> $6
                        <input type="radio" name="price" value={8} /> $7
                        <input type="radio" name="price" value={9} /> $8
                        <input type="radio" name="price" value={9} /> $9
                        <input type="radio" name="price" value={10} /> $10
                    </div>

                    <input id="calculate" type="button" value="Calculate" onClick={() => calculateOutput()} />
                </form>
            </div>

            <div id="result" class="result">
                <LineGraph data={data} />
            </div>


        </div>
    )
}
export default Home

