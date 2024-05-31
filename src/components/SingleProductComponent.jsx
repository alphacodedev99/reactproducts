import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

function SingleProductComponent() {
	const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetch('https://dummyjson.com/products/1')
			.then((res) => res.json())
			.then((response) => {
                setSingleProduct(response)
                setIsLoading(true);
               setTimeout(() =>  toast.success('Doso proizvod!!'), 5000)
            });
	}, []);

	return (
		<div className='flex flex-col items-center justify-center'>
			{isLoading ? <>
                <img
				src={singleProduct.thumbnail}
				alt=''
				className='rounded-full border border-blue-400'
			/>

			<div>
				<h2>{singleProduct.title}</h2>


                <img src={singleProduct.images[0]} alt="" className='w-[90px] h-[90px]' />
			</div>
            </> : <h2>LOADING...</h2>}
		</div>
	);
}

export default SingleProductComponent;
