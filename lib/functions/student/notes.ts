import { root, Routes, gradesResSuccess } from "ecoledirecte-api-types";
import { makeRequest } from "../util";

export async function getGrades(
	id: number,
	token: string
): Promise<gradesResSuccess> {
	const body: gradesResSuccess = await makeRequest({
		method: "POST",
		url: new URL(Routes.studentGrades(id), root).href,
		body: { token },
		guard: true,
	});

	return body;
}
