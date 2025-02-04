import styles from './freeze.module.css'

const Freeze = () => {

    const freezePage = () => {
        document.getElementById('freezePage').style.display = 'flex'
        setTimeout(() => {
            document.getElementById('freezePage').style.display = 'none'
        },5000)
    }


    return (
        <div>
            <button onClick={freezePage}>freeze</button>
        <div className={styles.freezepage} id='freezePage'>
               <p>page freeze</p>
            </div>
        </div>
    )
}

export default Freeze;