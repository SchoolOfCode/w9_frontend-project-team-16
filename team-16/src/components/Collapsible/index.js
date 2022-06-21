export default function Collapsible({ resourceLinks }) {
  return (
    <div>
      {resourceLinks.map((resource) => (
        <a href={resource.link}>{resource.description}</a>
      ))}
    </div>
  );
}
