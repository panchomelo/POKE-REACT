import estilos from './ImagenPokemon.module.css'

interface Props {
  src: string
  alt: string
  className?: string
}

const ImagenPokemon = ({ src, alt, className }: Props) => {
  const clases = [estilos.imagen, className].filter(Boolean).join(' ')

  return <img className={clases} src={src} alt={alt} loading="lazy" />
}

export default ImagenPokemon
