
import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
 import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import addJobStyle from "assets/jss/material-dashboard-pro-react/components/addJobStyle";

class AddJob extends React.Component{
   state = {
    value: 0,
    age: '',
   name: 'hai',
  };
  handleChange = (event, value) => {
    this.setState({ value });
    this.setState({ [event.target.name]: event.target.value });

  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  

  render(){
     const { classes } = this.props;
    return(

      <div style={{"display":"flex"}}>
          <div style={{"width":"20%"}}>
            <div style={{"border":"1px solid orange","border-radius":"500px","width":"100px","color":"orange","padding":"10px","font-weight":"bold","height":"100px","display":"flex","align-items":"center"}}>
              Upload Logo
            </div>
          </div>
          <div style={{"width":"70%"}}>
            <form  autoComplete="off">

                <div>
                  <TextField style={{"minWidth":"100%"}} label="Company Name"/>
                </div>
                <br></br>
                <div>
                  <TextField style={{"minWidth":"100%"}} label="Job Position"/>
                </div>
                <br></br>

                <div>
                  <TextField style={{"minWidth":"100%"}} label="Company Size"/>
                </div>

                <br></br>
                <div>
                  <FormControl style={{"minWidth":"100%"}}>
                    <InputLabel htmlFor="age-simple">Employment Type</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'Employment',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <br></br>

                <div>
                  <FormControl style={{"minWidth":"100%"}}>
                    <InputLabel htmlFor="age-helper">Work Experience</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={<Input name="age" id="age-helper" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <br></br>

                <div>
                  <TextField style={{"minWidth":"100%"}} label="Location"/>
                </div>
                <br></br>

                <div>
                  <Checkbox value="checkedC" /> Travel Requirement
                </div>
                <div>
                  <TextField
                    id="textarea"
                    label="Summary"
                    multiline
                    rows = "4"
                    className={classes.textField}
                    margin="normal"
                    style={{"minWidth":"100%"}}
                  />
                </div>
                <br></br>

                <div>
                  <TextField
                    id="textarea"
                    label="Key Responsibilities"
                    multiline
                    rows = "4"
                    className={classes.textField}
                    margin="normal"
                    style={{"minWidth":"100%"}}
                  />
                </div>
                <br></br>
                <div>
                  <FormControl style={{"minWidth":"100%"}}>
                    <InputLabel htmlFor="age-helper">Education</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      name="Education"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <br></br>
                <div>
                  <FormControl style={{"minWidth":"100%"}}>
                    <InputLabel htmlFor="age-helper">Base Salary Range</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>


                <br></br>
                <div>
                  <TextField
                    id="textarea"
                    label="Language"
                    className={classes.textField}
                    margin="normal"
                  />
                  <span>
                    +Add Language
                  </span>
                </div>
                <div>
                  <TextField
                    id="textarea"
                    label="Required Skills"
                    className={classes.textField}
                    margin="normal"
                  />
                  <span>
                    +Add Skills
                  </span>
                </div>

                <div>
                  <div>Compensation</div>
                  <Checkbox value="checkedC" /> Option
                  <Checkbox value="checkedC" /> Commissions
                  <Checkbox value="checkedC" /> Overtime Pay
                  <Checkbox value="checkedC" /> Bonuses
                  <Checkbox value="checkedC" /> Travel / Meal /Housing Allowance
                  <Checkbox value="checkedC" /> Health
                  <Checkbox value="checkedC" /> Wellness
                </div>
                <div>
                  <FormControl style={{"minWidth":"100%"}}>
                    <InputLabel htmlFor="age-helper">Salary Range</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
            </form>
          </div>

        </div>
        
      )
  }
}

AddJob.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addJobStyle)(AddJob);

 