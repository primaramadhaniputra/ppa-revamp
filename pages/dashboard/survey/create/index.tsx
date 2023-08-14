import React from "react";
import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const CreateSurveyView = dynamic(() => import("views/CreateSurvey"), {
	ssr: false,
	loading: () => <Loading />,
});

const Create = () => {
	return <CreateSurveyView />;
};

export default Create;
