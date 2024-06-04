import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useFetch from './utils/useFecth';
import CardComponent from './components/CardComponent';
import NavbarComponent from './components/NavbarComponent';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
	const { data, isLoading } = useFetch('category');

	return (
		<div className='container mx-auto'>
			<NavbarComponent />

			{/* our products */}
			<div className='flex flex-wrap gap-[20px] items-center justify-center mt-[50px]'>
				{isLoading ? (
					data.map((product) => {
						return (
							<CardComponent key={product.id} product={product} />
						);
					})
				) : (
					<h2>Loading...</h2>
				)}
			</div>
			<ToastContainer />
		</div>
	);
}

export default App;
