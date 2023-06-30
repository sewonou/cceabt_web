import React, {useState} from 'react';
import Field from "../../components/forms/Field";

;

const LoginPage = (props) => {
    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    });

    const [error, setError] = useState("");

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;

        setCredentials({...credentials, [name]:value});
    };

    const handleSubmit = async event => {
        //event.preventDefault();
    };
    return (
        <>
            <div className="container">
                <h1>Connexion à l'application</h1>

                <form onSubmit={handleSubmit}>
                    <Field
                        label="Adresse email"
                        onChange={handleChange}
                        name="username" value={credentials.username}
                        placeholder="Adresse email de connexion"
                        error={error}
                    />
                    <Field
                        name="password"
                        label="Mot de passe"
                        onChange={handleChange}
                        type="password"
                        placeholder="Mot de passe de connexion"
                        error={error}
                    />
                    <div className="form-group mt-2">
                        <button type="submit" className="btn btn-success">Je me connecte</button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default LoginPage;
