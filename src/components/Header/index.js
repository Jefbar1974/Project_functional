import './styles.css'

export const Header = () => {
    return (
        <header className='header'>
            <nav>
                <a className='header__menu'  href="/">Menu</a>
                <a className='header__help' href="#">Help</a>
            </nav>

        </header>
    )
}