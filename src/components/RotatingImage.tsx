import React from "react";
import Image from "next/image";

interface RotatingImageProps {
	src: string;
	alt: string;
}

const RotatingImage = ({ src, alt }: RotatingImageProps) => {
	return (
		<div className='w-64 h-64 flex justify-center items-center'>
			<Image src={src} alt={alt} className='animate-rotate-center' width={420} height={420} />
		</div>
	);
};

export default RotatingImage;