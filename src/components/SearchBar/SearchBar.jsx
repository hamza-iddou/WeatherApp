import { Button, Form } from "react-bootstrap"
import styles from "./SearchBar.module.scss"
import { Autocomplete, TextField } from "@mui/material"
const SearchBar = () => {

  const handleInputChange = (e) =>{
      const {value} = e.currentTarget
      console.log(value)
  }


  return (
    <>
    <Form>
        <Form.Group className={`${styles.searchContainer}`}>
          <Autocomplete className={`${styles.searchInput}`} renderInput={(params) =>
             <TextField  onChange={handleInputChange}   {...params} label={'Enter your City ...'} />} 
             options={['Casablanca', 'Rabat', 'Tangier']}/>
            
            <Button variant="primary" size={"sm"}>Search</Button>
        </Form.Group>
        
        
    </Form>
    </>
  )
}

export default SearchBar