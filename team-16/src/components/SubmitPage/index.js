import Form from "../Form";
import FormReturn from "../FormReturn";
import "./index.css";

export default function Submitpage({
  FormReturnData,
  setFormReturnData,
  categories,
}) {
  return (
    <div className="header-container">
      <div className="header">
        <h1>
          School of Code Link <br></br> Submission Page
        </h1>
        <p>Fill out the form below to add a helpful link to the home page.</p>
      </div>

      <div className="form">
        <Form setFormReturn={setFormReturnData} categories={categories} />
        <FormReturn FormReturnData={FormReturnData} />
      </div>
    </div>
  );
}
