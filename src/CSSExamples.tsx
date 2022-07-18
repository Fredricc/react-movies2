import css from './CSSExamples.module.css';

export default function ConditionalIf() {
    const square = {
        backgroundColor: 'purple',
        height: '100px',
        width: '100px',
        marginLeft: '2rem',
        color: 'Yellow',
        font: 'center'
    }
    return(
        <>
        <h1 className="red">CSS Class Example in React</h1>
        <h2 style={{color: 'blue', fontFamily: 'sans-serif', fontSize:'100px'}}>Subtext</h2>
        <div style={square}> Hey </div>
        <br />
        <h2 className={css['primary-color']}>This is a text styled from a module</h2>
        </>
    )
}
