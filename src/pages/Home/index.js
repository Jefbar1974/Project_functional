
import './styles.css'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom';

export const Home = () => {
    
    return (
        <>
            <Title text='Auxilliary Tank Indication System Functional Check' />
            <Title text2='Legacy 650/650' />
            <Link className='start' to='/Start'>Start Legacy 650</Link>

        </>
    )
}


