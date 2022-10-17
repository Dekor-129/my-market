import Image from "next/image"


export default function ProductImg(props) {
  return (
    <Image  src={props.src} width={500}
    height={500}/>
  )
}
