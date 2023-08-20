import { StatusBar } from 'expo-status-bar';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useRef, useEffect } from 'react';

import { List, Modal, LoadView } from './src/components';

import { axiosReq } from './src/services/axios';
import { User, Results} from './src/interfaces/apiResuts';

export default function App(): JSX.Element {
	const modalRef = useRef<Modalize>(null);

	const [user, setUser] = useState<User | null>(null);
	const [data, setData] = useState<Results | null>(null);

	const openModal = (): void => {
		modalRef.current?.open();
	};

	useEffect(() => {
		const fetchAll = async () => {
			const response = await axiosReq('');
			setTimeout(() => setData(response.data)
			, 6000);
		};

		fetchAll();
	}, []);

	const userModal = (value: string) => {
		if (!data) {
			return;
		}

		for (const user of data.results) {
			if (user.id.value === value) {
				setUser(user);
				openModal();
				return;
			}
		}
	};

	return (
		<GestureHandlerRootView>
			<StatusBar style='auto' backgroundColor='#FFF'/>
			{ data
				?<>

					<List data={data} userModal={userModal}/>
					<Modal modalRef={modalRef} user={user}/>

				</>
				: <LoadView/>
			}
		</GestureHandlerRootView>
	);
}

