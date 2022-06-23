import Form from "../Form";
import FormReturn from "../FormReturn";

export default function Submitpage({
  activePage,
  FormReturnData,
  setFormReturnData,
  categories,
}) {
  if (activePage === "Submitpage") {
    return (
      <div>
        <div>
          <h1>School of Code Link Submission Page</h1>
          <p>Fill out the form below to add a helpful link to the home page.</p>
        </div>
        <Form setFormReturn={setFormReturnData} categories={categories} />
        <FormReturn FormReturnData={FormReturnData} />
      </div>
    );
  }

  return <></>;
}

/*
State for text inputs can live inside Form ✅
State for the formReturn - 
  pass down state as props to formReturn component
  pass down setState function to the form component ✅
Take in categories as props to this page - pass down as props to Form (map through as per comment in Form)
*/
