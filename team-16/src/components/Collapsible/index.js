export default function Callapsible({ resourceLinks }) {
  return (
    <div>
      {resourceLinks.map((resource) => (
        <a href={resource.link}>{resource.description}</a>
      ))}
    </div>
  );
}
