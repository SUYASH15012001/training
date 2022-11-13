import React from 'react';
import {
    TextField,
    Grid,
    FormGroup,
    FormControlLabel,
    FormLabel,
    Checkbox,
    RadioGroup,
    Radio,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Switch
} from '@mui/material';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

function Signup() {
    const [gender, setGender] = React.useState("male");
    const handleChangeGender = (e) => {
        setGender(e.target.value);
        // console.log('old value is ', gender,'\nnew value is  ', e.target.value)
    }
    const [isChecked, setchecked] = React.useState(false);
    const handleCheck = (e) => {
        // console.log(e.target.checked)
        setchecked(e.target.checked)
    }
    // const [username, setUserName] = React.useState("");
    const [textData, setTextData] = React.useState({
        username: "",
        about: "",
        age: ""
    })
    const handleChangeTextData = (e) => {
        console.log(textData)
        setTextData({
            ...textData,
            [e.target.name]:e.target.value
        })
    }
    return (
        <Grid spacing={5} container style={{
            padding:20
        }}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    helperText={textData.username.length > 5 ? "Name cant be longer than 5 charectors" : ""}
                    error={textData.username.length > 5}
                    value={textData.username}
                    name="username"
                    // onChange={(e) => {
                    //     // console.log();
                    //     setUserName(e.target.value)
                    // }}
                    onChange={handleChangeTextData}
                    fullWidth
                    required
                    id="username"
                    label="Full Name"
                    variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <p> Subjects you like</p>
                <FormGroup >
                    <FormControlLabel control={<Checkbox  checked={isChecked} onChange={handleCheck}/>} label="Physics" />
                    <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheck}/>} label="Maths" />
                    <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheck}/>} label="Chemistry" />
                    <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheck}/>} label="English" />
                    <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheck}/>} label="Computer Science" />
                    
                    <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheck} />}
                        checkedIcon={<SportsCricketIcon />} icon={<SportsCricketOutlinedIcon />}
                        label="Sports" />
                </FormGroup>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
                <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                </Badge>
                <br />
                <FormControlLabel control={<Switch color='secondary' checked={isChecked} onChange={handleCheck} />}
                    label="Wanna work?" />
                
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    id="about"
                    label="About Yourself"
                    multiline
                    name="about"
                    onChange={handleChangeTextData}
                    value={textData.about}
                    fullWidth
                    required
                    rows={4}
                    defaultValue="About........"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={textData.age}
                        label="Age"
                        name="age"
                        onChange={handleChangeTextData}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                
                <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="gender"
                        name="controlled-radio-buttons-group"
                        value={gender}
                        onChange={handleChangeGender}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Signup