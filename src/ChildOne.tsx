import { ChildTwo } from "./ChildTwo";

export const ChildOne = ({ deepData }: any) => {
	return <ChildTwo deepData={deepData}></ChildTwo>;
};
