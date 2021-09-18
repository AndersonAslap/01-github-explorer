interface RepositoryItemProps {
    theme: boolean,
    repository: {
        name: string;
        description: string;
        html_url: string;
        owner: {
            avatar_url: string;
        }
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

    let description = props.repository.description;
    let repositoryName = props.repository.name;

    if (description !== null) 
        if (description.length > 29)
            description = description.substr(0, 29)+'...';
    
   
    return (
        <a href={props.repository.html_url} target="_blank">
        <li className={props.theme ? "dark-li" : "light-li"} >
        <div className="div-2">
            <div>
                    <img className="img-avatar" src={props.repository.owner.avatar_url} alt="" />
                </div>
            </div>

            <div className="div-1">
                <strong className={props.theme ? "dark-title" : "light-title"}>{repositoryName}</strong>
                <p className={props.theme ? "dark-description" : "light-description"}>{description ?? 'Não há descrição'}</p>
                <a href={props.repository.html_url} target="_blank">Repositório</a>
            </div>
        </li>
        </a>
    );
}