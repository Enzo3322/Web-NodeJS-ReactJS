import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProjectShelf } from '../../components/ProjectsShelf';
import './styles.scss';

function Profile() {
	const [userData, setUserData] = useState(null);

	const profile = {
		name: 'Enzo Spagnolli Direito',
		old: 21,
		city: 'Santos - SP',
		job: 'Senior Frontend Engineer',
		profile_img:
			'https://media-exp1.licdn.com/dms/image/C5603AQH4rFWCSZBx9g/profile-displayphoto-shrink_800_800/0/1634306284597?e=1669248000&v=beta&t=Rx2g-Gu20rKlmVrpWcwbD-fV0zDHV39inSn0UVqsTOo',
	};

	const getRepoData = () => {
		fetch(`https://api.github.com/users/Enzo3322/repos`).then((response) => {
			response.json().then((data) => {
				setUserData(data);
			});
		});
	};

	useEffect(() => {
		getRepoData();
		console.log(userData);
	}, []);

	return (
		<>
			<div className="profile-container">
				<div className="profile-pic">
					<picture>
						<img src={profile.profile_img} alt={profile.name} />
					</picture>
				</div>
				<div>
					<h2>Dados pessoais</h2>
					<ul>
						<li>Nome: {profile.name}</li>
						<li>Idade: {profile.old}</li>
						<li>Cidade: {profile.city}</li>
						<li>Cargo: {profile.job}</li>
					</ul>
				</div>
				<div>
					<h2>Formação</h2>
					<ul>
						Atuo na área de desenvolvimento front-end a pouco mais de 3 anos,
						possuo certificações como especialista de implementação VTEX.
					</ul>
				</div>
				<div>
					<h2>Experiência</h2>
					<p>
						Atualmente atuo como desenvolvedor Senior, tenho uma grande
						experência de mercado atuando em empresas como Carrefour, Sephora,
						Avon, Usaflex, Dental Partner.
					</p>
					<p>
						Todos os clientes que já atuei fui responsável pela implementação e
						desenvolvimento de novas funcionalidades para o projeto em suas
						etapas de projeto e on-going
					</p>
				</div>
				<div>
					<h2>Projetos</h2>
					<ProjectShelf projects={userData} />
				</div>
			</div>
		</>
	);
}

export default Profile;
