export default function FormReturn({ FormReturnData }) {
  if (FormReturnData.length === 0) {
    return <></>;
  }

  return (
    <div>
      <a
        target="blank"
        href={FormReturnData[0].link}
        key={FormReturnData[0].link_id}
      >
        <p className="description">{FormReturnData[0].description}</p>
        <p className="contributor">{`⭐️ Contributor: ${FormReturnData[0].contributor}`}</p>
      </a>
    </div>
  );
}

/*
Take in formReturn as props and dynamically render:
Use link_id as key
*/
