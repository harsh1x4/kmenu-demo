import { FiCommand } from 'react-icons/fi'
import { useKmenu } from 'kmenu'
import 'kmenu/dist/index.css'
import styles from '../../styles/Home.module.css'

const Intro = () => {

    const { toggle } = useKmenu()

    return (
        <>
            <button className={styles.btn} onClick={toggle}>
                <FiCommand />
            </button>
        </>
    )
}

export default Intro