export default function Price({ card, discount, price }) {
	return (
		<div className={`flex ${card && 'justify-center items-center'} `}>
			
			<h4
				className={` ${
					card ? 'md:text-base text-sm relative top-[1px]' : 'text-base'
				} font-bold text-greenBtn line-through ml-2 opacity-60`}
			>
				${price}
			</h4>
		</div>
	);
}
