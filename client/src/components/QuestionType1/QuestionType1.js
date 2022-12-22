// external components
import { useState } from "react";
import AutosizeInput from "react-input-autosize";

// internal components
import "./QuestionType1.css";

const QuestionType1 = () => {
	// input fields values
	const [ansA, setAnsA] = useState("");
	const [ansB, setAnsB] = useState("");
	const [ansC, setAnsC] = useState("");
	const [ansD, setAnsD] = useState("");
	const [ansE, setAnsE] = useState("");
	const [ansF, setAnsF] = useState("");
	const [ansG, setAnsG] = useState("");
	const [ansH, setAnsH] = useState("");
	const [ansI, setAnsI] = useState("");
	const [ansJ, setAnsJ] = useState("");

	return (
		<>
			<div className="row m-0 ques-type-1-container">
				<div className="col p-0 ques-type-1-wrapper">
					<div className="title">Fill in the blanks with suitable words ?</div>

					<div className="paragraph">
						Air and water are two important&nbsp;<label htmlFor="a">(a)</label>{" "}
						<AutosizeInput
							id="a"
							value={ansA}
							onChange={(e) => setAnsA(e.target.value)}
						/>{" "}
						of the environment. These elements are&nbsp;
						<label htmlFor="b">(b)</label>{" "}
						<AutosizeInput
							id="b"
							value={ansB}
							onChange={(e) => setAnsB(e.target.value)}
						/>{" "}
						for life on earth. They are often&nbsp;
						<label htmlFor="c">(c)</label>{" "}
						<AutosizeInput
							id="c"
							value={ansC}
							onChange={(e) => setAnsC(e.target.value)}
						/>{" "}
						in many ways. Air is polluted by &nbsp;
						<label htmlFor="d">(d)</label>{" "}
						<AutosizeInput
							id="d"
							value={ansD}
							onChange={(e) => setAnsD(e.target.value)}
						/>{" "}
						If we want to live a&nbsp;<label htmlFor="e">(e)</label>{" "}
						<AutosizeInput
							id="e"
							value={ansE}
							onChange={(e) => setAnsE(e.target.value)}
						/>{" "}
						life, and water by different kinds of&nbsp;
						<label htmlFor="f">(f)</label>{" "}
						<AutosizeInput
							id="f"
							value={ansF}
							onChange={(e) => setAnsF(e.target.value)}
						/>{" "}
						and filth. We should&nbsp;<label htmlFor="g">(g)</label>{" "}
						<AutosizeInput
							id="g"
							value={ansG}
							onChange={(e) => setAnsG(e.target.value)}
						/>{" "}
						the pollution of the environment. Total prevention may be&nbsp;
						<label htmlFor="h">(h)</label>{" "}
						<AutosizeInput
							id="h"
							value={ansH}
							onChange={(e) => setAnsH(e.target.value)}
						/>{" "}
						but we can certainly&nbsp;
						<label htmlFor="i">(i)</label>{" "}
						<AutosizeInput
							id="i"
							value={ansI}
							onChange={(e) => setAnsI(e.target.value)}
						/>{" "}
						pollution by raising&nbsp;<label htmlFor="j">(j)</label>{" "}
						<AutosizeInput
							id="j"
							value={ansJ}
							onChange={(e) => setAnsJ(e.target.value)}
						/>{" "}
						among the people.
					</div>
				</div>
			</div>
		</>
	);
};

export default QuestionType1;
