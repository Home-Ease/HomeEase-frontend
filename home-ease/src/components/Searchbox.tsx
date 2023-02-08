import React, { useState } from 'react'
import { Search, Location} from 'grommet-icons';
import { Grommet, Box, TextInput, Select, Button  } from 'grommet';
import '../searchBox.css'
const Searchbox = () => {
    const theme = {
        global: {
            font: {
                family: "Roboto",
                size: "18px",
                height: "20px",
            },
        },
    };
   

    const Options: string[] = [];
    for (let i = 1; i <= 5; i += 1) {
      Options.push(`option ${i}`);
    }
    
    const maxPrices: string[] = [];
    for(let i = 6; i<=10; i++){
        maxPrices.push(`option ${i}`)
    }
    
    const [minOptions, minSetOptions] = useState(Options);
  const [value, minSetValue] = useState('');
 
  const [maxOptions, maxSetOptions] = useState(maxPrices)
  const [maxValue, maxSetValue] = useState('')
  
  console.log(minOptions)

    return (
        <Grommet theme={theme}>
            <div className='searchBox'>
                <div className='location'>
                    <div>Location</div>
                    <Box fill align="center" justify="start" >
                        <Box width="medium" gap="medium">
                            <TextInput icon={<Location />} placeholder="search for City, Neighborhood or Zip" />
                        </Box>
                    </Box>
                </div>
                <input name="area[]" type="hidden" value="401"></input>
                <div className='dropDowns'>
                    <div className='minPrice'>
                        <label id="minPriceLabel" className='min_price'>Minimum Price</label>
                        <Box fill align="center" justify="start" >
                            <Select
                                size="small"
                                placeholder="Select"
                                value={value}
                                options={minOptions}
                                onChange={({ option }) => {
                                    
                                        minSetValue(option);
                                    
                                }}
                                onClose={() => minSetOptions(minOptions)}
                            />
                        </Box>
                    </div>
                    <div className='maxPrice'>
                        <label id="maxPriceLabel" className='max_price'>Maxmimum Price</label>
                        <Box fill align="center" justify="start" >
                            <Select
                                size="small"
                                placeholder="Select"
                                value={maxValue}
                                options={maxOptions}
                                onChange={({ option }) => {
                                        maxSetValue(option);
                                    
                                }}
                                onClose={() => maxSetOptions(maxOptions)}
                            />
                        </Box>
                    </div>
                </div>
                {/* <Button icon={<Search />}  onClick={() => {}} /> */}
                <Button size="large" icon={<Search />} primary />
            </div>
        </Grommet>
    )
}

export default Searchbox