import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import Switch from '@material-ui/core/Switch';

interface Repository {
    name: string;
    description: string;
    html_url: string;
    owner: {
        avatar_url: string;
    }
}

export function RepositoryList() {

    const [username, setUsername] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    let url = `https://api.github.com/users/${username}/repos`;

    function handleSearch() {
        setIsSearch(true);
    }

    function handleSetName(event: any) {
        setUsername(event.target.value);
        setIsSearch(false);
        setRepositories([]);
    }

    function handleChangeTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    useEffect(() => {
        
        if (username && isSearch) 
            fetch(url)
                .then(response => response.json())
                .then(data => data.message !== 'Not Found' ? setRepositories(data) : setRepositories([]) )

    }, [isSearch]);

    return (
        <div className={isDarkTheme ? "container dark-container" : "container light-container"}>
        <header className={isDarkTheme ? "dark-header" : "light-header"}>
            <h1 className={isDarkTheme ? "dark-header-text" : "light-header-text"}>Repositórios Github</h1>

            <div>
                <input placeholder="Digite seu username do github" onChange={(event) => handleSetName(event)} />
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
            <br />
            <div>
                <label className={isDarkTheme ? "dark-header-text" : "light-header-text"}>Light</label>
                <Switch checked={isDarkTheme} onClick={handleChangeTheme}/>
                <label className={isDarkTheme ? "dark-header-text" : "light-header-text"}>Dark</label>
            </div>
        </header>

        <section>
            <ul>
                {
                    username &&
                        repositories && repositories.map(repository => {
                            return <RepositoryItem key={repository.name} repository={repository} theme={isDarkTheme}/>
                        })
                }
            </ul>
        </section>
        </div>
    );
}