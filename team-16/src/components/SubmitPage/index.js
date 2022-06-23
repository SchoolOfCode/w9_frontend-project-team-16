import Form from "../Form";

export default function Submitpage({ activePage }) {
  if (activePage === "Submitpage") {
    return (
      <div>
        <div>
          <h1>School of Code Link Submission Page</h1>
          <p>Fill out the form below to add a helpful link to the home page.</p>
        </div>
        <Form />
      </div>
    );
  }

  return <></>;
}
