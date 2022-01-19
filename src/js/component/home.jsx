import React from "react";
import { useEffect } from "react";
import {
	Button,
	Form,
	Container,
	Header,
	Icon,
	Label,
	Menu,
	Table
} from "semantic-ui-react";
import axios from "axios";

//create your first component
const Home = () => {
	const [name, setName] = React.useState("");
	const [age, setAge] = React.useState("");
	const [salary, setSalary] = React.useState("");
	const [hobby, setHobby] = React.useState("");
	const [info, setInfo] = React.useState([]);

	const handleSubmit = e => {
		e.preventDefault();

		const objt = { name, age, salary, hobby };
		console.log(objt);
		axios.all(
			axios.post(
				"https://sheet.best/api/sheets/58a4bfeb-5041-47db-8e67-4ddde6ad2c81",
				objt
			),
			axios
				.get(
					"https://sheet.best/api/sheets/58a4bfeb-5041-47db-8e67-4ddde6ad2c81"
				)
				.then(response => {
					setInfo(response.data);
					console.log(response);
				})
		);
	};

	const getInfo = e => {
		e.preventDefault();

		const objt = { name, age, salary, hobby };
		//console.log(objt);

		axios
			.get(
				"https://sheet.best/api/sheets/58a4bfeb-5041-47db-8e67-4ddde6ad2c81",
				objt
			)
			.then(response => {
				setInfo(response.data);
				console.log(response);
			});
	};

	useEffect(() => {
		// const objt = { name, age, salary, hobby };
		// console.log(objt);

		axios
			.get(
				"https://sheet.best/api/sheets/58a4bfeb-5041-47db-8e67-4ddde6ad2c81"
			)
			.then(response => {
				setInfo(response.data);
				//console.log(response);
			});
	}, []);

	// info.map(row => {
	// 	console.log(row.name);
	// 	console.log(row.salary);
	// });

	return (
		<Container fluid className="container">
			<Header as="h2">React Google Sheets!</Header>
			<Form className="form">
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your name"
						type="text"
						name="name"
						value={name}
						onChange={e => {
							setName(e.target.value);
						}}
					/>
				</Form.Field>
				<Form.Field>
					<label>Age</label>
					<input
						placeholder="Enter your age"
						type="number"
						name="age"
						value={age}
						onChange={e => {
							setAge(e.target.value);
						}}
					/>
				</Form.Field>
				<Form.Field>
					<label>Salary</label>
					<input
						placeholder="Enter your salary"
						type="number"
						name="salary"
						value={salary}
						onChange={e => {
							setSalary(e.target.value);
						}}
					/>
				</Form.Field>
				<Form.Field>
					<label>Hobby</label>
					<input
						placeholder="Enter your hobby"
						type="text"
						name="hobby"
						value={hobby}
						onChange={e => {
							setHobby(e.target.value);
						}}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
				<Button color="green" type="button" onClick={getInfo}>
					Click To Update Table
				</Button>
			</Form>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Age</Table.HeaderCell>
						<Table.HeaderCell>Salary</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{info.map(row => {
						return (
							<Table.Row key={row.name}>
								<Table.Cell>{row.name}</Table.Cell>
								<Table.Cell>{row.age}</Table.Cell>
								<Table.Cell>{row.salary}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>

				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan="3">
							<Menu floated="right" pagination>
								<Menu.Item as="a" icon>
									<Icon name="chevron left" />
								</Menu.Item>
								<Menu.Item as="a">1</Menu.Item>
								<Menu.Item as="a">2</Menu.Item>
								<Menu.Item as="a">3</Menu.Item>
								<Menu.Item as="a">4</Menu.Item>
								<Menu.Item as="a" icon>
									<Icon name="chevron right" />
								</Menu.Item>
							</Menu>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		</Container>
	);
};
export default Home;
