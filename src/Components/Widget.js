import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import LineGraph from './LineGraph';
import '../App.css';


const Widget = (props) => {
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const navToPrevious = () => {
        navigate('/learn/2')
    }
    const navToQuiz = () => {
        navigate('/quiz')
    }
    useEffect(() => {
        setData({
            ...data,
            labels: quantity == 0 ? '' : [0, ``, 30000],
            datasets: [
                {
                    label: `Products Sold: ${quantity}`,
                    data: [1000, `${quantity}`, 10000],
                    tension: 0.1,
                    pointStyle: 'circle',
                    borderColor: 'black',
                    pointBorderColor: 'blue',
                    pointBackgroundColor: 'blue',
                    pointBorderWidth: 5,
                    showLine: true,
                    fill: false
                }
            ]

        })
    }, [totalRevenue, quantity]);



    const defaultData = {
        labels: [0, ``, 30000],
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
        if (!price) {
            setError('Please Select a Product')
        } else {
            setError('')
            consumption = price * Mdemand + Bdemand;
            supply = price * Msupply + Bsupply;

            revenue = consumption * price;
            setTotalRevenue(revenue)
            setQuantity(consumption)
        }

    }
    return (

        <div>
            <Container className='widget-container'>
                <header id="intro">
                    <h1 className='title'>Equilibrium Tool</h1>
                    <p className='text'>
                        Select your favorite snack and see its current Equilibrium Price!
                    </p>
                </header>

                <section id="input" class="container">
                    <form>
                        <div className="section">
                            <input type="radio" name="price" value={0} className='none' />
                            <div className='flex-container'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/arizona.png`} alt='arizona tea' className='snack-img' />
                                <label className='item-option'>
                                    <input type="radio" name="price" value={.99} />¢99
                                </label>
                            </div>

                            <div className='flex-container'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/nerds.png`} alt='nerds snack' className='snack-img' />
                                <label className='item-option'>
                                    <input type="radio" name="price" value={1.99} />$1.99
                                </label>
                            </div>

                            <div className='flex-container'>
                                <img id='reeses' src={`${process.env.PUBLIC_URL}/assets/images/reeses.png`} alt='reeses cups' className='snack-img' />
                                <label className='item-option'>
                                    <input type="radio" name="price" value={3.99} />$3.99
                                </label>
                            </div>

                            <div className='flex-container' id='snickers'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/snickers.png`} alt='snickers bar' className='snack-img' />
                                <label className='item-option'>
                                    <input type="radio" name="price" value={4.99} />$4.99
                                </label>
                            </div>

                            <div className='flex-container' id='jack'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/jacklink.png`} alt='Jack Links beef Jerky' className='snack-img' />
                                <label className='item-option'>
                                    <input type="radio" name="price" value={7.99} />$7.99
                                </label>
                            </div>
                        </div>
                        {error ? <p className='error text'>{error}</p> : ''}
                        <input className='button' id="calculate" type="button" value="Calculate" onClick={() => calculateOutput()} />
                    </form>
                </section>

                <LineGraph data={data} />
                <p className='text'>{totalRevenue <= 0 ? '' : `Total Revenue: $${totalRevenue}`}</p>
                <button className='center' onClick={() => navToPrevious()}>Back</button>
                <button onClick={() => navToQuiz()}>Quiz</button>
            </Container>


        </div>
    )
}
export default Widget
const Container = styled.div`
border: 5px solid black;
border-radius:10px;
padding:2rem;
background-color: #eceff1
`

