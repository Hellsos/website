interface ITechnologyListItem {
	name : string,
	icon : string,
	alt? : string
}

let technologyListMap : Map<string, ITechnologyListItem> = new Map();
technologyListMap.set( "deno", {
	name : "Deno",
	icon : "https://deno.land/logo.svg"
} );
technologyListMap.set( "react", {
	name : "React",
	icon : "./assets/img/3rd/favicon-react.svg",
	alt : "React Library"
} );
technologyListMap.set( "typescript", {
	name : "TypeScript",
	icon : "./assets/img/3rd/favicon-typescript.ico"
} );
technologyListMap.set( "javascript", {
	name : "JavaScript",
	icon : "./assets/img/3rd/favicon-javascript.png"
} );
technologyListMap.set( "less", {
	name : "Less",
	icon : "./assets/img/3rd/favicon-less.ico"
} );
technologyListMap.set( "angular", {
	name : "Angular",
	icon : "./assets/img/3rd/favicon-angular.ico",
	alt : "Angular Framework"
} );
technologyListMap.set( "mongodb", {
	name : "MongoDB",
	icon : "https://www.mongodb.com/assets/images/global/favicon.ico",
	alt : "MongoDB - NoSQL Database"
} );
technologyListMap.set( "sql", {
	name : "SQL",
	icon : "./assets/img/3rd/favicon-sql.png",
	alt : "SQL Database Language"
} );
technologyListMap.set( "redis", {
	name : "Redis",
	icon : "./assets/img/3rd/favicon-redis.png",
	alt : "Redis Database"
} );
technologyListMap.set( "laravel", {
	name : "Laravel",
	icon : "./assets/img/3rd/favicon-laravel.ico",
	alt : "Laravel PHP Framework"
} );
technologyListMap.set( "jquery", {
	name : "JQuery",
	icon : "./assets/img/3rd/favicon-jquery.ico",
	alt : "JQuery Library"
} );
technologyListMap.set( "html", {
	name : "Html",
	icon : "./assets/img/3rd/favicon-html.png"
} );
technologyListMap.set( "css", {
	name : "CSS",
	icon : "./assets/img/3rd/favicon-css.svg"
} );
technologyListMap.set( "googlecharts", {
	name : "Google Charts",
	icon : "./assets/img/3rd/favicon-googlecharts.png",
	alt : "Google Charts JS Library"
} );
technologyListMap.set( "nodejs", {
	name : "NodeJS",
	icon : "./assets/img/3rd/favicon-nodejs.ico"
} );
technologyListMap.set( "socketio", {
	name : "Socket.IO",
	icon : "./assets/img/3rd/favicon-socketio.png"
} );

technologyListMap.set( "git", {
	name : "Git",
	icon : "./assets/img/3rd/favicon-git.ico"
} );
technologyListMap.set( "docker", {
	name : "Docker",
	icon : "./assets/img/3rd/favicon-docker.png"
} );
technologyListMap.set( "webpack", {
	name : "Webpack",
	icon : "https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"
} );
technologyListMap.set( "yarn", {
	name : "Yarn",
	icon : "https://yarnpkg.com/favicon-32x32.png"
} );
technologyListMap.set( "npm", {
	name : "Npm",
	icon : "https://static.npmjs.com/3dc95981de4241b35cd55fe126ab6b2c.png"
} );
technologyListMap.set( "instagramapi", {
	name : "Instagram - API",
	icon : "./assets/img/3rd/favicon-instagram.png"
} );

interface IProjectListItem {
	name : string;
	previewImg? : string;
	link : {
		github? : string;
		live? : string
	},
	date: number;
	status : boolean | null;
	description : string
	clientSideList? : Array<ITechnologyListItem>;
	serverSideList? : Array<ITechnologyListItem>;
}

const projectsListMap : Map<string, IProjectListItem> = new Map();
projectsListMap.set('denowebsockets', {
	name: 'Websockets for Deno',
	link: {
		github: 'https://github.com/Hellsos/deno_websockets'
	},
	date: 2020,
	status: null,
	description: `A websocket library for Deno inspired by Socket.IO`,
	serverSideList: [
		technologyListMap.get('deno')!,
		technologyListMap.get('typescript')!,
		technologyListMap.get('javascript')!,
		technologyListMap.get('git')!
	]
})
projectsListMap.set('denodotenvfile', {
	name: 'DotEnv File for Deno',
	link: {
		github: 'https://github.com/Hellsos/deno-dotenv-file'
	},
	date: 2020,
	status: true,
	description: `A library for Deno parsing .env file into object-oriented structure making it more friendly for working in IDEs.`,
	serverSideList: [
		technologyListMap.get('deno')!,
		technologyListMap.get('typescript')!,
		technologyListMap.get('javascript')!,
		technologyListMap.get('git')!
	]
})
projectsListMap.set('blogmihmanli', {
	name: 'Blog - Mihmanli',
	previewImg: './assets/img/asset_mihmanli.png',
	link: {
		live: 'https://kristyna.mihmanli.com/'
	},
	date: 2017,
	status: true,
	description: `Personal blog with administration allowing logged user to create groups, posts, galleries publicly accessible or privately accessible with custom code.
                      <br>Data feed from Instagram is every hour synchronized via Instagram - API providing images, videos and its data. Images are stored on storage server and data are inserted into SQL database.`,
	clientSideList: [
		technologyListMap.get( "jquery")!,
		technologyListMap.get( "html")!,
		technologyListMap.get( "css")!
	],
	serverSideList: [
		technologyListMap.get( "laravel")!,
		technologyListMap.get( "sql")!,
		technologyListMap.get( "redis")!,
		technologyListMap.get( "instagramapi")!,
	]
})
projectsListMap.set( "weatherstation", {
	name : "WeatherStation Stats",
	previewImg : "./assets/img/asset_weather_station.png",
	link : {
		live : "http://meteostanice-dev.kumpacka.eu"
	},
	date : 2016,
	status : true,
	description : `Web Application which shows data stored in redis cache collected by weather station. 
				  <br>Shell script on server inserts current weather data to SQL database each 5 minutes and then refreshes views in redis cache.
				  <br> Sun/Moon moves around according to the time of last record :)`,
	clientSideList : [
		technologyListMap.get( "jquery" )!,
		technologyListMap.get( "html" )!,
		technologyListMap.get( "css" )!,
		technologyListMap.get( "googlecharts" )!,
	],
	serverSideList : [
		technologyListMap.get( "laravel" )!,
		technologyListMap.get( "sql" )!,
		technologyListMap.get( "redis" )!,
	]
} );


export const template = `
	<!DOCTYPE html>
<html lang="en">
<head>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async
	        src="https://www.googletagmanager.com/gtag/js?id=UA-155382150-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() { dataLayer.push( arguments ); }

		gtag( 'js', new Date() );

		gtag( 'config', 'UA-155382150-1' );
	</script>

	<base href="/">

	<title>Jan Rabčan - Front End Developer - Angular, React, Deno</title>

	<meta name="title"
	      content="Jan Rabčan - Front End Developer - Angular, React, Deno" />

	<meta name="description"
	      content="Jan Rabčan - Front End Developer, Front End, Back End, Full Stack, Front End, Back End, Web, Developer, Angular, React, Deno, JQuery, TypeScript, JavaScript, Less, NodeJS, Socket.IO, Redis, Git, Docker" />

	<meta http-equiv="Content-Type"
	      content="text/html;charset=UTF-8" />

	<meta name="google-site-verification"
	      content="2yvwVzwqeZ580ryQ8D9QgGbRcumZo4t-5PW0qQdvfqM" />

	<meta charset="utf-8" />

	<meta name="og:title"
	      property="og:title"
	      content="Jan Rabčan - Front End Developer - Angular, React, Deno" />

	<meta name="twitter:card"
	      content="Jan Rabčan - Front End Developer - Angular, React, Deno" />

	<meta name="robots"
	      content="nofollow" />

	<meta name="viewport"
	      content="width=device-width, initial-scale=1" />

	<meta name="keywords"
	      content="Full Stack, Front End, Back End, Web, Developer, Angular, React, Deno, JQuery, TypeScript, JavaScript, Less, NodeJS, Socket.IO, Redis, Git, Docker" />

	<link rel="canonical"
	      href="https://rabcan.com">

	<link rel="stylesheet"
	      href="css/index.min.css">

	<link href="https://fonts.googleapis.com/css?family=Nunito:400,500,600,700&display=swap&subset=cyrillic,cyrillic-ext"
	      rel="stylesheet">

	<link rel="icon"
	      type="image/x-icon"
	      href="favicon.ico">

	<link rel="stylesheet"
	      href="https://cdn.proxyq.co/kit/bateokp34yt53h154qlp[agr==/css/all.min.css">
</head>

<style>
    a {
        text-decoration: inherit;
        color: inherit;
    }
</style>

<body>
<div class="page-wrapper">
	<div class="intro">
		<h1>
			Hello, I'm Jan
		</h1>
		<h2>
			A Front End Developer living in Czech Republic
		</h2>
		<div class="skill-wrapper">
			<h3 class="skill-caption">
				Building Web Apps Using
			</h3>
			<ul class="skill-list"
			    id="skillList">
${ Array.from( technologyListMap.values() ).map( ( technology ) => {
	return `<li><img src="${ technology.icon }" style="height: 18px" title="${ technology.name }" alt="${ technology.alt || technology.name }"> ${ technology.name } </li>`;
} ).join( "\n" ) }
			</ul>
		</div>

		<ul class="contact-list">
			<li>
				<a class="clickable"
				   href="mailto:jan@rabcan.com"><i class="fas fa-envelope"></i> jan@rabcan.com</a>
			</li>
			<li>
				<a class="clickable"
				   href="https://www.linkedin.com/in/jan-rab%C4%8Dan-17917a61"
				   target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
			</li>
		</ul>
	</div>

	<h2>
		Projects
	</h2>
	<ul class="project-list"
	    id="projectList">
	    ${ Array.from( projectsListMap.values() ).map( ( project ) => {
	return `
	<li>
		<div class="project-item-wrapper">                    
			<div class="project-item-left">
				<a ${ project.link.live ? "href='" + project.link.live + "'" : null }
					target="_blank">
					<div class="project-item-left-icon">                                
							${ project.link.github ? "<div class=\"project-item-left-icon-badge open-source\">Open Source</div>" : "" }
							${ project.previewImg ? "<img src=\"" + project.previewImg + "\" alt=\"" + project.name + "\" title=\"" + project.name + "\">" : "Coming Soon" }                                
					</div>
				</a>
				<ul class="project-item-left-link-list">
					<li>
						<a  ${ project.link.github ? "href='" + project.link.github + "'" : "" }
							target="_blank"
							class="clickable ${ project.link.github == undefined ? "disabled" : "" }"><i class="fab fa-github"></i>Github</a>
					</li>
					<li>
						<a ${ project.link.live ? "href='" + project.link.live + "'" : "" }
						target="_blank"
						class="clickable ${ project.link.live == null ? "disabled" : "" }"><i class="fas fa-magic"></i>Live</a>
					</li>
				</ul>
			</div>
			<div class="project-item-right">
				<ul>
					<li>
						<div class="project-item-right-label">
							<h5>Name</h5>
						</div>
						<div class="project-item-right-content name">
							<h4> ${ project.name } </h4>
						</div>
					</li>
					<li>
						<div class="project-item-right-label">
							<h5>Date</h5>
						</div>
						<div class="project-item-right-content">
							<h4> 
								${ project.date } 
								<span class="project-item-right-content-status 
									${ project.status === true ? "active" : "" }
									${ project.status === null ? "progress" : "" }
									${ project.status === false ? "inactive" : "" }">
									${ project.status === true ? "Active" : "" }
									${ project.status === null ? "In Progress" : "" }
									${ project.status === false ? "Inactive" : "" }
								</span>   
							</h4>  
						</div>
					</li>
					<li>
						<div class="project-item-right-label">
							<h5>Description</h5>
						</div>
						<div class="project-item-right-content">
							<h4>${ project.description }</h4>
						</div>
					</li>
					${ project.clientSideList && project.clientSideList.length > 0 ?
	`<li>
						<div class="project-item-right-label">
							<h5>Client Side</h5>
						</div>
						<div class="project-item-right-content list">
							<ul class="skill-list">
					${ project.clientSideList.map( ( technology ) => {
		return `<li><img src="${ technology.icon }" style="height: 18px" title="${ technology.name }" alt="${ technology.alt || technology.name }"> ${ technology.name } </li>`;
	} ).join( "\n" ) }
							</ul>
						</div>
					</li>`: ''
	}
					${ project.serverSideList && project.serverSideList.length > 0 ? `<li>
						<div class="project-item-right-label">
							<h5>Server Side</h5>
						</div>
						<div class="project-item-right-content list">
							<ul class="skill-list">
							${ project.serverSideList.map( ( technology ) => {
		return `<li><img src="${ technology.icon }" style="height: 18px" title="${ technology.name }" alt="${ technology.alt || technology.name }"> ${ technology.name } </li>`;
	} ).join( "\n" ) }
							</ul>
						</div>
					</li>`: ''
	}
				 </ul>
				</div>
			</div>     
		
		</li>`;
} ).join( "\n" ) }
	</ul>
	<h2>
		Work Experience
	</h2>
	<ul class="work-list">
		<li>
			<div class="work-item-wrapper">
				<div class="work-item-wrapper-to">Present</div>
				<div class="work-item-wrapper-info">
					<a href="https://lemonero.cz"
					   class="clickable"
					   target="_blank">Lemonero</a>
					<div class="work-item-wrapper-info-role">
						Front End Developer
					</div>
				</div>
			</div>
		</li>
		<li>
			<div class="work-item-wrapper">
				<div class="work-item-wrapper-to">1/2020</div>
				<div class="work-item-wrapper-info">
					<a href="https://monkeydata.com"
					   class="clickable"
					   target="_blank">MonkeyData</a>
					<div class="work-item-wrapper-info-role">
						Front End Developer
					</div>
				</div>
				<div class="work-item-wrapper-from">12/2017</div>
			</div>
		</li>
		<li>
			<div class="work-item-wrapper">
				<div class="work-item-wrapper-info">
					<a href="https://monkeydata.com"
					   class="clickable"
					   target="_blank">MonkeyData</a>
					<div class="work-item-wrapper-info-role">
						Junior Developer
					</div>
				</div>
				<div class="work-item-wrapper-from">6/2016</div>
			</div>
		</li>
	</ul>

	<div class="footer">
		<a href="/"
		   class="clickable"> Jan Rabčan </a> &#9400; 2020
	</div>
</div>
</body>
</html>
`;