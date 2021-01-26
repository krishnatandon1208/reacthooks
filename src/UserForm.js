import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {
	Container,
	FormControl,
	FormLabel,
	FormControlLabel,
	Radio,
	makeStyles,
	FormHelperText,
	RadioGroup
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFormControl-root': {
			width: '80%',
			margin: theme.spacing(1)
		},
		'& .MuiPaper-root': {
			padding: theme.spacing(4),
			backgroundColor: '#00fff617'
		}
	}
}));

const initialValues = {
	id: 0,
	firstName: '',
	lastName: '',
	email: '',
	city: '',
	gender: '', //This will be radio button
	departmentID: '',
	hireDate: new Date(),
	isPermanent: false //This will be a checkbox
};

export default function UserForm() {
	const classes = useStyles();

	const [ values, setValues ] = useState(initialValues);

	//console.log(values);
	const handleInputChange = (event) => {
		console.log(event.target.value);
		const { name, value } = event.target;
		setValues({
			...values, //The other properties will remain the same
			[name]: value //The updated value will be assigned to the name
		});
	};

	return (
		<Container>
			<form className={classes.root}>
				{' '}
				<h4>Making a user form</h4>
				<Paper>
					<Grid container>
						<Grid item xs={6}>
							<TextField
								variant="outlined"
								label="First Name"
								name="firstName"
								value={values.firstName}
								onChange={handleInputChange}
							/>
							<TextField
								variant="outlined"
								label="Last Name"
								name="lastName"
								value={values.lastName}
								onChange={handleInputChange}
							/>
							<TextField
								variant="outlined"
								label="Email"
								name="email"
								values={values.email}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControl component="fieldset">
								<FormLabel component="legend">Gender</FormLabel>
								<RadioGroup
									aria-label="gender"
									name="gender"
									row={true}
									value={values.gender}
									onChange={handleInputChange}
								>
									<FormControlLabel value="male" control={<Radio />} label="Male" />
									<FormControlLabel value="female" control={<Radio />} label="Female" />
									<FormControlLabel value="others" control={<Radio />} label="Others" />
								</RadioGroup>
								<FormHelperText />
							</FormControl>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</Container>
	);
}
