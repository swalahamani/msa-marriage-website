import {AxiosInstance} from "axios";

import NetworkUtil from "@/utils/NetworkUtil";
import {APIResponse} from "@/customTypes/NetworkTypes";

import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function ExampleService(apiServer: AxiosInstance) {
	const getExampleDetails = async (): Promise<APIResponse<{}> | null> => {
		let result = null;

		await apiServer
			.get(apiEndpoints.bio.getBio())
			.then(
				// onFullFilled
				(value) => {
					result = NetworkUtil.buildResult<{}>(
						null,
						value.status,
						null,
						value.data,
					);
				},

				// onRejected
				(reason) => {
					const {response} = reason;
					const {status, data} = response;

					result = NetworkUtil.buildResult<null>(data, status, data, null);
				},
			)
			.catch((error) => {
				throw error;
			});

		return result;
	};

	return {
		getExampleDetails,
	};
}
export default ExampleService;
