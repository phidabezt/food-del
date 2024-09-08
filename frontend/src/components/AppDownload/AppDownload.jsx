import { assets } from '../../assets/assets'
import './AppDownload.scss'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className='app-download__platforms'>
        <img src={assets.play_store} alt='' />
        <img src={assets.app_store} alt='' />
      </div>
    </div>
  )
}

export default AppDownload
