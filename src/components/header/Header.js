import './Header.css'

export function Header({ background }) {


    return (
        <header className={background ? 'black' : ''}>
            <a className='feature--logo' href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="netflix-icon" />
            </a>
            <a className='feature--profile' href="/profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile-icon" />
            </a>
        </header>
    );
}