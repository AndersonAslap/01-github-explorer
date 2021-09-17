import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React sdoadasd odasodasd asdasdasd asdasdasd sadasdasd ',
    link: 'https://github.com/'
}

export function RepositoryList() {
    return (
        <section>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}