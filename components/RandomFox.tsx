type Props = {
    image: string;
    alt?:string;
}
export const RandomFox = ({image, alt}: Props): JSX.Element => {
    return <img className="w-96 h-auto rounded-md"  src={image} alt={alt} />
}