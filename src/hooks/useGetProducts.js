import {useState, useEffect} from 'react';
import axios from 'axios';


const useGetProducts = (API) => {
    const [products,setproducts] = useState([]);
    

    useEffect(async() => {
        const response = await axios.get(API);
        setproducts(response.data);
    },[API]);
    

    return products;
}

export default useGetProducts;

/* CODIGO ORIGINAL completo + segundo useEffect setLoading(false)
const useGetProducts = (API) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(async () => {
		const cancelToken = axios.CancelToken;
		const source = cancelToken.source();

		try {
			const { data } = await axios(API, { cancelToken: source.token });

			if (data) {
				setProducts([...products, ...data]);
				setLoading(false);
			}
		} catch (err) {
			if (axios.isCancel(err)) {
				return 'axios request cancelled';
			}
			console.log('Error: ', err);
		}

		return () => source.cancel('axios request cancelled');
	}, []);

	return { products, loading };
};

*/