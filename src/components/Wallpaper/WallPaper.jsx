import wallpaper from '../../assets/img/Wallpaper.jpg'
import './wallpaper.scss'

const WallPaper = () => {
  return (
    <>
    <div className={'position-fixed d-flex Wallpaper-container  top-0 bottom-0 end-0 start-0'}>
        <img className='Wallpaper' src={wallpaper} alt="walpaperimage"/>
    </div>
    </>
  )
}

export default WallPaper