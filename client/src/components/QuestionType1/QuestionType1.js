// external components
import { useState } from "react";
import AutosizeInput from "react-input-autosize";

// internal components
import "./QuestionType1.css";

const QuestionType1 = () => {
	// for input-border animation
	const [isActiveA, setIsActiveA] = useState(false);
	const [isActiveB, setIsActiveB] = useState(false);
	const [isActiveC, setIsActiveC] = useState(false);
	const [isActiveD, setIsActiveD] = useState(false);
	const [isActiveE, setIsActiveE] = useState(false);
	const [isActiveF, setIsActiveF] = useState(false);
	const [isActiveG, setIsActiveG] = useState(false);
	const [isActiveH, setIsActiveH] = useState(false);
	const [isActiveI, setIsActiveI] = useState(false);
	const [isActiveJ, setIsActiveJ] = useState(false);

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
						<div className="input-field" id={isActiveA ? "active" : ""}>
							<AutosizeInput
								id="a"
								onFocus={() => setIsActiveA(true)}
								onBlur={() => setIsActiveA(false)}
								value={ansA}
								onChange={(e) => setAnsA(e.target.value)}
							/>
						</div>{" "}
						of the environment. These elements are&nbsp;
						<label htmlFor="b">(b)</label>{" "}
						<div className="input-field" id={isActiveB ? "active" : ""}>
							<AutosizeInput
								id="b"
								onFocus={() => setIsActiveB(true)}
								onBlur={() => setIsActiveB(false)}
								value={ansB}
								onChange={(e) => setAnsB(e.target.value)}
							/>
						</div>{" "}
						for life on earth. They are often&nbsp;
						<label htmlFor="c">(c)</label>{" "}
						<div className="input-field" id={isActiveC ? "active" : ""}>
							<AutosizeInput
								id="c"
								onFocus={() => setIsActiveC(true)}
								onBlur={() => setIsActiveC(false)}
								value={ansC}
								onChange={(e) => setAnsC(e.target.value)}
							/>
						</div>{" "}
						in many ways. Air is polluted by &nbsp;
						<label htmlFor="d">(d)</label>{" "}
						<div className="input-field" id={isActiveD ? "active" : ""}>
							<AutosizeInput
								id="d"
								onFocus={() => setIsActiveD(true)}
								onBlur={() => setIsActiveD(false)}
								value={ansD}
								onChange={(e) => setAnsD(e.target.value)}
							/>
						</div>{" "}
						If we want to live a&nbsp;<label htmlFor="e">(e)</label>{" "}
						<div className="input-field" id={isActiveE ? "active" : ""}>
							<AutosizeInput
								id="e"
								onFocus={() => setIsActiveE(true)}
								onBlur={() => setIsActiveE(false)}
								value={ansE}
								onChange={(e) => setAnsE(e.target.value)}
							/>
						</div>{" "}
						life, and water by different kinds of&nbsp;
						<label htmlFor="f">(f)</label>{" "}
						<div className="input-field" id={isActiveF ? "active" : ""}>
							<AutosizeInput
								id="f"
								onFocus={() => setIsActiveF(true)}
								onBlur={() => setIsActiveF(false)}
								value={ansF}
								onChange={(e) => setAnsF(e.target.value)}
							/>
						</div>{" "}
						and filth. We should&nbsp;<label htmlFor="g">(g)</label>{" "}
						<div className="input-field" id={isActiveG ? "active" : ""}>
							<AutosizeInput
								id="g"
								onFocus={() => setIsActiveG(true)}
								onBlur={() => setIsActiveG(false)}
								value={ansG}
								onChange={(e) => setAnsG(e.target.value)}
							/>
						</div>{" "}
						the pollution of the environment. Total prevention may be&nbsp;
						<label htmlFor="h">(h)</label>{" "}
						<div className="input-field" id={isActiveH ? "active" : ""}>
							<AutosizeInput
								id="h"
								onFocus={() => setIsActiveH(true)}
								onBlur={() => setIsActiveH(false)}
								value={ansH}
								onChange={(e) => setAnsH(e.target.value)}
							/>
						</div>{" "}
						but we can certainly&nbsp;
						<label htmlFor="i">(i)</label>{" "}
						<div className="input-field" id={isActiveI ? "active" : ""}>
							<AutosizeInput
								id="i"
								onFocus={() => setIsActiveI(true)}
								onBlur={() => setIsActiveI(false)}
								value={ansI}
								onChange={(e) => setAnsI(e.target.value)}
							/>
						</div>{" "}
						pollution by raising&nbsp;<label htmlFor="j">(j)</label>{" "}
						<div className="input-field" id={isActiveJ ? "active" : ""}>
							<AutosizeInput
								id="j"
								onFocus={() => setIsActiveJ(true)}
								onBlur={() => setIsActiveJ(false)}
								value={ansJ}
								onChange={(e) => setAnsJ(e.target.value)}
							/>
						</div>{" "}
						among the people.
					</div>
				</div>
			</div>
		</>
	);
};

export default QuestionType1;
