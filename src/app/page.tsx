"use client";
import Description from "@/components/Description";
import NavigateButton from "@/components/NavigateButton";
import SoundWarning from "@/components/SoundWarning";
import Loading from "./loading";
const Page = () => {
	const navigationButtonProps = [
		{
			href: "/maracas/light",
			label: "軽量マラカス",
		},
		{
			href: "/maracas/normal",
			label: "ノーマルマラカス",
		},
		{
			href: "/maracas/special",
			label: "スペシャルマラカス",
		},
	];
	return (
		<>
			<Description />
			<div className='flex justify-center items-center'>
				<div className='xl:flex w-fit h-fit m-auto mb-4 2xl:gap-4 gap-x-2'>
					{navigationButtonProps.map((props, i) => {
						return (
							<div key={i} className='w-fit m-auto my-4'>
								<NavigateButton href={props.href} label={props.label} />
							</div>
						);
					})}
				</div>
			</div>
      <SoundWarning />
		</>
	);
};

export default Page;

