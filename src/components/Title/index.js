import './styles.css'


export const Title = ({text, text2}) => {
    return (
        <>
        <h1 className='title_main'>{text}</h1>
        <h2 className='sub_title'>{text2}</h2>
        </>
        
    )
}