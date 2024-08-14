"use client"
import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

// Definición del tipo de las props
interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold  />
      </button>
      
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold/>
      </button>
    </div>
  )
}

export default WorkSliderBtns;
