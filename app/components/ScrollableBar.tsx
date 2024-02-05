import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css"

type Props = {
  children: React.ReactNode
}

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },

  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
}
export default function ScrollableBar({ children }: Props) {
  return (
    <Carousel containerClass="flex gap-2 w-full" responsive={responsive}>
      {children}
    </Carousel>
  )
}
