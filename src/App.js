import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import image from './images/image.png';

import { fetchData } from './api';

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount () {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
        console.log(country)
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
            </div>
        );
    }
}

export default App;
