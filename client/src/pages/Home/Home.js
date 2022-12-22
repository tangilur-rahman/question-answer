// external components

// internal components
import QuestionType1 from "../../components/QuestionType1/QuestionType1";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 home-container">
					<div className="col-10 p-0 home-wrapper">
						<header>Question & Answer</header>
						<div className="question-section" id="first-ques">
							<span>1.</span>
							<QuestionType1 />
						</div>
						<div className="question-section">
							<span>1.</span>
							<QuestionType1 />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
