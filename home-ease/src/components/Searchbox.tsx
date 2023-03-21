
import React, { useState, useContext, useEffect} from 'react';
import { Search, Location } from 'grommet-icons';
import { Grommet, Box, TextInput, Select, Button } from 'grommet';
import axios from 'axios';
import '../searchBox.css';
import { propertiesContext } from '../App';
import { Link} from 'react-router-dom';

const Searchbox = () => {
    // const theme = {
    //     global: {
    //         font: {
    //             family: 'Roboto',
    //             size: '18px',
    //             height: '20px',
    //         },
    //     },
    // };

    const Options: number[] = [];
    for (let i = 200000; i <= 1000000; i += 100000) {
        Options.push(i);
    }

    const maxPrices: number[] = [];
    for (let i = 300000; i <= 1000000; i += 100000) {
        maxPrices.push(i);
    }

    const [minOptions, minSetOptions] = useState(Options);
    const [maxOptions, maxSetOptions] = useState(maxPrices);

    const { searchLocation, setSearchLocation, minPrice, setMinPrice, maxPrice, setMaxPrice } =
        useContext(propertiesContext);
    

    return (
        <Grommet >
            <div className='searchBox'>
                <div className='location'>
                    <div>Location</div>
                    <Box fill align='center' justify='start'>
                        <Box width='medium' gap='medium'>
                            <TextInput
                                icon={<Location />}
                                placeholder='Search for City, Neighborhood or Zip'
                                onChange={(event) => setSearchLocation(event.target.value)}
                            />
                        </Box>
                    </Box>
                </div>
                <input name='area[]' type='hidden' value='401'></input>
                <div className='dropDowns'>
                    <div className='minPrice'>
                        <label id='minPriceLabel' className='min_price'>
                            Minimum Price
                        </label>
                        <Box fill align='center' justify='start'>
                            <Select
                                size='small'
                                placeholder='Select'
                                value={minPrice}
                                options={minOptions}
                                onChange={({ option }) => {
                                    setMinPrice(option);
                                }}
                                onClose={() => minSetOptions(minOptions)}
                            />
                        </Box>
                    </div>
                    <div className='maxPrice'>
                        <label id='maxPriceLabel' className='max_price'>
                            Maxmimum Price
                        </label>
                        <Box fill align="center" justify="start" >
                            <Select
                                size="small"
                                placeholder="Select"
                                value={maxPrice}
                                options={maxOptions}
                                onChange={({ option }) => {
                                    setMaxPrice(option);

                                }}
                                onClose={() => maxSetOptions(maxOptions)}
                            />
                        </Box>
                    </div>
                </div>
                <Link to="/properties"><Button className="searchBttn" style={{marginLeft:"12px",marginTop:"18px"}}size="large" icon={<Search />} primary  /></Link>
            </div>
        </Grommet>
    )
}

export default Searchbox



