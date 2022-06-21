export default function Collapsible({ resourceLinks }) {
  return (
    <div>
      {resourceLinks.map((resource) => (
        <a href={resource.link} key={resource.link_id}>
          {resource.description}
        </a>
      ))}
    </div>
  );
}
