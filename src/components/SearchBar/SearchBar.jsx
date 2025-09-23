import { Button, Form } from "react-bootstrap"
import styles from "./SearchBar.module.scss"
import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"
const SearchBar = () => {
    const [cities , setCities] = useState([])
  const handleInputChange = (e) =>{
      const {value} = e.currentTarget
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=c56caf8bb95d46269082973b4092bde6`)
      .then(response => response.json()).then(json => setCities(json.results.map((data)=>{
        const {country, state} = data
        return {country, state}
      })))
  }

  const handleAutoCompleteSelect = (e, value) => {
    
  }


  return (
    <>
    <Form>
        <Form.Group className={`${styles.searchContainer}`}>
          <Autocomplete className={`${styles.searchInput}`} 
          clearOnBlur={false} 
          getOptionLabel={(option) => option.state}
          onChange={HandleAutoComplateSelect}
          renderInput={(params) =>
             <TextField  onChange={handleInputChange}   {...params} label={'Enter your City ...'} />} 
             options={cities}/>
            
            <Button variant="primary" size={"sm"}>Search</Button>
        </Form.Group>
        
        
    </Form>
    </>
  )
}

export default SearchBar