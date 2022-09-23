import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi Everyone, My Name is Bushra</h2>
                <div className="prompt">
                    <p>
                        A software developer with a passion for learning and creating.
                    </p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className="skills">
                <h1> Skills </h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, AngularJS, JavaScript Redux, HTML, CSS, React Native, NPM,
                            BootStrap, MaterialUI, Yarn, StyledComponents, SASS
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Python, Django, MySQL, SQL, MondoDB, CosmosDB, AzureCloud
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Python, C#, C
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
