'use client'
import { ReactSVG } from "react-svg";

export default function SvgIcon({ path }: { path: string }) {

  return (
    <ReactSVG src={path}/>
  )
}