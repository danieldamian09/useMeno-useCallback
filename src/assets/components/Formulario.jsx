import {useState} from "react";

const Formulario = () => {
	const [formData, setFormData] = useState({
		usuario: "",
		email: "",
	});

	const handleChange = ({target}) => {
    const { name, value } = target;
    console.log(name, value);
  };
  

	return (
		<>
			<h1>Formulario</h1>
			<hr />

			<input
				type="text"
				className="form-control"
				placeholder="usuario"
				name="usuario"
				onChange={handleChange}
			/>

			<input
				type="email"
				className="form-control mt-3"
				placeholder="correo@correo.com"
				name="email"
				onChange={handleChange}
			/>
		</>
	);
};

export default Formulario;
